import React from 'react'
import {Link } from 'react-router-dom'

//stylesheet
import './NavLink.scss'

const NavLink = ({name , url , icon}) => {
  return (
   <Link to={url}> 
       <div className="navlink">
           <figure>
               <img src={icon} alt={name}/>
           </figure>
          <p>{name}</p>
        </div>
   </Link>
  )
}

export default NavLink