import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  GraduationCap, 
  PiggyBank, 
  Target,
  CheckCircle,
  Edit3,
  Home,
  DollarSign,
  Wrench,
  FileText
} from 'lucide-react';
import './Roadmap.css';

const Roadmap = ({ goals, onGoalClick, onUpdateProgress, milestoneType }) => {
  const getCategoryIcon = (category, milestoneType) => {
    if (milestoneType === 'college') {
      switch (category) {
        case 'emergency':
          return <Shield size={24} />;
        case 'tuition':
          return <GraduationCap size={24} />;
        case 'retirement':
          return <PiggyBank size={24} />;
        case 'graduation':
          return <Target size={24} />;
        default:
          return <Target size={24} />;
      }
    } else if (milestoneType === 'house') {
      switch (category) {
        case 'downpayment':
          return <Home size={24} />;
        case 'emergency':
          return <Shield size={24} />;
        case 'closing':
          return <DollarSign size={24} />;
        case 'maintenance':
          return <Wrench size={24} />;
        case 'taxes':
          return <FileText size={24} />;
        default:
          return <Home size={24} />;
      }
    }
    return <Target size={24} />;
  };

  const getCategoryColor = (category, milestoneType) => {
    if (milestoneType === 'college') {
      switch (category) {
        case 'emergency':
          return '#ef4444';
        case 'tuition':
          return '#3b82f6';
        case 'retirement':
          return '#22c55e';
        case 'graduation':
          return '#8b5cf6';
        default:
          return '#22c55e';
      }
    } else if (milestoneType === 'house') {
      switch (category) {
        case 'downpayment':
          return '#f59e0b';
        case 'emergency':
          return '#ef4444';
        case 'closing':
          return '#3b82f6';
        case 'maintenance':
          return '#10b981';
        case 'taxes':
          return '#8b5cf6';
        default:
          return '#22c55e';
      }
    }
    return '#22c55e';
  };

  const getMilestoneTitle = () => {
    switch (milestoneType) {
      case 'college':
        return 'Your College Financial Roadmap';
      case 'house':
        return 'Your Home Ownership Roadmap';
      default:
        return 'Your Financial Roadmap';
    }
  };

  const getMilestoneDescription = () => {
    switch (milestoneType) {
      case 'college':
        return 'Track your progress towards education goals';
      case 'house':
        return 'Track your progress towards home ownership';
      default:
        return 'Track your progress towards financial goals';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateProgress = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  // Generate curved path for the timeline
  const generateCurvedPath = () => {
    const height = goals.length * 80; // Approximate height based on number of goals
    const width = 100;
    const centerX = width / 2;
    
    let path = `M ${centerX} 0`;
    
    goals.forEach((_, index) => {
      const y = (index + 1) * 80;
      const amplitude = 15;
      const offset = index % 2 === 0 ? amplitude : -amplitude;
      
      path += ` Q ${centerX + offset} ${y - 20} ${centerX} ${y}`;
    });
    
    return path;
  };

  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <h2>{getMilestoneTitle()}</h2>
        <p>{getMilestoneDescription()}</p>
      </div>
      
      <div className="roadmap-container">
        {/* Curved SVG path */}
        <div className="roadmap-curve">
          <svg viewBox="0 0 100 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <path
              d={generateCurvedPath()}
              stroke="url(#pathGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5, 5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {goals.map((goal, index) => {
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          const categoryColor = getCategoryColor(goal.category, milestoneType);
          
          return (
            <motion.div
              key={goal.id}
              className={`roadmap-item ${goal.completed ? 'completed' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onGoalClick(goal)}
            >
              <div className="roadmap-connector">
                <div className="connector-line"></div>
                <div className="connector-dot" style={{ backgroundColor: categoryColor }}></div>
              </div>
              
              <div className="goal-card">
                <div className="goal-header">
                  <div className="goal-icon" style={{ backgroundColor: `${categoryColor}20` }}>
                    {getCategoryIcon(goal.category, milestoneType)}
                  </div>
                  <div className="goal-info">
                    <h3>{goal.title}</h3>
                    <p>{goal.description}</p>
                  </div>
                  <div className="goal-actions">
                    {goal.completed && <CheckCircle size={20} color="#22c55e" />}
                    <Edit3 size={16} className="edit-icon" />
                  </div>
                </div>
                
                <div className="goal-progress">
                  <div className="progress-info">
                    <span className="current-amount">{formatCurrency(goal.currentAmount)}</span>
                    <span className="target-amount">/ {formatCurrency(goal.targetAmount)}</span>
                  </div>
                  
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        style={{ backgroundColor: categoryColor }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      ></motion.div>
                    </div>
                    <span className="progress-percentage">{progress.toFixed(1)}%</span>
                  </div>
                </div>
                
                {goal.completed && (
                  <div className="completion-badge">
                    <CheckCircle size={16} />
                    Goal Completed!
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap; 