import React from 'react'
import './MainPage.css'
import DashBoard from '../Dashboard/DashBoard'

const MainPage = () => {
  return (
    <div className="mainPageWrapper">
      <div className="leftSideWrapper"><DashBoard/></div>
      <div className="rightSideWrapper">right side</div>
    </div>
  )
}

export default MainPage
