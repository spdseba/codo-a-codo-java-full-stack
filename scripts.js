const API_SERVER = 'https://api.themoviedb.org/3';

const loadMovie = async () => {
    try {
        const response = await fetch(`${API_SERVER}/movie/popular?api_key=4bfb455e77dc99ab8360fb3b90c12337&language=es-mx`);
        console.log(response);
        const data = await response.json(); 
        const movies = data.results;
        console.log(movies);

        const trends = document.querySelector('.trends .movies');
        trends.innerHTML = '';

        movies.forEach(movie => {

            const ancla = document.createElement('a');
            ancla.href = './pages/detalle.html';

            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('movie');
            // creo la imagen
            const img = document.createElement('img');
            img.classList.add('trendsImg');
            img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            img.alt = movie.title;

            // creo el div movieTitle
            const movieTitle = document.createElement('div');
            movieTitle.classList.add('movieTitle');
            // creo el h4
            const titulo = document.createElement('h4');
            titulo.textContent = movie.title;
            // relaciono los elementos
            ancla.appendChild(peliculaDiv);
            peliculaDiv.appendChild(img);
            peliculaDiv.appendChild(movieTitle);
            movieTitle.appendChild(titulo);
            trends.appendChild(ancla);
          
        });
    } catch (error) {
        
    }
}
loadMovie();