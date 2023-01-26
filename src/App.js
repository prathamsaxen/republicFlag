import React from 'react';
import './App.css';
import AshokChakra from "../src/Assets/2.png";
function App() {
  return (
    <div className="App">
      <div className="frontinterface">
      <div className="text"><h1>74th Republic Day!<br/><span className='subhead'>
      शौर्यम..दक्षम..युध्धेय, बलिदान परम धर्मा</span></h1></div>
        <div className="flag">
          <div className="saffron"></div>
          <div className="white">
            <img src={AshokChakra} alt="Error in laoding Chakra" />
          </div>
          <div className="green"></div>
          <div className="wish">
            <h1>Happy Republic Day Indians!</h1>
            <p>Best Wishes From Saxena's Group</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
