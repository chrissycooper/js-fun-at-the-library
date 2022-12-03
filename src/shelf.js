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

function listTitles(shelf){
  var listOfTitles = ""
  for (i = 0; i < shelf.length; i++){
    if (i === 0){
      listOfTitles = shelf[i].title;
    } else {
      listOfTitles = listOfTitles + ", " + shelf[i].title;
    }
  }
  return listOfTitles;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};