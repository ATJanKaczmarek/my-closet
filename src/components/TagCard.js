import {React, useState} from 'react'
import CheckMarkIcon from '../assets/icons/checkmark.svg';

export default function TagCard(props) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="TagCard" style={{borderColor: props.clr}} onClick={() => setChecked(!checked)}>
      {props.icon}
      <p>{props.tagName}</p>
      {checked ? <CheckMarkIcon className="check-mark active"/> : <CheckMarkIcon className="check-mark"/>}
    </div>
  )
}
