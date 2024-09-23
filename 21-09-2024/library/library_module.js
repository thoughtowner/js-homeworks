function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function LibraryManager() {
    this.books = [];
}

LibraryManager.prototype.addBook = function(book) {
    this.books.push(book);
}

LibraryManager.prototype.deleteBook = function(book) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i] === book) {
            this.books.splice(i, 1);
            return;
        }
    }
    console.log(`Книги ${book.title} не существует в библиотеке`);
}

LibraryManager.prototype.getAllBooks = function() {
    return this.books;
}

export { Book, LibraryManager };