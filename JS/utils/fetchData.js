import { CONFIG } from "../Constants/config.js"
export const getComments = async () => {
    const res = await fetch(CONFIG.API_URL);
    return res.json();
}