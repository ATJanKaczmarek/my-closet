import React, { Component } from "react";
import { usePalette } from "react-palette";
import Placeholder from "../assets/images/placeholder.png";
import { averageColors } from "../ColorCalculator";

export default function GarmentCard(props) {
  const generatedImage = Placeholder;
  const { data, loading, error } = usePalette(generatedImage);
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
