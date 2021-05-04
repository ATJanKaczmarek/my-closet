import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoding] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoding(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in!");
    }
    setLoding(false);
  }

  return (
    <div className="screen LogIn">
      <h2>Log In</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
          <button type="submit" disabled={loading}>
            Log In
          </button>
        </form>
        <div
          className="error-box"
          style={{ background: !error && "transparent" }}
        >
          {error && <p>Error: {error}</p>}
        </div>
        <Link className="forgot-link" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div className="create-account">
        <p>No account yet?</p>
        <Link to="/signup">Create one now!</Link>
      </div>
    </div>
  );
}
