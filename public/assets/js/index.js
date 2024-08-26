const API_KEY = '6acccdf391190954a71da21ab5cf50bc'; // Remplacez par votre clé API TMDb
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', async () => {
    const query = searchInput.value;
    if (query.length > 2) {
        const response = await fetch(`${API_URL}${query}`);
        const data = await response.json();
        displayResults(data.results);
    } else {
        resultsContainer.innerHTML = '';
    }
});

function displayResults(movies) {
    resultsContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('result-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        movieItem.addEventListener('click', () => {
            redirectToMovie(movie.id);
        });
        resultsContainer.appendChild(movieItem);
    });
}

function redirectToMovie(movieId) {
    window.open(`https://www.themoviedb.org/movie/${movieId}`, '_blank');
}

