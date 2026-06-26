import { useEffect, useState } from "react";
import { getRandomTrendingMovie } from "../../services/movieService";

function Trending({ onMovieClick }) {
  console.log("Trending Component Loaded");
  console.log("onMovieClick:", onMovieClick);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadTrendingMovies() {
      const data = await getRandomTrendingMovie();
      setMovies(data);
    }

    loadTrendingMovies();
  }, []);

  return (
    <section className="trending">
      <h2>Trending Now</h2>

      <div className="movie-row">
        {movies.map((movie, index) => (
          <div
            className="movie-card cursor-pointer"
            key={movie.id}
            onClick={() => onMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
