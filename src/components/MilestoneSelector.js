import React from 'react';
import { ChevronDown, GraduationCap, Home, Wrench } from 'lucide-react';
import './MilestoneSelector.css';

const MilestoneSelector = ({ selectedMilestone, onMilestoneChange }) => {
  const milestones = [
    {
      id: 'college',
      name: 'College Journey',
      icon: <GraduationCap size={20} />,
      description: 'Plan your education finances'
    },
    {
      id: 'car',
      name: 'Car Purchase',
      icon: <Wrench size={20} />, // Use a car-related icon
      description: 'Save for your first car'
    }
  ];

  const currentMilestone = milestones.find(m => m.id === selectedMilestone);

  return (
    <div className="milestone-selector">
      <div className="selector-header">
        <h2>Choose Your Milestone</h2>
        <p>Select a financial journey to track your progress</p>
      </div>
      
      <div className="selector-container">
        <div className="current-milestone">
          <div className="milestone-icon">
            {currentMilestone.icon}
          </div>
          <div className="milestone-info">
            <h3>{currentMilestone.name}</h3>
            <p>{currentMilestone.description}</p>
          </div>
        </div>
        
        <div className="milestone-dropdown">
          <select 
            value={selectedMilestone}
            onChange={(e) => onMilestoneChange(e.target.value)}
            className="milestone-select"
          >
            {milestones.map(milestone => (
              <option key={milestone.id} value={milestone.id}>
                {milestone.name}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default MilestoneSelector; 