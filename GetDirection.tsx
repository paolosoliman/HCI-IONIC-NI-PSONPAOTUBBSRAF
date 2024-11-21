import React from 'react';
import { useHistory } from 'react-router-dom';
import './GetDirection.css';
import logo from './Copy_of_Untitled-removebg-preview.png'; // Adjust path to logo

const GetDirection: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack(); // Navigate back
  };

  const handleDone = () => {
    alert('Journey completed!'); // Replace with actual functionality
  };

  return (
    <div className="direction-container">
      {/* Header Section */}
      <header className="direction-header">
        <button className="back-button" onClick={goBack}>
          &#x2190; {/* Left Arrow */}
        </button>
        <div className="header-title">
          <img src={logo} alt="Journey PH Logo" className="app-logo" />
          <h1 className="header-title">Journey PH</h1>   
       </div>
        </header>

      {/* Main Section */}
      <main className="direction-main">
        {/* Input Fields */}
        <div className="input-group">
          <div className="input-wrapper">
            <input
              type="text"
              className="location-input"
              placeholder="Where are you coming from?"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="input-group">
          <div className="input-wrapper">
            <input
              type="text"
              className="location-input"
              placeholder="Where are you going?"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            className="route-map"
            src="https://www.google.com/maps/embed"
            title="Route Map"
            allowFullScreen
          ></iframe>
        </div>

        {/* Route Details */}
        <div className="route-details">
          <div className="transport-icons">
            <span className="transport-icon">🚍</span>
            <span className="transport-icon">🚐</span>
            <span className="transport-icon">🚌</span>
          </div>
          <div className="route-info">
            <p>P 39.00 | 7 min walk</p>
            <p>1 hr 46 mins</p>
          </div>
          <div className="time-info">
            <span>01:56 PM</span>
            <span>03:43 PM</span>
          </div>
        </div>

        {/* Done Button */}
        <button className="done-button" onClick={handleDone}>
          Done
        </button>
      </main>
    </div>
  );
};

export default GetDirection;
