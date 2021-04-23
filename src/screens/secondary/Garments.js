import React from "react";
import GarmentCard from "../../components/GarmentCard";

export default function Garments() {
  return (
    <div className="screen Garments">
      <div className="grid">
        <button>+ Add New</button>
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
