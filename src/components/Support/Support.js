import React from 'react'
import {CircleWavyQuestion} from 'phosphor-react'
import './Support.scss'

const Support = () => {
  return (
    <div className="support__container">
        <div className="support">
        <CircleWavyQuestion size={22} color="#fdfcfc" />
        <p> Support</p>
    </div>
    </div>
  )
}

export default Support