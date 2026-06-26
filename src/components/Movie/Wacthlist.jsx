import { X, Trash2, Play, Info, Loader } from "lucide-react";
import { useWatchlist } from "../../context/WatchlistContext";
import { useState } from "react";

function Watchlist({ onClose, onMovieClick }) {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [loading,setLoading]=useState(null);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex justify-center items-center !p-6"
      onClick={onClose}
    >
      <Loader/>
      <div
        className="bg-[#141414] w-full max-w-7xl h-[90vh] rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#141414] !px-8 !py-6 border-b border-zinc-800 flex justify-between items-center z-10">
          <h1 className="text-white text-4xl font-bold tracking-tight">
            My List
          </h1>

          <button
            onClick={onClose}
            className="h-12 w-12 rounded-full bg-black/50 border border-zinc-800 hover:bg-zinc-900 transition-colors flex items-center justify-center text-white"
          >
            <X size={28} />
          </button>
        </div>
        <div className="!p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-y-auto flex-1 custom-scrollbar">
          {watchlist.length === 0 ? (
            <div className="col-span-full flex flex-col justify-center items-center !py-20">
              <p className="text-zinc-400 text-xl font-medium">
                No Movies In Watchlist
              </p>
            </div>
          ) : (
            watchlist.map((movie) => (
              <div
                key={movie.id}
                className="relative group cursor-pointer aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 transition-all duration-300 hover:scale-105 hover:z-20 shadow-md hover:shadow-2xl"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ">
                  <h3 className="text-white text-sm font-bold  line-clamp-2 drop-shadow">
                    {movie.title}
                  </h3>
                  <div className="flex">
                    <button
                      onClick={() => removeFromWatchlist(movie.id)}
                      className="border border-red-500/50 bg-zinc-900/60 backdrop-blur-sm rounded-full !p-2.5 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors active:scale-95 !ml-auto"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
