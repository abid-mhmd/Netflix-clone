import { X } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function TrendingModal({ movie, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm !p-5"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[640px] overflow-hidden rounded-xl bg-[#141414] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white hover:bg-black/60"
        >
          <X size={28} />
        </button>
        <div className="relative h-[360px] w-full">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
        </div>
        <div className="relative !-mt-20 !px-8 !pb-8">
          <h1 className="!mb-4 text-3xl font-bold text-white">{movie.title}</h1>

          <div className="!mb-4 flex items-center !gap-3 text-sm">
            <span className="text-white">
              {movie.release_date?.slice(0, 4)}
            </span>

            <span className="flex items-center !gap-2 rounded bg-zinc-700 !px-2 !py-1 text-white">
              <FaStar className="text-yellow-400 text-xs" />
              {movie.vote_average.toFixed(1)}
            </span>

            <span className="rounded bg-zinc-700 !px-2 !py-1 text-white">
              Movie
            </span>
          </div>

          <p className="!mb-6 line-clamp-3 text-base leading-7 text-zinc-300">
            {movie.overview}
          </p>

          <Link
            to="/login"
            className="inline-flex items-center !gap-2 rounded-md bg-[#E50914] !px-7 !py-3 text-base font-semibold text-white hover:bg-[#c40812]"
          >
            Get Started
            <span className="text-xl">›</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrendingModal;
