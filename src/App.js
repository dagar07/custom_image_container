import React from 'react';
import CustomImageContainer from './components/CustomImageContainer/CustomImageContainer';

import './App.css';
import './components/CustomImageContainer/animation.css';

function App() {
  let imgSrc = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg';
  return (
    <div className="App">
      <CustomImageContainer
        src={imgSrc}
        alt="UK image"
        animation="fillIn"
        animationDuration="1s"
        color="grey"
      />
    </div>
  );
}

export default App;
