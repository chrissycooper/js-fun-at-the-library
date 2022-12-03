function createLibrary(nameOfLib){
  return {
    name: nameOfLib,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
};

function addBook (nameOfLib, bookToAdd){
  if(bookToAdd.genre === 'fantasy'){
  return nameOfLib.shelves.fantasy.push(bookToAdd);
  } else if (bookToAdd.genre === 'fiction'){
    return nameOfLib.shelves.fiction.push(bookToAdd);
  } else if (bookToAdd.genre === 'nonFiction'){
    return nameOfLib.shelves.nonFiction.push(bookToAdd);
  } 
}

function checkoutBook(libObj, bookRequested, genreShelf){
  for  (var i = 0; i < 5; i++){
    if (libObj.shelves.fantasy.length === 0){
      return `Sorry, there are currently no copies of ${bookRequested} available at the ${libObj.name}`
    }else if (genreShelf === 'fiction' && libObj.shelves.fiction[i].title === bookRequested){
      libObj.shelves.fiction.pop();
      return `You have now checked out ${bookRequested} from the ${libObj.name}`
    } else if (genreShelf === 'nonFiction' && libObj.shelves.nonFiction[i].title === bookRequested) {
      libObj.shelves.nonFiction.pop();
      return `You have now checked out ${bookRequested} from the ${libObj.name}`
    } else if (genreShelf === 'fantasy' && libObj.shelves.fantasy[i].title === bookRequested) {
      libObj.shelves.fantasy.pop();
    } else {
      return `Sorry, there are currently no copies of ${bookRequested} available at the ${libObj.name}`
    }
  }
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};