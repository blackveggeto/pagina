import React from 'react'
import { NavLink } from 'react-router-dom'
import './desing/desing.css';

export const Menu = (props) => {
  return (
    <div>
      <label className='label'> Nombre de Usuario:  {props.user}</label><br></br>
      <div className='mes'>
        <h1>Te quiero Mucho Yet</h1>

      </div>

    </div>
  )
}
