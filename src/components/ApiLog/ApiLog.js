import React from 'react'
import './ApiLog.scss'
//components/A
import FailedButton from '../FailedButton/FailedButton'
import SuccessButton from '../SuccessButton/SuccessButton'

const ApiLog = ({log , isHeading}) => {
  return (
    <div className={isHeading == "true"? "apilog  apilog__heading": "apilog"}>
        <div className="apilog__endpoint apilog__item">
           {log?.endpoint}
        </div>

        <div className="apilog__scope apilog__item">
            {log?.scope}
        </div>

        <div className="apilog__cost apilog__item">
           {log?.cost}
        </div>

        <div className="apilog__When apilog__item">
            {log?.when}
        </div>

        <div className="apilog__status apilog__item">
            {isHeading == "true" ? "STATUS" : log?.success == true ? <SuccessButton /> : <FailedButton />}
          {/* {log?.success? <SuccessButton /> : <FailedButton /> }   */}
        </div>
    </div>
  )
}

export default ApiLog