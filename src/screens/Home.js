import React, { Component } from "react";
import OutfitCard from "../components/OutfitCard";
import StarIcon from '../assets/icons/star_filled.svg'

export default class Home extends Component {
  render() {
    return (
      <div className="screen Home">
        <div class="grid">
          <h1>Planned Outfit</h1>
          <OutfitCard />
          <h1><StarIcon className="star-icon"/> Favourite Outfits</h1>
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
          <OutfitCard />
        </div>
      </div>
    );
  }
}
