import { React, useState } from "react";
import Carousel from "re-carousel";
import IndicatorDots from "../../components/IndicatorDots";
import PictureIcon from "../../assets/icons/picture.svg";
import CameraIcon from "../../assets/icons/camera.svg";
import TagCard from "../../components/TagCard";
import Camera from "../../components/Camera";
import MagnifierIcon from "../../assets/icons/magnifier.svg";

const defaultTags = [
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "T-Shirt",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Shirt",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Pullover",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Hoodie",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Zipper",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Pants",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Jeans",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Shorts",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Shoes",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Dress",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Underwear",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Accessory",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Skirt",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Socks",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Suit",
  },
  {
    hexClr: "#EA8685",
    icon: <div />,
    name: "Jacket",
  },
  {
    hexClr: "#778beb",
    icon: <div />,
    name: "Print",
  },
]

export default function GarmentCreation() {
  const [photo, setPhoto] = useState(undefined);
  function handlePhotoCallback(data) {
    setPhoto(data);
    console.log(data);
  }

  return photo === null ? (
    <Camera photo={(data) => handlePhotoCallback(data)} />
  ) : (
    <Carousel widgets={[IndicatorDots]}>
      <div className="screen garment-photo-frame">
        <div>
          {photo === undefined ? (
            <PictureIcon />
          ) : (
            <img src={photo} alt="photoData" />
          )}
        </div>
        <button>
          <PictureIcon />
          <span>Choose from gallery</span>
        </button>
        <button onClick={() => setPhoto(null)}>
          <CameraIcon />
          <span>Take new photo now</span>
        </button>
      </div>
      <div className="screen garment-description">
        <div>
          {photo === undefined ? (
            <PictureIcon />
          ) : (
            <img src={photo} alt="photoData" />
          )}
        </div>
        <input type="text" placeholder="Name it..." />
        <textarea rows="10" cols="40" placeholder="Describe it..."></textarea>
      </div>
      <div className="screen garment-tagging">
        <h2>Tag it!</h2>
        <form>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <MagnifierIcon />
          </button>
        </form>
        <div className="tag-list">
          {
            defaultTags.map(data => {
              return <TagCard clr={data.hexClr} icon={data.icon} tagName={data.name}/>
            })
          }
        </div>
      </div>
    </Carousel>
  );
}
