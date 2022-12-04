const { addBook } = require("./library");

class Librarian {
  constructor(nameInput, library) {
    this.name = nameInput;
    this.library = library;
  }
  greetPatron(patron, isMorning){
    if (isMorning === true){
      return `Good morning, ${patron}!`;
    }
    return `Hello, ${patron}!`;
  }
  findBook(bookRequested){
    if(book.title === bookRequested){
      return `Yes, we have ${bookRequested}`;
    }
  }
}

module.exports = Librarian;