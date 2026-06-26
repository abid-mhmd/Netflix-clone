import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Trending from "../components/Landing/Trending";
import Reasons from "../components/Landing/Reason";
import FAQ from "../components/Landing/FAQ";
import Footer from "../components/Layout/Footer";
import TrendingModal from "../components/Landing/TrendingModal";
import { useState } from "react";

function Landing() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <>
      <Navbar />
      <Hero />
      <Trending onMovieClick={(movie) => setSelectedMovie(movie)} />
      <Reasons />
      <FAQ />
      <Footer />
      {selectedMovie && (
        <TrendingModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}

export default Landing;
