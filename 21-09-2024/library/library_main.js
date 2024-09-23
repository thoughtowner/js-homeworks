import { Book, LibraryManager } from "./library_module.js"


let book1 = new Book('book1', 'author', 2000);
let book2 = new Book('book2', 'author', 2000);
let libraryManager = new LibraryManager();

libraryManager.addBook(book1);
libraryManager.addBook(book2);
console.log(libraryManager.getAllBooks());
libraryManager.deleteBook(book1);
libraryManager.deleteBook(book1);
console.log(libraryManager.getAllBooks());