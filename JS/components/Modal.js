import { SELECTORS } from "../Constants/selectors.js";
import { getFromStorage, saveToStorage } from "../utils/storage.js";
import { CONFIG } from "../Constants/config.js";
import { deleteById } from "../utils/deleteById.js";

const modal = () => {

    let currentCardClik;
    let getID;
    let data = getFromStorage(CONFIG.STOARAGE_KEY);

    SELECTORS.deleteBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            //track which user's card click
            currentCardClik = e.target.closest(".interactive-comments-card")
            getID = e.target.closest(".interactive-comments-card").getAttribute("data-id");

            SELECTORS.modalOverlay.classList.remove("hidden");
            SELECTORS.modalOverlay.classList.remove("fade-out");
            SELECTORS.modalOverlay.classList.add("fade-in");
        });
    });

    SELECTORS.cancelBtn.addEventListener("click", () => {
        SELECTORS.modalOverlay.classList.remove("fade-in");
        SELECTORS.modalOverlay.classList.add("fade-out");
        setTimeout(() => {
            SELECTORS.modalOverlay.classList.add("hidden");
        }, 300); // Wait for animation to complete before hiding
    });



    SELECTORS.confirmDeleteBtn.addEventListener("click", (e) => {
    
        SELECTORS.modalOverlay.classList.add("hidden");
    
        // Remove the clicked card from the DOM
        if (currentCardClik) {
            currentCardClik.remove();
        }
    
        // Delete from data by id first
        const updatedComments = deleteById(data.comments, getID);
    
        // Build full data object keeping currentUser separate and save
        data = { comments: updatedComments, currentUser: data.currentUser };
        saveToStorage(CONFIG.STOARAGE_KEY, data);
    });
}

export default modal;