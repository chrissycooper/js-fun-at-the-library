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
    console.log(this.library.shelves)
    if(this.library.shelves.fantasy[0].title === bookRequested){
      this.library.shelves.fantasy.pop();
      return `Yes, we have ${bookRequested}`;
    } else {
      return `Sorry, we do not have ${bookRequested}`
    }
  }

  calculateLateFee(days){
    return Math.ceil(days * 0.25)
  }
}


module.exports = Librarian;