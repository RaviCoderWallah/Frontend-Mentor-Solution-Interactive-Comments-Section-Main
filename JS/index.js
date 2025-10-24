import { commentCard } from "./components/CommentCard.js";
import { getComments } from "./utils/fetchData.js";

const commentsData = await getComments("/API/data.json");

const showCommentsCard = () => {

    let currentUserName = commentsData.currentUser.username;


    commentsData.comments.forEach((comment) => {
        const { content, createdAt, score, user } = comment;
        const userName = user.username;
        const userImage = user.image.png;
        const replies = comment.replies;

       
        commentCard(content, createdAt, score, userName, userImage, currentUserName);

        if (replies && replies.length !== 0) {
            replies.forEach((reply) => {
                const { content, createdAt, score, user,replyingTo } = reply;
                const userName = user.username;
                const userImage = user.image.png;


                commentCard(content, createdAt, score, userName, userImage, currentUserName, replyingTo, "nested");
            });
        }
    });
};

showCommentsCard();
