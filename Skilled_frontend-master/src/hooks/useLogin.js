import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isVerifieds, setIsVerifieds] = useState(false);

  const login = async (email, password, captchaToken) => {
    setLoading(true);
    setMessage("");
    setError("");

    try {

      const response = await fetch("/api/auth/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsVerifieds(data.isVerified);
        setMessage("Login successful!");
      } else {
        console.error(data.message);
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error.response.data.message);
      setError("Error occurred while logging.");
    } finally {
      setLoading(false);
    }
  };
  return { login, loading, message, error, isVerifieds };
};

export const LoginRec = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isVerifieds, setIsVerifieds] = useState(false);

  const login = async (email, password, captchaToken) => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/loginCompany", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsVerifieds(data.isVerified);
        setMessage("Login successful!");
      } else {
        console.error(data.message);
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error.response.data.message);
      setError("Error occurred while logging.");
    } finally {
      setLoading(false);
    }
  };
  return { login, loading, message, error, isVerifieds };
};
