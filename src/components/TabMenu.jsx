import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import './TabMenu.css';

const TabMenu = () => {
  return (
    <div className="tab-menu">
      <Link to="/program" className="tab-button">프로그램북</Link>
      <Link to="/guestbook" className="tab-button">방명록</Link>
    </div>
  );
};

export default TabMenu