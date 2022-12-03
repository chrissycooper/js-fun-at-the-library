function createLibrary(nameOfLib){
  return {
    name: nameOfLib,
    shelves: {fantasy: [], fiction: [], nonFiction: [], miscellaneous: []}
  }
};

function addBook (nameOfLib, bookToAdd){
  if(bookToAdd.genre === 'fantasy'){
  return nameOfLib.shelves.fantasy.push(bookToAdd);
  } else if (bookToAdd.genre === 'nonFiction'){
    return nameOfLib.shelves.nonFiction.push(bookToAdd);
  } else if (bookToAdd.genre === 'fiction'){
    return nameOfLib.shelves.fiction.push(bookToAdd);
  } else {
    return nameOfLib.shelves.miscellaneous.push(bookToAdd);
  }
}



module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};