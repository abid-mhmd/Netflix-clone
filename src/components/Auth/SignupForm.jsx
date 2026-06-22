import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignup } from "../../utils/validations";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SignupForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    const validationError = validateSignup(formData);

    if (Object.keys(validationError).length) {
      setErrors(validationError);
      return;
    }
    try {
      setLoading(true);
      await signup(formData.emailOrPhone, formData.password);
      navigate("/home");
    } catch (err) {
      setErrors({ firebase: err.message });
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          name="emailOrPhone"
          placeholder="Email Or Phone number"
          value={formData.emailOrPhone}
          onChange={handleChange}
        />
        <p className="error-text">{errors.emailOrPhone}</p>
        <input
          className="auth-input"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <p className="error-text">{errors.password}</p>
        <input
          className="auth-input"
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          onChange={handleChange}
        />
        <p className="error-text">{errors.confirmPassword}</p>
        <button className="auth-btn" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <p className="error-text">{errors.firebase}</p>
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
          <Link to="/login">Log in now</Link>
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

export default SignupForm;
