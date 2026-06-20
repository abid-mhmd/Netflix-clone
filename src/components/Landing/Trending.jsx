import movie1 from "../../assets/images/movie1.jpg";
import movie2 from "../../assets/images/movie2.jpg";
import movie3 from "../../assets/images/movie3.jpg";
import movie4 from "../../assets/images/movie4.jpg";
import movie5 from "../../assets/images/movie5.jpg";

function Trending(){
     const movies =[
        movie1,
        movie2,
        movie3,
        movie4,
        movie5
    ];

    return (
        <section className="trending">
            <h2>Trending Now</h2>

            <div className="movie-row">
                {movies.map((movie,index)=>(
                    <div className="movie-card" key={index}>
                        <img src={movie} alt="movie" />
                        <span>{index+1}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trending