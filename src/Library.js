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
  if (genreShelf === 'fiction' && libObj.shelves.fiction[i].title === bookRequested){
      libObj.shelves.fiction.pop();
      return `You have now checked out ${bookRequested} from the Denver Public Library`
    } else if (genreShelf === 'nonFiction' && libObj.shelves.nonFiction[i].title === bookRequested) {
      libObj.shelves.nonFiction.pop();
      return `You have now checked out ${bookRequested} from the Denver Public Library`
    }
  }
}

// for  (var i = 0; i < nameOfLib.shelves.genreShelf.length; i++){
//   if (genreShelf === 'fiction' && nameOfLib.shelves.fiction[i].title.includes(bookRequested)){
//       return `You have now checked out ${bookRequested} from the ${nameOfLib}`
//     }
//   }
// // }



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};