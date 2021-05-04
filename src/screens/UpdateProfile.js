import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update Account!");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="screen LogIn">
      <h2>Update Profile</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            defaultValue={currentUser.email}
          />
          <label for="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
          <label for="passwordConfirm">Password Confirmation</label>
          <input
            type="password"
            id="passwordConfirm"
            ref={passwordConfirmRef}
          />
          <button type="submit" disabled={loading}>
            Update your Profile
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
        <Link to="/profile">Cancel</Link>
      </div>
    </div>
  );
}
