import React from "react";
import GarmentCard from "../../components/GarmentCard";
import {Link, useRouteMatch} from 'react-router-dom';
import Placeholder from "../../assets/images/placeholder.png";

let Cards = [
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
  { 
    name: 'Test',
    description: 'This is a test description',
    img: Placeholder,
    tags: ['Pullover', 'Hoodie'],
  },
];

export function addGarmentCard(obj) {
  Cards.push(obj);
  console.log(obj, Cards);
}

export default function Garments() {
  const { path, url } =  useRouteMatch();
  return (
    <div className="screen Garments">
      <div className="grid">
        <Link to={`${url}/add-garment`} className="Link">
          <button>+ Add New</button>
        </Link>
        {Cards.map(data => <GarmentCard garmentImg={data.img}/>)}
      </div>
    </div>
  );
}
