import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">Netflix</h1>

            <div className="nav-right">
                <button className="language-btn">English</button>

                <Link to="/login">
                <button className="signin-btn">
                    Sign In
                </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;