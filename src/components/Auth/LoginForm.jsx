import { useState } from "react";
import { validateLogin } from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateLogin(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);
      await login(formData.emailOrPhone, formData.password);
      navigate("/home");
    } catch {
      setErrors({ firebase: "Invalid email or password" });
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          name="emailOrPhone"
          placeholder="Email or mobile number"
          value={formData.emailOrPhone}
          onChange={handleChange}
        />

        <p className="error-text">{errors.emailOrPhone}</p>

        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />

        <p className="error-text">{errors.password}</p>

        <p className="error-text">{errors.firebase}</p>

        <button disabled={loading} className="auth-btn">
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <div className="auth-info">
        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <p className="auth-switch">
          Already have an account?
          <Link to="/signup">Sign Up now</Link>
        </p>
        <div className="captcha-text">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>

          <a href="/">Learn more</a>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
