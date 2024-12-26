import React from 'react'
import './MainPage.css'
import DashBoard from '../Dashboard/DashBoard'
import TaskBoard from '../Taskboard/TaskBoard'

const MainPage = () => {
  return (
    <div className="mainPageWrapper">
      <div className="leftSideWrapper"><DashBoard/></div>
      <div className="rightSideWrapper"><TaskBoard/></div>
    </div>
  )
}

export default MainPage
