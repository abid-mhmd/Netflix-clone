import tmdb from "../api/tmdb";
export const getRandomTrendingMovie = async () => {
  try {
    const res = await tmdb.get("/trending/movie/week");
    const currentYear = new Date().getFullYear();

    const movies = res.data.results.filter((movie) => {
      const year = movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 0;

      return (
        movie.poster_path && movie.backdrop_path && year >= currentYear - 2
      );
    });

    if (movies.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error("Error fetching random trending movie:", error);
    return null;
  }
};

export const getTrendingMalayalamMovies = async () => {
  const res = await tmdb.get("/discover/movie", {
    params: {
      with_original_language: ["ml","ta"],

      sort_by: "popularity.desc",

      page: 1,
    },
  });

  return res.data.results.filter((movie) => movie.poster_path);
};
export const getHomeRows = async () => {
  const rows = [];

  try {
    const trending = await tmdb.get("/discover/movie", {
      params: {
        with_original_language: "ml",

        sort_by: "popularity.desc",
      },
    });

    rows.push({
      title: "Trending Now",
      movies: trending.data.results,
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const latest = await tmdb.get("/discover/movie", {
      params: {
        with_original_language: "ml",

        sort_by: "primary_release_date.desc",
      },
    });

    rows.push({
      title: "New Releases",
      movies: latest.data.results,
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const action = await tmdb.get("/discover/movie", {
      params: {
        with_original_language: "ml",

        with_genres: 28,
      },
    });

    rows.push({
      title: "Action Movies",
      movies: action.data.results,
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const drama = await tmdb.get("/discover/movie", {
      params: {
        with_original_language: "ml",

        with_genres: 18,
      },
    });

    rows.push({
      title: "Drama Movies",
      movies: drama.data.results,
    });
  } catch (error) {
    console.log(error);
  }

  return rows;
};

export const getRelatedMovies = async (movieId) => {
  const res = await tmdb.get(`/movie/${movieId}/recommendations`);

  return res.data.results.filter(
    (movie) => movie.poster_path && movie.backdrop_path,
  );
};

export const getTrendingIndiaMovies = async () => {
  const languages = ["ml", "ta","hi"];

  const allMovies = [];

  for (const lang of languages) {
    const res = await tmdb.get("/discover/movie", {
      params: {
        with_original_language: lang,
        sort_by: "popularity.desc",
      },
    });

    allMovies.push(...res.data.results);
  }

  return allMovies
    .filter((movie) => movie.poster_path)
    .sort((a, b) => b.popularity - a.popularity);
};
