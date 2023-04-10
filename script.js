const writeOut = document.querySelector(".info");
const writeIt = document.querySelector(".text");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.info = function () {
            let readStatus = "not read yet";
            if (this.read) {
                readStatus = "already read";
            }
            return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
        };
    }
}



  // create a new book object
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 304, true);

const book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 500, false );
writeIt.textContent = book2.info();

// call the info() method to get the book's information
writeOut.textContent = book1.info(); // "The Hobbit by J.R.R. Tolkien, 304 pages, already read."

