import { SELECTORS } from "../Constants/selectors.js";

const modal = () => {
    SELECTORS.deleteBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
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
}

export default modal;