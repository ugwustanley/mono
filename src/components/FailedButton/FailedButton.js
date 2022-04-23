import React from 'react'
import {WarningCircle} from 'phosphor-react'
import './FailedButton.scss'

const FailedButton = () => {
  return (
    <button className="failedbutton">
        <p>Failed</p>
        <WarningCircle size={15} />
    </button>
  )
}

export default FailedButton