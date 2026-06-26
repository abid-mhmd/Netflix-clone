export function validateSignup(formData) {
  const error = {};

  const { emailOrPhone, password, confirmPassword } = formData;

  if (!emailOrPhone.trim()) {
    error.emailOrPhone = "Emial or Phone is requred";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const isEmail = emailRegex.test(emailOrPhone);

  if (emailOrPhone && !emailRegex.test(emailOrPhone)) {
    error.emailOrPhone = "Invalid Email format";
  }
  const isPhone = phoneRegex.test(emailOrPhone);

  if (emailOrPhone && !isEmail && !isPhone) {
    error.emailOrPhone = "Enter valid email or phone";
  }

  if (!password.trim()) {
    error.password = "Password is required";
  }

  if (password && password.length < 6) {
    error.password = "Minimum 6 characters required";
  }
  if (password !== confirmPassword) {
    error.confirmPassword = "Passwords do not match";
  }

  return error;
}

export function validateLogin({ emailOrPhone, password }) {
  const error = {};

  if (!emailOrPhone.trim()) {
    error.emailOrPhone = "  Email is required";
  }

  if (!password.trim()) {
    error.password = "Password required";
  }

  if (password && password.length < 6) {
    error.password = "Minimum 6 charactor required";
  }

  return error;
}
