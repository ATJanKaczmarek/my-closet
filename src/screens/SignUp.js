import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoding] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoding(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account!");
    }
    setLoding(false);
  }

  return (
    <div className="screen LogIn">
      <h2>Sign Up</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
          <label htmlFor="password">Password</label>
          <input
            className="password-input"
            type="password"
            id="password"
            ref={passwordRef}
            required
          />
          <label htmlFor="passwordConfirm">Password Confirmation</label>
          <input
            type="password"
            id="passwordConfirm"
            ref={passwordConfirmRef}
            required
          />
          <button type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
        <div
          className="error-box"
          style={{ background: !error && "transparent" }}
        >
          {error && <p>{error}</p>}
        </div>
      </div>
      <div className="create-account">
        <p>Already have an Account?</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
