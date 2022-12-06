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
    if(this.library.shelves.fantasy[0].title === bookRequested){
      return `Yes, we have ${bookRequested}`;
    } else {
      return `Sorry, we do not have ${bookRequested}`
    }
  }
}


module.exports = Librarian;