import { createContext, useContext, useEffect, useState } from "react";
import categories from "../utils/movieCategories";
import tmdb from "../api/tmdb";
import { getTrendingIndiaMovies } from "../services/movieService";
const MovieContext = createContext();

export const useMovies = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const movieData = {};
        for (const category of categories) {
          const response = await tmdb.get(category.endpoint);
          let movies = response.data.results.filter(
            (movie) => movie.poster_path,
          );

          if (category.title === "Trending India") {
            movies = await getTrendingIndiaMovies();
          }
          movieData[category.title] = movies;
        }
        setMoviesByCategory(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ moviesByCategory, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
