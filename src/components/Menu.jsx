import React from 'react'
import { NavLink } from 'react-router-dom'
import './desing/desing.css';

export const Menu = (props) => {
  return (
    <div>
        <label className='label'>  {props.user}</label>
    </div>
  )
}
