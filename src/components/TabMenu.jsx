import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import './TabMenu.css';

const TabMenu = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-menu">
        <Link 
          to="/program" 
          className={`tab-button ${activeTab === '/program' ? 'active' : ''}`} 
          onClick={() => handleTabClick('/program')}
        > 프로그램북</Link>
        <Link 
          to="/guestbook" 
          className={`tab-button ${activeTab === '/guestbook' ? 'active' : ''}`} 
          onClick={() => handleTabClick('/guestbook')}
        >방명록</Link>
    </div>
  );
};

export default TabMenu