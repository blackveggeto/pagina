import React from 'react'
import { NavLink } from 'react-router-dom'
import './desing/desing.css';
import Imagen from './desing/LOVE.jpg'

export const Menu = (props) => {
  return (
    <div>
      <label className='label'> Usuario:  {props.user}</label><br></br>
      <div className='mes'>
      </div>

    </div>
  )
}
