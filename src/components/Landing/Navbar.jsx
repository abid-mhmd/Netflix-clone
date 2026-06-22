import { Link } from "react-router-dom";
import logo from  "../../assets/images/logo.svg"

function Navbar(){
    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="Netflix Logo" />

            <div className="nav-right">
                <select className="language-btn">
                    <option value="">Engilsh</option>
                    <option value="">Hindi</option>
                </select>
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