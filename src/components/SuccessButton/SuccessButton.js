import React from 'react'
import {Check} from 'phosphor-react'
import "./SuccessButton.scss"

const SuccessButton = () => {
  return (
    <button className="successbutton">
        <p>Successful</p>
        <Check size={15} />
    </button>
  )
}

export default SuccessButton