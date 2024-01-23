import React from 'react';
import FAST_UserManual from './FAST-UserManual.pdf';
import FAST from './FAST.exe';
// import './Documentation.css'; // Import your CSS file for additional styles
import "../styles/Documentation.css";

function Documentation() {
  return (
    <div className="documentation-container">
      <div className="about">
        <div className="awesome">
          <div className="header">
            <h2>Explore the User Manual</h2>
          </div>
          <div className="content">
            <p>Unlock the full potential of FAST with our comprehensive user manual.</p>
          </div>
          <div className="cta-button">
            <a href={FAST_UserManual} download>
              <button className="button s-button">Download User Manual</button>
            </a>
          </div>

          <div className="header">
            <h2>Download the FAST exe</h2>
          </div>
          {/* <div className="content">
            <p></p>
          </div> */}
          <div className="cta-button">
            <a href={FAST} download>
              <button className="button s-button">Download FAST exe</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
