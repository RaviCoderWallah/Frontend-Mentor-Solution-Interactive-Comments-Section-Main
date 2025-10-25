export function deleteById(arr, idToDelete) {
  return arr
    .filter(item => item.id !== idToDelete) // remove if id matches
    .map(item => {
      // if this item has nested replies, clean them too
      if (item.replies) {
        item.replies = deleteById(item.replies, idToDelete);
      }
      return item;
    });
}
