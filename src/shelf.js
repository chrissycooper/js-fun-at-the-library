function shelfBook(book, shelf){
  if (shelf.length < 3){
    return shelf.unshift(book);
  }  
};



module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};