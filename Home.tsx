import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './Home.css';
import logo from './Copy_of_Untitled-removebg-preview.png'; // Replace with the path to your logo image

const Home: React.FC = () => {
  const history = useHistory(); // Initialize useHistory for navigation
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src={logo} alt="App Logo" className="logo" />
      </div>
      <div className="home-content">
        <h1 className="home-title">Menu</h1>
        <div className="button-group">
          <button 
            className="home-button Direction" 
            onClick={() => history.push('/get-direction')}
          >
            Get Direction
          </button>
          <button 
            className="home-button History" 
            onClick={() => history.push('/history')}
          >
            History
          </button>
          <button 
            className="home-button HelpCenter" 
            onClick={() => history.push('/helpcenter')}
          >
            Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
