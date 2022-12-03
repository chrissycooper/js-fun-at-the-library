function createLibrary(nameOfLib){
  return {
    name: nameOfLib,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
};

function addBook (nameOfLib, bookToAdd){
  if(bookToAdd.genre === 'fantasy'){
    nameOfLib.shelves.fantasy.push(bookToAdd);
  } else if (bookToAdd.genre === 'fiction'){
    nameOfLib.shelves.fiction.push(bookToAdd);
  } else if (bookToAdd.genre === 'nonFiction'){
    nameOfLib.shelves.nonFiction.push(bookToAdd);
  } 
}

// function addBook(nameOfLib, bookToAdd){
//   nameOfLib.shelves[bookToAdd.genre].push(bookToAdd);
// }

function checkoutBook(libObj, bookRequested, genreShelf){
  for  (var i = 0; i < genreShelf.length; i++){
    if (libObj.shelves[genreShelf].length === 0){
      return `Sorry, there are currently no copies of ${bookRequested} available at the ${libObj.name}`
    } else if (libObj.shelves[genreShelf][i].title === bookRequested){
      libObj.shelves[genreShelf].pop();
      return `You have now checked out ${bookRequested} from the ${libObj.name}`
    }
  }
}




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};