import React from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo';
import DivTheer from './components/DivTheer';

function DashBoard() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="flex">
          <Menu />
          <div className="flex flex-wrap">
            <DivOne  />
            <DivTwo />
            <DivTheer />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard