import React from 'react'
import { NavLink } from 'react-router-dom'
import './desing/desing.css';
import Imagen from './desing/LOVE.jpg'

export const Menu = (props) => {
  return (
    <div>
      <label className='label'> Usuario:  {props.user}</label><br></br>
      <div className='mes'>
        <h1>Te quiero Mucho Yet</h1>
      </div>
      <div className='imagen'>
      <img src={Imagen} width="700" height="700"/>

      </div>

    </div>
  )
}
