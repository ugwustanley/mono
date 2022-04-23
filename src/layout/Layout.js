import {useState} from 'react'
import SideBar from '../components/SideBar/SideBar'
import "./Layout.scss"

export default function Layout({ children }) {
    return (
        <div className="Layout">
            <SideBar />
           <div>
               {children}
           </div>
        </div>
    )
}
