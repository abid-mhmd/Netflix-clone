import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Plus, ThumbsUp, X } from "lucide-react";
import { useWatchlist } from "../../context/WatchlistContext";
import { getRelatedMovies } from "../../services/movieService";

import RelatedCard from "./RelatedMovieCard";

function MovieDetailsModal({ movie, onClose }) {
  const { addToWatchlist } = useWatchlist();
  const [activeMovie, setActiveMovie] = useState(movie);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActiveMovie(movie);
  }, [movie]);

  useEffect(() => {
    async function fetchRelated() {
      try {
        setLoading(true);
        const data = await getRelatedMovies(activeMovie.id);
        setRelatedMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (activeMovie?.id) {
      fetchRelated();
    }
  }, [activeMovie]);

  const releaseYear = activeMovie.release_date
    ? new Date(activeMovie.release_date).getFullYear()
    : "N/A";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center !p-3 !md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#141414] rounded-xl overflow-y-auto max-h-[100vh] w-full max-w-7xl shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute !top-6 !right-5 z-20 bg-black/70 rounded-full !p-2 text-white hover:bg-zinc-800 transition"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${activeMovie.backdrop_path}`}
            alt={activeMovie.title}
            className="w-full aspect-video object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

          <div className="absolute !bottom-8 !left-8 !right-8">
            <h1 className="text-5xl font-extrabold !mb-4 tracking-tight leading-tight">
              {activeMovie.title || activeMovie.name}
            </h1>

            <div className="flex !gap-5 items-center">
              <button className="flex items-center !gap-2 bg-white text-black !px-6 !py-2 rounded font-bold hover:bg-white/80 transition active:scale-95">
                <FaPlay className="text-black transform translate-y-[0.5px]" />
                <span>Play</span>
              </button>

              <button
                onClick={() => addToWatchlist(activeMovie)}
                className="w-10 h-10 rounded-full border border-zinc-400 bg-zinc-900/60 text-white flex items-center justify-center hover:border-white hover:bg-zinc-800/80 transition active:scale-95"
              >
                <Plus size={20} />
              </button>

              <button className="w-10 h-10 rounded-full border border-zinc-400 bg-zinc-900/60 text-white flex items-center justify-center hover:border-white hover:bg-zinc-800/80 transition active:scale-95">
                <ThumbsUp size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="!p-8">
          <div className="flex !gap-4 text-sm !mb-4 items-center">
            <span className="text-green-400 font-semibold">
              {activeMovie.vote_average
                ? `${activeMovie.vote_average.toFixed(1)} Rating`
                : "No Rating"}
            </span>

            <span className="text-zinc-300">{releaseYear}</span>

            <span className="border border-zinc-500 !px-2 rounded-[3px] text-xs font-medium text-zinc-200">
              {activeMovie.adult ? "18+" : "13+礼"}
            </span>
          </div>
          <p className="text-zinc-300 text-lg leading-8 !mb-10 max-w-4xl select-text">
            {activeMovie.overview ||
              "No description available for this content asset location."}
          </p>
          <h2 className="text-2xl font-bold !mb-6 tracking-wide text-white">
            More Like This
          </h2>

          {loading ? (
            <div className="flex justify-center !py-10">
              <p className="text-zinc-400 text-sm animate-pulse">
                Loading related content grid...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedMovies.slice(0, 6).map((relatedMovie) => (
                <RelatedCard
                  key={relatedMovie.id}
                  movie={relatedMovie}
                  onClick={setActiveMovie}
                  onAddToWatchlist={addToWatchlist}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsModal;
