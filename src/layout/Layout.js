import {useState} from 'react'
import SideBar from '../components/SideBar/SideBar'
import "./Layout.scss"

export default function Layout({ children }) {

    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <div className="Layout">
            <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
           <div>
               {children}
           </div>
        </div>
    )
}
