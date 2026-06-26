import tmdb from "../api/tmdb";
export const getRandomTrendingMovie = async () => {
  const languages = ["ml", "ta"];

  const allMovies = [];

  try {
    for (const language of languages) {
      const res = await tmdb.get("/discover/movie", {
        params: {
          with_original_language: language,
          sort_by: "popularity.desc",
          page: 1,
        },
      });

      allMovies.push(...res.data.results);
    }

    return allMovies
      .filter((movie) => movie.poster_path)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

export const getTrendingMalayalamMovies = async () => {
  const res = await tmdb.get("/discover/movie", {
    params: {
      with_original_language: ["ml", "ta"],

      sort_by: "popularity.desc",

      page: 1,
    },
  });

  return res.data.results.filter((movie) => movie.poster_path);
};

export const getRelatedMovies = async (movieId) => {
  const res = await tmdb.get(`/movie/${movieId}/recommendations`);

  return res.data.results.filter(
    (movie) => movie.poster_path && movie.backdrop_path,
  );
};

export const getTrendingIndiaMovies = async () => {
  const languages = ["ml", "ta", "hi"];

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

export async function getMovieTrailer(movieId) {
  const res = await tmdb.get(`/movie/${movieId}/videos`);
  const trailer = res.data.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer",
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
}
