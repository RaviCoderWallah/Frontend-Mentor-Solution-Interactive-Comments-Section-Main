import { createElement } from "../utils/createElement.js";
import { SELECTORS } from "../Constants/selectors.js";


export const commentCard = (
    content,
    createdDate,
    score,
    userName,
    userImage,
    currentUserName,
    replyingTo = "",
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
                            ${
                                userName == currentUserName 
                                ? 
                                "<span class='bg-purple-600 text-white p-1 radius-sm'>you</span>" 
                                : 
                                "" 
                            }
                            <p class="user-name">${userName}</p>
                            <p class="comment-create-date text-grey-500">${createdDate}</p>
                        </div>
                        <div class="comment-reply">
                        ${ 
                            userName == currentUserName 
                            ? 
                            `
                             <div class="flex items-center gap-1">
                               <img src="/images/icon-delete.svg"/>
                               <p class="delete-btn">Delete</p>
                             </div>
                             <div class="flex items-center gap-1">
                               <img src="/images/icon-edit.svg"/>
                               <p class="edit-btn">Edit</p>
                             </div>
                            `
                            : 
                            `<img src="./images/icon-reply.svg" alt="">
                            <p class="text-purple-600 fw-md">Reply</p>` 
                        }

                        </div>
                    </div>
                    <div class="user-comment">
                        <p class="text-grey-500">
                            ${replyingTo ? `<span class="text-purple-600 fw-md">@${replyingTo}</span> ` : ""} 
                            </span> ${content}
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

