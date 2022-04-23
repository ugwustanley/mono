import {useState} from 'react'
import {List} from 'phosphor-react'
import SideBar from '../components/SideBar/SideBar'
import "./Layout.scss"

export default function Layout({ children }) {

    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
        <div className="layout">
            <div className="layout__menu" onClick={() => setShowSideBar(true)}>
               <List size={24} />
            </div>
            <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
           <div className="layout__children">
               {children}
           </div>
        </div>
        <div className={showSideBar? "layout__overlay": ""}></div>
        </>
    )
}
