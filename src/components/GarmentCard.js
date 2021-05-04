import React, { Component } from "react";
import { usePalette } from "react-palette";
import Placeholder from "../assets/images/placeholder.png";
import { averageColors } from "../ColorCalculator";

export default function GarmentCard(props) {
  const generatedImage = "https://via.placeholder.com/150";
  const { data, loading, error } = usePalette(props.garmentImg);
  return (
    <div className="GarmentCard">
      <img
        src={props.garmentImg != null ? props.garmentImg : generatedImage}
        alt="preview"
      />
      <div
        className="color-indicator"
        style={{
          background: averageColors([
            data.darkMuted,
            data.darkVibrant,
            data.lightMuted,
            data.lightVibrant,
            data.muted,
            data.vibrant,
          ]),
        }}
      />
    </div>
  );
}
