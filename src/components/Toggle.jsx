import React, { useState } from 'react';
import './Toggle.css';

function Toggle({ title, content, images }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="toggle">
      <div className="toggle-header" onClick={toggleContent}>
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>{title}</span>
      </div>
      {isOpen && <div className="toggle-content">
        <div className="images">
        {images && images.length > 0 && images.map((image, index) => (
            <img key={index} src={image} alt={`toggle-image-${index}`} />
        ))}
        </div>
        <div className="content">
            <p>{content}</p>
        </div>
        </div>}
    </div>
  );
}

export default Toggle;
