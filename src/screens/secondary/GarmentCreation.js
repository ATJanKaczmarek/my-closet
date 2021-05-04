import { React, useState, useRef } from "react";
import Carousel from "re-carousel";
import IndicatorDots from "../../components/IndicatorDots";
import PictureIcon from "../../assets/icons/picture.svg";
import CameraIcon from "../../assets/icons/camera.svg";
import TagCard from "../../components/TagCard";
import Camera from "../../components/Camera";
import MagnifierIcon from "../../assets/icons/magnifier.svg";

import DressIcon from "../../assets/icons/clothing/dress.svg";
import PantsIcon from "../../assets/icons/clothing/pants.svg";
import PulloverIcon from "../../assets/icons/clothing/pullover.svg";
import ShirtIcon from "../../assets/icons/clothing/shirt.svg";
import ShortsIcon from "../../assets/icons/clothing/shorts.svg";
import SuitIcon from "../../assets/icons/clothing/suit.svg";
import TshirtIcon from "../../assets/icons/clothing/tshirt.svg";
import UnderwearIcon from "../../assets/icons/clothing/underwear.svg";
import ZipperIcon from "../../assets/icons/clothing/zipper.svg";
import PrintIcon from "../../assets/icons/clothing/print.svg";

import CheckMarkIcon from "../../assets/icons/checkmark.svg";

import { addGarmentCard } from "./Garments";

import { Link } from "react-router-dom";

let defaultTags = [
  {
    hexClr: "#EA8685",
    icon: <TshirtIcon />,
    name: "T-Shirt",
  },
  {
    hexClr: "#EA8685",
    icon: <DressIcon />,
    name: "Dress",
  },
  {
    hexClr: "#EA8685",
    icon: <PantsIcon />,
    name: "Pants",
  },
  {
    hexClr: "#EA8685",
    icon: <PulloverIcon />,
    name: "Pullover",
  },
  {
    hexClr: "#EA8685",
    icon: <ShirtIcon />,
    name: "Shirt",
  },
  {
    hexClr: "#EA8685",
    icon: <ShortsIcon />,
    name: "Shorts",
  },
  {
    hexClr: "#EA8685",
    icon: <SuitIcon />,
    name: "Suit",
  },
  {
    hexClr: "#EA8685",
    icon: <ZipperIcon />,
    name: "Zipper",
  },
  {
    hexClr: "#EA8685",
    icon: <UnderwearIcon />,
    name: "Underwear",
  },
  {
    hexClr: "#EA8685",
    icon: <SuitIcon />,
    name: "Suit",
  },
  {
    hexClr: "#778beb",
    icon: <PrintIcon />,
    name: "Print",
  },
];

export default function GarmentCreation() {
  const [photo, setPhoto] = useState(undefined);
  function handlePhotoCallback(data) {
    setPhoto(data);
  }

  const [shownTags, setShownTags] = useState(defaultTags);
  function handleSearch(event) {
    let emptyArray = [];
    if (event.target.value !== "") {
      emptyArray = defaultTags.filter((data) => {
        return data.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase());
      });
      setShownTags(emptyArray);
      return;
    }
    setShownTags(defaultTags);
  }

  const nameInput = useRef();
  const descriptionInput = useRef();

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
        <input type="text" placeholder="Name it..." ref={nameInput} />
        <textarea
          rows="10"
          cols="40"
          placeholder="Describe it..."
          ref={descriptionInput}
        ></textarea>
      </div>
      <div className="screen garment-tagging">
        <h2>Tag it!</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <MagnifierIcon />
          <input
            type="text"
            placeholder="Search the tags..."
            name="search"
            onChange={handleSearch}
            autocomplete="off"
          />
        </form>
        <div className="tag-list">
          {shownTags.map((data) => {
            return (
              <TagCard clr={data.hexClr} icon={data.icon} tagName={data.name} />
            );
          })}
        </div>
        <Link to={`../garments`} className="Link">
          <button
            className="done-btn"
            onClick={() =>
              addGarmentCard({
                name: nameInput.current.value,
                description: descriptionInput.current.value,
                img: photo,
                tags: ["Pullover", "Hoodie"],
              })
            }
          >
            <CheckMarkIcon />
          </button>
        </Link>
      </div>
    </Carousel>
  );
}
