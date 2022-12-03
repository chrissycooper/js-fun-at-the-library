function createLibrary(nameOfLib){
  return {
    name: nameOfLib,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
};

function addBook (nameOfLib, bookToAdd){
  return nameOfLib.shelves.fantasy.push(bookToAdd);
}



module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};