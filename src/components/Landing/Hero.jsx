import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero(){
    const [email,setEmail]=useState("");

    const navigate=useNavigate();

    const handleSubmit=()=>{
        if(email.trim()){
            alert("email Required")
            return
        }

        navigate("/signup",{
            state:{email},
        })
    }

    return (
        <section className="hero">
            <div className="overlay"></div>

            <div className="hero-content">
                <h1>Unlimited movies, <br /> TV shows and more</h1>
                <h3>Starts at ₹149. Cancel anytime.</h3>

                <p>Ready to watch? Enter your email
                    to create or restart membership
                </p>

                <div className="email-box">
                    <input type="email"
                     placeholder="Email address"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}/>

                     <button onClick={handleSubmit}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Hero;