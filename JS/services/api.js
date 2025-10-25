import { CONFIG } from "../Constants/config.js"
import { saveToStorage } from "../utils/storage.js";


export const loadComments =  async () => {
  const res = await fetch(CONFIG.API_URL);
  const data = await res.json();
  saveToStorage(CONFIG.STOARAGE_KEY, data);
  return data;
}