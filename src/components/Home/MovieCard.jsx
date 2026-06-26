import { memo } from "react";

function MovieCard({ movie, onClick }) {
  if (!movie || !movie.poster_path) {
    return null;
  }

  return (
    <div
      onClick={() => onClick(movie)}
      className="relative flex-shrink-0 w-40 h-[250px] cursor-pointer group transition-transform duration-300 hover:scale-105 hover:z-20"
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end !p-4 rounded-lg">
          <p className="text-white text-sm font-semibold truncate w-full">
            {movie.title || movie.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(MovieCard);
