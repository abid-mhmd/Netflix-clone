import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useMovies } from "../../context/MovieContext";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  getRandomTrendingMovie,
  getTrendingIndiaMovies,
} from "../../services/movieService";
import WatchModal from "../Movie/WatchModal";
import { getMovieTrailer } from "../../services/movieService";
import TrailerUnavailableModal from "../Movie/TrailerUnavailableModal";

function HeroBanner({ onMovieClick }) {
  const { moviesByCategory } = useMovies();
  const [heroMovie, setHeroMovie] = useState(null);
  const [showPlayer,setShowPlayer]=useState(false);
  const [trailerUrl,setTrailerUrl]=useState(null);
  const [showUnavailable,setShowUnavailable]=useState(null)
  const navigate = useNavigate();

  async function handlePlay() {
    try{
      const trailer=await getMovieTrailer(heroMovie.id);
      if(!trailer){
        setShowUnavailable(true);
        return;
      }
      setTrailerUrl(trailer);
      setShowPlayer(true)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    async function loadHeroMoavie() {
      try {
        const movies = await getTrendingIndiaMovies();
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setHeroMovie(randomMovie);
      } catch (error) {
        console.log(error);
      }
    }
    loadHeroMoavie();
  }, []);

  if (!heroMovie) {
    return null;
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <img
        src={`https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`}
        alt={heroMovie.title}
        className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent z-10 pointer-events-none" />
      <div className="relative z-20 left-16 flex flex-col justify-end !pb-16 h-full max-w-4xl px-8 md:pl-16 select-none">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold !mb-2 tracking-wide drop-shadow-md max-w-3xl line-clamp-2">
          {heroMovie.title}
        </h1>
        <div className="flex  items-center gap-4 !mb-4  text-sm md:text-base text-gray-300 font-medium">
          <span className="drop-shadow">
            {heroMovie.release_date?.slice(0, 4)}
          </span>
          <span className="border border-gray-400 !px-2 !py-0.5 text-xs rounded bg-[#3f444e] backdrop-blur-sm">
            ⭐ {heroMovie.vote_average?.toFixed(1)}
          </span>
        </div>
        <p className="text-gray-200 !text-base md:text-lg leading-relaxed !mb-6 max-w-xl drop-shadow-lg line-clamp-3 md:line-clamp-4">
          {heroMovie.overview}
        </p>
        <div className="flex items-center gap-4 select-none">
          <button onClick={handlePlay} className="flex items-center justify-center gap-3 bg-white text-black !px-6 md:px-10 !py-2 md:py-4 rounded-md text-base md:text-lg font-bold tracking-wide transition duration-200 ease-in-out hover:bg-white/80 active:scale-95 shadow-lg">
            <FaPlay className="text-sm md:text-base text-blue-500" />
            Play
          </button>
          <button
            onClick={() => onMovieClick(heroMovie)}
            className="flex items-center justify-center gap-3 bg-[#3f444e] text-white !px-6 md:px-10 !py-2 md:py-4 rounded-md text-base md:text-lg font-bold tracking-wide backdrop-blur-md transition duration-200 ease-in-out hover:bg-[#4a505c] active:scale-95 shadow-lg"
          >
            <AiOutlineInfoCircle className="text-xl md:text-2xl" />
            More Info
          </button>
        </div>
      </div>
      {showPlayer&&(
        <WatchModal trailerUrl={trailerUrl} movie={heroMovie} onClose={()=>setShowPlayer(false)}/>
      )}
      {showUnavailable&&(
        <TrailerUnavailableModal onClose={()=>setShowUnavailable(false)}/>
      )}
    </section>
  );
}

export default HeroBanner;
