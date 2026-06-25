import { memo } from "react";
import { Plus } from "lucide-react";

function RelatedCard({ movie, onClick, onAddToWatchlist }) {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div
      onClick={() => onClick(movie)}
      className="
        bg-[#1f1f1f]

        rounded-lg

        overflow-hidden

        cursor-pointer

        transition-all
        duration-300

        hover:scale-105

        hover:z-20
      "
    >
      {/* Backdrop */}

      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className="
            w-full
            h-[180px]

            object-cover
          "
        />
      </div>

      {/* Content */}

      <div className="p-4">
        <div
          className="
            flex
            justify-between
            items-start

            mb-3
          "
        >
          <h3
            className="
              text-white
              font-bold

              text-base

              line-clamp-2

              flex-1
            "
          >
            {movie.title}
          </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();

              onAddToWatchlist(movie);
            }}
            className="
              ml-2

              h-9
              w-9

              rounded-full

              border
              border-zinc-500

              flex
              items-center
              justify-center

              hover:border-white
            "
          >
            <Plus size={18} />
          </button>
        </div>

        <div
          className="
            flex
            items-center

            gap-3

            mb-3

            text-sm
            text-zinc-400
          "
        >
          <span
            className="
              text-green-400
              font-semibold
            "
          >
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>

          <span>{releaseYear}</span>

          <span
            className="
              border
              border-zinc-500

              px-1

              text-xs
            "
          >
            {movie.adult ? "18+" : "13+"}
          </span>
        </div>

        <p
          className="
            text-zinc-300
            text-sm

            leading-relaxed

            line-clamp-3
          "
        >
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
}

export default memo(RelatedCard);
