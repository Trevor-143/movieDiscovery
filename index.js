const key = 'ad6fb9de597140d6888525b8855e22b1';
const imgApi = 'https://image.tmdb.org/3/t/p/w1280';
const search_text = document.getElementById('search_text');
const btn = document.getElementById('btn');
let ressSpan = document.querySelector('.ressSpan');

let upMovies = '';
let popMovies = '';
let topMovies = '';
let foundMovies = '';

//for the upcoming
function getUpcomingMovies() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.results.forEach(movie => {
            upMovies += `<li>
                            <img src="${imgApi}${movie.poster_path}" alt="" >
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
                            <img src="${imgApi}${movie.poster_path}" alt="" >
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
                            <img src="${imgApi}${movie.poster_path}" alt="" >
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

function getSearched() {
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${search_text.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        data.results.forEach(movie => {
            foundMovies += `<li class="movFound">
                                <img class="poster" src="${imgApi}${movie.poster_path}" alt="" >
                                <img class="backdrop" src="${imgApi}${movie.backdrop_path}" alt="" >
                                <div>
                                    <p>${movie.overview}</p>
                                    <h3>${movie.title}</h3>
                                    <h4>${movie.release_date}</h4>
                                    <h5>${movie.vote_average}</h5>
                                </div>
                            </li>`

            document.getElementById('foundMovies').innerHTML = foundMovies;
            console.log(movie)
        
        })
    });
}
ressSpan.innerHTML = ''

btn.addEventListener('click', (e) => {
    foundMovies = '';
    e.preventDefault()
    if (search_text.value !== null ) {
        ressSpan.innerHTML = `<span class="ress">Your search results</span> 
                            <i class="fa-solid fa-chevron-left rel"></i>
                            <i class="fa-solid fa-chevron-right rer"></i>`
        getSearched();
    } else {
        ressSpan.innerHTML = '';
    }
});

getUpcomingMovies();
getPopularMovies();
getTopRatedMovies();


const upcomingMovies = document.getElementById('upMovies');
const popularMovies = document.getElementById('popMovies');
const topRatedMovies = document.getElementById('topMovies');
const gotMovies = document.getElementById('foundMovies');

const upl = document.querySelector('.upl');
const upr = document.querySelector('.upr');
const popl = document.querySelector('.popl');
const popr = document.querySelector('.popr');
const topl = document.querySelector('.topl');
const topr = document.querySelector('.topr');
const rel = document.querySelector('.rel');
const rer = document.querySelector('.rer');

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
rel.addEventListener('click', () => {
    gotMovies.scrollLeft -= 400;
})
rer.addEventListener('click', () => {
    gotMovies.scrollLeft += 400;
})
