import React from 'react'
import CheckMarkIcon from '../assets/icons/checkmark.svg';

export default function TagCard(props) {
  return (
    <div className="TagCard" style={{borderColor: props.clr}}>
      {props.icon}
      <p>{props.tagName}</p>
      <CheckMarkIcon />
    </div>
  )
}
