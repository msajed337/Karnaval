import React from 'react';
import './Component/fontawesome-free-5.8.2-web/css/fontawesome.min.css';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav'
import LeftPictures from './Component/LeftPictures';
import CenterPicture from './Component/CenterPicture';
import RightPictures from './Component/RightPictures';
import LeftSidebar from './Component/LeftSidebar'; 
import RightSidebar from './Component/RightSidebar'
import RightSidebar2 from './Component/RightSidebar2'
import CenterPost from './Component/CenterPost'

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <LeftPictures></LeftPictures>
      <CenterPicture></CenterPicture>
      <RightPictures></RightPictures>
      <div className='signup-logo'>
      </div>
      <LeftSidebar></LeftSidebar>
      <RightSidebar></RightSidebar>
      <RightSidebar2></RightSidebar2>
      <CenterPost></CenterPost>
    </div>
  )
}

export default App;
