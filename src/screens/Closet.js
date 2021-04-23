import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import CardButton from "../components/CardButton";
import Garments from "./secondary/Garments";
import Outfits from "./secondary/Outfits";
import Calendar from "./secondary/Calendar";
import GarmentsImg from "../assets/images/garments_bg.png";
import OutfitsImg from "../assets/images/outfits_bg.png";
import CalendarImg from "../assets/images/calendar_bg.png";

export default function Closet() {
  const { path, url } = useRouteMatch();

  return (
      <div className="screen Closet">
        <nav>
          <ul>
            <li>
              <Link to={`${url}/garments`}>
                <CardButton bg={GarmentsImg} text="Garments" />
              </Link>
            </li>
            <li>
              <Link to={`${url}/outfits`}>
                <CardButton bg={OutfitsImg} text="Outfits" />
              </Link>
            </li>
            <li>
              <Link to={`${url}/calendar`}>
                <CardButton bg={CalendarImg} text="Calendar" />
              </Link>
            </li>
          </ul>
        </nav>
        
      </div>
  );
}
