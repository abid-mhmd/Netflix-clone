import MovieCard from "./MovieCard";

function MovieRow({ title, movies ,onMovieClick }) {
  return (
    <section className="!mb-12">
      <h2 className="text-white !text-2xl !font-bold !px-10 !mb-4">{title}</h2>

      <div className="flex gap-4 overflow-hidden !px-8 scrollbar-hide scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick}/>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;