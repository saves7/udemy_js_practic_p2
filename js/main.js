let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    }
}

start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {

    for (let i=0; i<2; i++) {
        let a = prompt('Фильм'); 
        let b = prompt('Рейтинг'); 
        if (a != null && b != null && a !='' && b !='' ) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
     
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    for (let i=0; i<2; i++) {
        let a = prompt('Фильм'); 
        let b = prompt('Рейтинг'); 
        if (a != null && b != null && a !='' && b !='' ) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

detectPersonalLevel();

console.log(personalMovieDb);