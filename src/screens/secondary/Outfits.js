import React from "react";
import OutfitCard from "../../components/OutfitCard";
import Placeholder from '../../assets/images/placeholder-outfit.png';

export default function Outfits() {
  return (
    <div className="screen Outfits">
      <div className="grid">
        <OutfitCard warm={true} cold={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
        <OutfitCard warm={true} outfitImage={Placeholder}  />
        <OutfitCard warm={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
        <OutfitCard warm={true} cold={true} outfitImage={Placeholder} />
        <OutfitCard warm={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
        <OutfitCard warm={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
        <OutfitCard cold={true} outfitImage={Placeholder} />
      </div>
    </div>
  );
}
