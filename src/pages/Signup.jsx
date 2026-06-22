import { exp } from "firebase/firestore/pipelines";
import SignupForm from "../components/Auth/SignupForm";
import "../styles/auth.css";
import logo from "../assets/images/logo.svg"

function Signup(){
  return (
    <>
    <div className="auth-page">
      <div className="auth-content">
       <img src={logo} className="logo" alt="Netflix logo" />
        <div className="auth-card">
          <h1>Sign Up</h1>
          <SignupForm/>
        </div>
      </div>
    </div>

    <footer className="auth-footer">
        <div className="footer-container">

          <p className="footer-title">
            Questions? Call
            000-800-919-1743
          </p>

          <div className="footer-links">

            <a href="/">FAQ</a>

            <a href="/">Help Centre</a>

            <a href="/">Terms of Use</a>

            <a href="/">Privacy</a>

            <a href="/">
              Cookie Preferences
            </a>

            <a href="/">
              Corporate Information
            </a>

          </div>

          <select className="language-select">
            <option>
              English
            </option>

            <option>
              Hindi
            </option>
          </select>

        </div>
      </footer>
    </>
  )
}

export default Signup