import HeroBanner from "../components/Home/HeroBanner";
import MovieRow from "../components/Home/MovieRow";
import { useMovies } from "../context/MovieContext";
import ProtectedNavbar from "../components/common/ProtectedNavbar";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
// import MovieDetailsModal from "./MovieDetails";
import MovieDetailsModal from "../components/Movie/MovieDetailsModal";

function Home() {
  const { moviesByCategory, loading } = useMovies();
  const [selectedMovie,setSelectedMovie]=useState(null);
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }
  return (
    <main className="bg-black min-h-screen">
      <ProtectedNavbar />

      <HeroBanner onMovieClick={setSelectedMovie} />

      <section className="relative z-10 -mt-32">
        {Object.entries(moviesByCategory).map(([title, movies]) => (
          <MovieRow key={title} title={title} movies={movies} onMovieClick={setSelectedMovie} />
        ))}
      </section>
      {selectedMovie&&(
        <MovieDetailsModal movie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>
      )}
        <Footer fullwidth/>
    </main>
  );
}

export default Home;
