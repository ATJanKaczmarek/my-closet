import React from "react";
import "./styles/App.css";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/Home";
import Closet from "./screens/Closet";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import Garments from "./screens/secondary/Garments";
import Outfits from "./screens/secondary/Outfits";
import Calendar from "./screens/secondary/Calendar";
import GarmentCreation from "./screens/secondary/GarmentCreation";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/closet" exact component={Closet} />
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/closet/garments" exact component={Garments} />
            <PrivateRoute
              path="/closet/garments/add-garment"
              exact
              component={GarmentCreation}
            />
            <PrivateRoute path="/closet/outfits" exact component={Outfits} />
            <PrivateRoute path="/closet/calendar" exact component={Calendar} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
            <PrivateRoute
              path="/update-profile"
              exact
              component={UpdateProfile}
            />
          </Switch>
          <Navigation />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
