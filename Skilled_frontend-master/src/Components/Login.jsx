import React, { useEffect, useState } from "react";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { LoginUser } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, message, error, isVerifieds } = LoginUser();

  const [captchaToken, setCaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the Captcha verification");
      return;
    }
    await login(formData.email, formData.password, captchaToken);
    if (!error) {
      localStorage.setItem("loginSuccess", "You have successfully logged in!");

      navigate("/"); // Redirect to the homepage
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Job Seeker Log In</h2>

        {/* Display Success or Error Messages */}
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        {/* {validationError && <Alert variant="warning">{validationError}</Alert>} */}

        <Form onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3"
              style={{ backgroundColor: "#E0F2FF", border: "none" }}
              required
            />
          </Form.Group>

          {/* Password Input */}
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p-3"
              style={{ backgroundColor: "#E0F2FF", border: "none" }}
              required
            />
          </Form.Group>

          {/* Forgot Password */}
          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="text-muted">
              Forgot Password?
            </a>
            <a href="#" className="text-primary">
              Reset
            </a>
          </div>

          {/* Google reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Le0oUYqAAAAAJNvvKKCKMIdIFC7AQwT1QRKoZyt" // Your site key
            onChange={handleCaptchaChange}
          />

          {/* Login Button */}
          <Button
            variant="primary"
            className="w-100 p-3"
            style={{ backgroundColor: "#144B7D", border: "none" }}
            type="submit"
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                {" LOGING..."}
              </>
            ) : (
              "LOGIN"
            )}
          </Button>
        </Form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-muted">
            Don't have an Account?{" "}
            <a href="#" className="text-primary">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
