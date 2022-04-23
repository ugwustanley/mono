import React from 'react'
import './ApiLog.scss'
//components/A
import FailedButton from '../FailedButton/FailedButton'
import SuccessButton from '../SuccessButton/SuccessButton'

const ApiLog = () => {
  return (
    <div className="apilog">
        <div className="apilog__endpoint">
            Endpoint
        </div>

        <div className="apilog__scope">
            Scope
        </div>

        <div className="apilog__cost">
           Total Cost
        </div>

        <div className="apilog__When">
            Endpoint
        </div>

        <div className="apilog__status">
            <SuccessButton />
            <FailedButton />
        </div>
    </div>
  )
}

export default ApiLog