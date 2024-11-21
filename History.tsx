import React from 'react';
import { useHistory } from 'react-router-dom';
import './History.css';
import logo from './Copy_of_Untitled-removebg-preview.png'; // Ensure this path matches your project's logo location

const History: React.FC = () => {
  const history = useHistory(); // React Router v5 hook for navigation

  const handleBack = () => {
    history.goBack(); // Navigate to the previous page
  };

  const historyItems = [
    'Doña Carmen QC',
    'Gateway Terminal',
    'Ali Mall Cubao',
    'Riverbanks Marikina',
  ];

  return (
    <div className="history-container">
      <header className="history-header">
        <button className="back-button" onClick={handleBack}>←</button>
        <div className="header-title">
          <img src={logo} alt="Journey PH Logo" className="app-logo" />
          <h1 className="header-title">Journey PH</h1>   
       </div>
      </header>
      <h2 className="history-title">HISTORY</h2>
      <ul className="history-list">
        {historyItems.map((item, index) => (
          <li key={index} className="history-item">
            <span className="history-indicator"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
