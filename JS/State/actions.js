import { state, setComments } from "./appState.js";

export function addComment(newComment) {
  const updated = [...state.comments, newComment];
  setComments(updated);
}