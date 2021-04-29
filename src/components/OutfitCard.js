import React from "react";
import { usePalette } from "react-palette";
import TempWarmIcon from "../assets/icons/warm.svg";
import TempColdIcon from "../assets/icons/cold.svg";

export default function OutfitCard(props) {
  const outfitImage = props.outfitImage;
  const { data, loading, error } = usePalette(outfitImage);

  return (
    <div className="OutfitCard">
      <img className="outfit-preview" src={outfitImage} alt="outfit-preview" />
      <div className="information">
        <div className="swatches">
          <div
            className="outfit-swatch"
            style={{ background: data.darkVibrant }}
          />
          <div
            className="outfit-swatch"
            style={{ background: data.lightVibrant }}
          />
          <div className="outfit-swatch" style={{ background: data.vibrant }} />
        </div>
        <div className="icons">
          <TempWarmIcon
            className="icon"
            style={
              props.warm === true
                ? {
                    filter:
                      "invert(74%) sepia(11%) saturate(3136%) hue-rotate(83deg) brightness(85%) contrast(76%)",
                  }
                : {
                    filter:
                      "invert(34%) sepia(36%) saturate(5119%) hue-rotate(339deg) brightness(100%) contrast(106%)",
                  }
            }
          />
          <TempColdIcon
            className="icon"
            style={
              props.cold === true
                ? {
                    filter:
                      "invert(74%) sepia(11%) saturate(3136%) hue-rotate(83deg) brightness(85%) contrast(76%)",
                  }
                : {
                    filter:
                      "invert(34%) sepia(36%) saturate(5119%) hue-rotate(339deg) brightness(100%) contrast(106%)",
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}
