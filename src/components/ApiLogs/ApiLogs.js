import React from 'react'
import "./ApiLogs.scss"

import ApiLog from '../ApiLog/ApiLog'

//data mock for
import Logs from '../../mock/Logs'
const LogsHeading = 
{
    endpoint:"ENDPOINT",
    scope:"SCOPE",
    cost:"TOTAL COST",
    when:"WHEN",
    success: false
}


const ApiLogs = () => {
  return (
    <div className="apilogs">
           <ApiLog log={LogsHeading} isHeading="true" />
        {Logs.map((log, index) => {
            return (
                <ApiLog key={index} log={log} isHeading="false" />
            )
        })}
      
    </div>
  )
}

export default ApiLogs