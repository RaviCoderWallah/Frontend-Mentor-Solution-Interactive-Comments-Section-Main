export const SELECTORS = {
    get commentsContainer() {
        return document.querySelector(".interactive-comments-section-container");
    },
    get deleteBtn(){
        return document.querySelectorAll(".delete-btn");
    },
    get editBtn(){
        return document.querySelector(".edit-btn");
    },
    get sendBtn(){
        return document.querySelector("#send-btn");
    },
    get cancelBtn(){
       return document.querySelector("#cancel-btn");
    },
    get textarea(){
       return document.querySelector("#comment-message");
    },
    get modalOverlay(){
        return document.querySelector(".modal-overlay");
    }

}