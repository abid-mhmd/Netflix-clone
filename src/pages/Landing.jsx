import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Trending from "../components/Landing/Trending";
import Reasons from "../components/Landing/Reason";
import FAQ from "../components/Landing/FAQ";
import Footer from "../components/Layout/Footer";

function Landing(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <Trending/>
        <Reasons/>
        <FAQ/>
        <Footer/>
        </>
    )
}

export default Landing;