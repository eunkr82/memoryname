import React, { useState } from 'react';
import './ProgressBar.css';


const ProgressBar = ({ currentStep }) => {
  const totalSteps = 6;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
