import React from 'react';
import { Plus, TrendingUp, Target } from 'lucide-react';
import './FinancialSummary.css';

const FinancialSummary = ({ totalTarget, totalCurrent, overallProgress, onAddGoal, milestoneType }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getMilestoneTitle = () => {
    switch (milestoneType) {
      case 'college':
        return 'College Financial Overview';
      case 'house':
        return 'Home Ownership Overview';
      default:
        return 'Financial Overview';
    }
  };

  const getAddButtonText = () => {
    switch (milestoneType) {
      case 'college':
        return 'Add College Goal';
      case 'house':
        return 'Add Home Goal';
      default:
        return 'Add Goal';
    }
  };

  return (
    <div className="financial-summary">
      <div className="summary-header">
        <h2>{getMilestoneTitle()}</h2>
        <button className="add-goal-btn" onClick={onAddGoal}>
          <Plus size={20} />
          {getAddButtonText()}
        </button>
      </div>
      
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon">
            <Target size={24} />
          </div>
          <div className="card-content">
            <h3>Total Target</h3>
            <p className="amount">{formatCurrency(totalTarget)}</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="card-icon">
            <TrendingUp size={24} />
          </div>
          <div className="card-content">
            <h3>Current Savings</h3>
            <p className="amount">{formatCurrency(totalCurrent)}</p>
          </div>
        </div>
        
        <div className="summary-card progress-card">
          <div className="card-icon">
            <TrendingUp size={24} />
          </div>
          <div className="card-content">
            <h3>Overall Progress</h3>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${Math.min(overallProgress, 100)}%` }}
                ></div>
              </div>
              <p className="progress-text">{overallProgress.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary; 