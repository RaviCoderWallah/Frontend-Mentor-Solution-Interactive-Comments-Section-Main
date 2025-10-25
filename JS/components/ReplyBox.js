import { SELECTORS } from "../Constants/selectors.js";
import { isValidComment } from "../utils/validation.js";
import { addComment } from "../State/actions.js";
import { commentCard } from "./CommentCard.js";
import { CONFIG } from "../Constants/config.js";
import { getFromStorage, saveToStorage } from "../utils/storage.js";
import { score } from "./ScoreBox.js";

const replyBoxEventHandler = () => {
    let commentValue;

    // Enable/disable Send button
    SELECTORS.textarea.addEventListener("input", () => {
        commentValue = SELECTORS.textarea.value.trim();
        const comment = isValidComment(commentValue);

        if (comment) {
            SELECTORS.sendBtn.removeAttribute("disabled");
        } else {
            SELECTORS.sendBtn.setAttribute("disabled", true);
        }
    });

    // On send button click
    SELECTORS.sendBtn.addEventListener("click", () => {
        // 1️⃣ Create new comment object
        const newCommentData = {
            id: crypto.randomUUID(),
            content: SELECTORS.textarea.value.trim(),
            createdAt: "a few seconds ago",
            score: 0,
            user: {
                image: {
                    png: "./images/avatars/image-juliusomo.webp",
                    webp: "./images/avatars/image-juliusomo.png",
                },
                username: "juliusomo",
            },
            replies: [],
        };

        // 2️⃣ Get existing data from localStorage
        let entireData = getFromStorage(CONFIG.STOARAGE_KEY);

        // If no data, initialize
        if (!entireData) {
            entireData = { comments: [] };
        }

        // 3️⃣ Add new comment into existing comments
        entireData.comments.push(newCommentData);

        // 4️⃣ Save back to localStorage
        saveToStorage(CONFIG.STOARAGE_KEY, entireData);

        // 5️⃣ Show immediately on UI
        const userName = newCommentData.user.username;
        const userImage = newCommentData.user.image.png;
        commentCard(
            newCommentData.content,
            newCommentData.createdAt,
            newCommentData.score,
            userName,
            userImage,
            userName
        );

        // 6️⃣ Reset textarea
        SELECTORS.textarea.value = "";
        SELECTORS.sendBtn.setAttribute("disabled", true);
    });
};

export default replyBoxEventHandler;
