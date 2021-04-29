import React from "react";
import GarmentCard from "../../components/GarmentCard";
import {Link, useRouteMatch} from 'react-router-dom';

export default function Garments() {
  const { path, url } =  useRouteMatch();
  return (
    <div className="screen Garments">
      <div className="grid">
        <Link to={`${url}/add-garment`} className="Link">
          <button>+ Add New</button>
        </Link>
        <GarmentCard clr="red" />
        <GarmentCard clr="yellow" />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
        <GarmentCard />
      </div>
    </div>
  );
}
