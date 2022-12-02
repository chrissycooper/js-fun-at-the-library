function shelfBook(book, shelf){
  if (shelf.length < 3){
    return shelf.unshift(book);
  }  
};

function unshelfBook(bookTitle, shelf){  
  for (i = 0; i < shelf.length; i++){
    if (bookTitle === shelf[i].title){
      shelf.splice(i, 1);
    } 
  }
  return shelf;
};



module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};