import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Trending from "../components/Landing/Trending";
import Reasons from "../components/Landing/Reason";


function Landing(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <Trending/>
        <Reasons/>
        </>
    )
}

export default Landing;