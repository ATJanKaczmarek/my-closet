import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoding] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoding(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions!");
    } catch {
      setError("Failed to reset password");
    }
    setLoding(false);
  }

  return (
    <div className="screen LogIn">
      <h2>Reset Password</h2>
      <div className="card" style={{ height: "auto", alignSelf: "start" }}>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
          <button type="submit" disabled={loading}>
            Reset Password
          </button>
        </form>
        <div
          className="error-box"
          style={{
            background:
              (!error && !message && "transparent") || (message && "#30BD60"),
          }}
        >
          {error && <p>Error: {error}</p>}
          {message && <p>{message}</p>}
        </div>
      </div>

      <div className="create-account">
        <p>Wanna log in instead?</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
