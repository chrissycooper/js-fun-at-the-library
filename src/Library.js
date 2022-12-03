function createLibrary(nameOfLib, shelf){
  return {
    name: nameOfLib,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};