import React from 'react'
import { NavLink } from 'react-router-dom'
import './desing/desing.css';

export const Menu = (props) => {
  return (
    <div>
      <label className='label'> Usuario:  {props.user}</label><br></br>
      <label className='mes'>{props.user}
      </label>

    </div>
  )
}
