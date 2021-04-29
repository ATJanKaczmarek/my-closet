import React, { useState } from "react";
import "./styles/App.css";
import Home from "./screens/Home";
import Closet from "./screens/Closet";
import Profile from "./screens/Profile";
import Garments from "./screens/secondary/Garments";
import Outfits from "./screens/secondary/Outfits";
import Calendar from "./screens/secondary/Calendar";
import GarmentCreation from "./screens/secondary/GarmentCreation";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import ClosetIcon from "./assets/icons/closet.svg";
import HomeIcon from "./assets/icons/home.svg";
import ProfileIcon from "./assets/icons/profile.svg";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/closet" exact component={Closet} />
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/closet/garments" exact component={Garments} />
          <Route
            path="/closet/garments/add-garment"
            exact
            component={GarmentCreation}
          />
          <Route path="/closet/outfits" exact component={Outfits} />
          <Route path="/closet/calendar" exact component={Calendar} />
        </Switch>
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
      </div>
    </Router>
  );
}

export default App;
