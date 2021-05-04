import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out!");
    }
  }

  return (
    <div className="screen Profile">
      <h2>Your Profile</h2>
      <div className="profile-header">
        <img />
        <h4>{currentUser.email}</h4>
      </div>
      <div className="card">
        <h3>Change account information</h3>
        <Link to="/update-profile">Update Profile</Link>
        <h3>Log out of this account</h3>
        <button onClick={handleLogout}>Log Out</button>
        <div
          className="error-box"
          style={{ background: !error && "transparent", display: "none"}}
        >
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}
