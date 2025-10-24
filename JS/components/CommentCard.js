import { createElement } from "../utils/createElement.js";
import { SELECTORS } from "../Constants/selectors.js";


export const commentCard = (
    content,
    createdDate,
    score,
    userName,
    userImage,
    className = ""
) => {
    const commentContent = `
                <div class="comments-card__score">
                    <div>
                        <div class="increment-icon">
                            <img src="./images/icon-plus.svg" alt="">
                        </div>
                        <p class="comment-score">${score}</p>
                        <div class="decrement-icon">
                            <img src="./images/icon-minus.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="comments-card__comments">
                    <div class="user-profile">
                        <div>
                            <div class="user-image">
                                <img src="${userImage}" alt="">
                            </div>
                            <p class="user-name">${userName}</p>
                            <p class="comment-create-date text-grey-500">${createdDate}</p>
                        </div>
                        <div class="comment-reply">
                            <img src="./images/icon-reply.svg" alt="">
                            <p class="text-purple-600 fw-md">Reply</p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <p class="text-grey-500">
                           ${content}
                        </p>
                    </div>
                </div>
    `;

    const commentCard = createElement(
        "div",
        `interactive-comments-card${className ? " " + className : ""}`,
        commentContent
    );

    SELECTORS.commentsContainer.appendChild(commentCard);

    return commentCard;
}

