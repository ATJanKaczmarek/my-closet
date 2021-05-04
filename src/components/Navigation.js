import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ClosetIcon from "../assets/icons/closet.svg";
import HomeIcon from "../assets/icons/home.svg";
import ProfileIcon from "../assets/icons/profile.svg";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Home");
  const { currentUser } = useAuth();

  return currentUser && (
    <nav className="tabs">
      <ul>
        <li>
          <Link to="/closet">
            <ClosetIcon
              className={activeTab === "Closet" ? "active" : ""}
              onClick={() => setActiveTab("Closet")}
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <HomeIcon
              className={activeTab === "Home" ? "active" : ""}
              onClick={() => setActiveTab("Home")}
            />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <ProfileIcon
              className={activeTab === "Profile" ? "active" : ""}
              onClick={() => setActiveTab("Profile")}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
