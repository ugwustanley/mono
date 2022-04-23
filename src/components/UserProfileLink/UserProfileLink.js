import React from 'react'
import { CaretDown } from 'phosphor-react'
import './UserProfileLink.scss'



const UserProfileLink = () => {
  return (
    <div className="profile">
        <div className="profile__image">
            T
        </div>
        <div className="profile__name">
            <h3>Torche Inc</h3>
            <p>Oni Gbenga</p>
        </div>
        <div className="profile__link">
             <CaretDown size={17} weight="bold" />
        </div>
    </div>
  )
}

export default UserProfileLink