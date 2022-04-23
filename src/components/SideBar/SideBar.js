import React from 'react'
import {X} from 'phosphor-react'
//stylesheet
import "./SideBar.scss"

//components
import UserProfileLink from '../UserProfileLink/UserProfileLink'
import NavLink from '../NavLink/NavLink'


//mock data 
import NavItems from '../../mock/NavItems'
import ConnectItems from '../../mock/ConnectItems'
import Audit from '../../mock/Audit'

const SideBar = ({showSideBar , setShowSideBar}) => {
  return (
    <nav className={showSideBar? "sidebar":"sidebar sidebar__hide"}>
        <div className="sidebar__x" onCLick={() => setShowSideBar(false)}>
            <X size={24} />
        </div>
        <UserProfileLink />
        <div className="sidebar__links">
            {NavItems.map((item, index) => 
                <NavLink key={index} name={item.name} url={item.url} icon={item.icon} />
            )}
        </div>
        
        <h3 className="sidebar__connect">CONNECT</h3>
        <div className="sidebar__links sidebar__connects">
            {ConnectItems.map((item, index) => 
                <NavLink key={index} name={item.name} url={item.url} icon={item.icon} />
            )}
        </div>

       <div className="sidebar__audit">
           <div className="sidebar__hr"></div>
            <div className="sidebar__links sidebar__audits">
                {Audit.map((item, index) => 
                    <NavLink key={index} name={item.name} url={item.url} icon={item.icon} />
                )}
            </div>
       </div>
    </nav>
  )
}

export default SideBar