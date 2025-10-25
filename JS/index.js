import { commentCard } from "./components/CommentCard.js";
import modal from "./components/Modal.js";
import replyBoxEventHandler from "./components/ReplyBox.js";
import { CONFIG } from "./Constants/config.js";
import { loadComments } from "./services/api.js";
import { getFromStorage, saveToStorage } from "./utils/storage.js";

let commentsData = getFromStorage(CONFIG.STOARAGE_KEY);

const showCommentsCard = (data) => {
    const currentUserName = data?.currentUser?.username;

    data?.comments?.forEach((comment) => {
        const {id, content, createdAt, score, user, replies } = comment;
        const userName = user?.username;
        const userImage = user?.image.png;

        // Render main comment
        commentCard(id, content, createdAt, score, userName, userImage, currentUserName);

        // Render replies if any
        if (replies && replies.length > 0) {
            replies.forEach((reply) => {
                const {id, content, createdAt, score, user, replyingTo } = reply;
                const userName = user.username;
                const userImage = user.image.png;
                commentCard(id, content, createdAt, score, userName, userImage, currentUserName, replyingTo, "nested");
            });
        }
    });
};

// ✅ Logic for first-time load
if (commentsData === null) {
    // Load from your JSON file (first time only)
    loadComments(CONFIG.API_URL).then((fetchedData) => {

        commentsData = fetchedData;

        // Save it into localStorage for future refreshes
        saveToStorage(CONFIG.STOARAGE_KEY, fetchedData);

        // Show comments from file
        showCommentsCard(fetchedData);
    });
} else {
    // Load from localStorage (after refresh)
    showCommentsCard(commentsData);
}

// Enable reply/comment box
replyBoxEventHandler();

//What occurs when user's clck on delete btn 
modal();
