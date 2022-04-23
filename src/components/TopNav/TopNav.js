import React from 'react'
import {Funnel , CaretDown} from 'phosphor-react'
import "./TopNav.scss"

const TopNav = () => {
  return (
    <div className="topnav">
        <h3 className="topnav__title">API Logs <span>75</span></h3>
        <div className="topnav__options">
            <div className="topnav__select">
                <p>Select App</p>
                
                  <CaretDown size={16} weight="bold"  />
               
            </div>
            <div className="topnav__filter">
               <Funnel size={20} />
                <p>Filter</p>
            </div>
        </div>
    </div>
  )
}

export default TopNav