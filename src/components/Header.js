import React from 'react';
import { GraduationCap, DollarSign, Home } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <DollarSign className="logo-icon" />
          <h1>Money Milestones</h1>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <GraduationCap className="stat-icon" />
            <span>Smart Financial Planning</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 