export const SELECTORS = {
    get commentsContainer() {
        return document.querySelector(".interactive-comments-section-container");
    },
    get deleteBtn(){
        return document.querySelector(".delete-btn");
    },
    get editBtn(){
        return document.querySelector(".edit-btn");
    },
    get sendBtn(){
        return document.querySelector("#send-btn");
    },
    get textarea(){
       return document.querySelector("#comment-message");
    }
}