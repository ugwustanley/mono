import React from 'react'
import { Link } from 'react-router-dom'
import './LogNav.scss'

const LogNav = () => {
  return (
    <div className="lognav">
        <div className="lognav__link">
            <Link to="#">
               Events
            </Link>
        </div>

        <div className="lognav__link lognav__link--active">
            <Link to="#">
               API Logs
            </Link>
        </div>

        <div className="lognav__link">
            <Link to="#">
               Webhook Logs
            </Link>
        </div>
    </div>
  )
}

export default LogNav