// 2. Задача: Библиотека фильмов
// Условие:
// Создайте конструктор Movie для представления фильма с параметрами:

// title — название фильма.
// director — режиссёр.
// releaseYear — год выпуска.
// Добавьте методы к прототипу:

// getDescription() — выводит строку вида "Фильм [title], режиссёр [director], вышел в [releaseYear]".
// Создайте функцию-конструктор Library для управления коллекцией фильмов:

// Метод addMovie(movie) — добавляет фильм в коллекцию.
// Метод findMovieByTitle(title) — ищет фильм по названию и возвращает его описание (вызов метода getDescription()).
// Метод listAllMovies() — выводит описание всех фильмов в библиотеке.
// Подсказка:
// Используйте массив для хранения фильмов и методы для поиска и вывода данных.



function Movie(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
}

Movie.prototype.getDescription = function() {
    console.log(`Фильм ${this.title}, режиссёр ${this.director}, вышел в ${this.releaseYear}`);
}

function Library() {
    this.movies = [];
}

Library.prototype.addMovie = function(movie) {
    return this.movies.push(movie);
}

Library.prototype.findMovieByTitle = function(title) {
    let neddedFilm = this.movies.find(function(element) { return element.title === title; });
    return neddedFilm.getDescription();
}

Library.prototype.listAllMovies = function() {
    for (let i = 0; i < this.movies.length; i++) {
        this.movies[i].getDescription();
    }
}

let movieA = new Movie('a', 'A', 2000);
let movieB = new Movie('b', 'B', 2000);
let movieC = new Movie('c', 'C', 2000);
let library = new Library();

library.addMovie(movieA);
library.addMovie(movieB);
library.addMovie(movieC);
library.findMovieByTitle('b');
library.listAllMovies();