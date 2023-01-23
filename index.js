const key = 'ad6fb9de597140d6888525b8855e22b1';
const imgApi = 'https://image.tmdb.org/3/t/p/w1280';

let upMovies = '';
let popMovies = '';
let topMovies = '';

//for the upcoming
function getUpcomingMovies() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.results.forEach(movie => {
            upMovies += `<li>
                            <img src="${imgApi}${movie.backdrop_path}" alt="" >
                            <div>
                                <p>${movie.overview}</p>
                                <h3>${movie.title}</h3>
                                <h4>${movie.release_date}</h4>
                                <h5>${movie.vote_average}</h5>
                            </div>
                        </li>`

            document.getElementById('upMovies').innerHTML = upMovies;
        
        })
    });
}

//for latest
function getPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.results.forEach(movie => {
            popMovies += `<li>
                            <img src="${imgApi}${movie.backdrop_path}" alt="" >
                            <div>
                                <p>${movie.overview}</p>
                                <h3>${movie.title}</h3>
                                <h4>${movie.release_date}</h4>
                                <h5>${movie.vote_average}</h5>
                            </div>
                        </li>`

            document.getElementById('popMovies').innerHTML = popMovies;
        
        })
    });
}



//for top-rated
function getTopRatedMovies() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.results.forEach(movie => {
            topMovies += `<li>
                            <img src="${imgApi}${movie.backdrop_path}" alt="" >
                            <div>
                                <p>${movie.overview}</p>
                                <h3>${movie.title}</h3>
                                <h4>${movie.release_date}</h4>
                                <h5>${movie.vote_average}</h5>
                            </div>
                        </li>`

            document.getElementById('topMovies').innerHTML = topMovies;
        
        })
    });
}

getUpcomingMovies();
getPopularMovies();
getTopRatedMovies();


const upcomingMovies = document.getElementById('upMovies');
const popularMovies = document.getElementById('popMovies');
const topRatedMovies = document.getElementById('topMovies');

const upl = document.querySelector('.upl');
const upr = document.querySelector('.upr');
const popl = document.querySelector('.popl');
const popr = document.querySelector('.popr');
const topl = document.querySelector('.topl');
const topr = document.querySelector('.topr');

upl.addEventListener('click', () => {
    upcomingMovies.scrollLeft -= 400;
})
upr.addEventListener('click', () => {
    upcomingMovies.scrollLeft += 400;
})
popl.addEventListener('click', () => {
    popularMovies.scrollLeft -= 400;
})
popr.addEventListener('click', () => {
    popularMovies.scrollLeft += 400;
})
topl.addEventListener('click', () => {
    topRatedMovies.scrollLeft -= 400;
})
topr.addEventListener('click', () => {
    topRatedMovies.scrollLeft += 400;
})