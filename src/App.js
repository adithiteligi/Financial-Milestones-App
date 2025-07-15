import React, { useState, useEffect } from 'react';
import './App.css';
import Roadmap from './components/Roadmap';
import Header from './components/Header';
import FinancialSummary from './components/FinancialSummary';
import GoalModal from './components/GoalModal';
import MilestoneSelector from './components/MilestoneSelector';

function App() {
  const [selectedMilestone, setSelectedMilestone] = useState('college');
  const [goals, setGoals] = useState({
    college: [
      {
        id: 1,
        title: "Student Loan Payoff",
        description: "Pay off $7,000 in student loans",
        targetAmount: 7000,
        currentAmount: 2000,
        category: "emergency",
        completed: false
      },
      {
        id: 2,
        title: "Emergency Fund",
        description: "Save $10,000 for unexpected expenses",
        targetAmount: 10000,
        currentAmount: 3500,
        category: "emergency",
        completed: false
      },
      {
        id: 3,
        title: "Tuition Payment",
        description: "Pay off $15,000 in tuition costs",
        targetAmount: 15000,
        currentAmount: 3200,
        category: "tuition",
        completed: false
      },
      {
        id: 4,
        title: "401k Contribution",
        description: "Contribute $6,000 to 401k this year",
        targetAmount: 6000,
        currentAmount: 1800,
        category: "retirement",
        completed: false
      },
      {
        id: 5,
        title: "Graduation Fund",
        description: "Save $12,000 for post-graduation expenses",
        targetAmount: 12000,
        currentAmount: 1200,
        category: "graduation",
        completed: false
      }
    ],
    car: [
      {
        id: 6,
        title: "Car Down Payment",
        description: "Save $6,000 for a car down payment",
        targetAmount: 6000,
        currentAmount: 1200,
        category: "downpayment",
        completed: false
      },
      {
        id: 7,
        title: "Emergency Fund",
        description: "Save $2,000 for unexpected car expenses",
        targetAmount: 2000,
        currentAmount: 500,
        category: "emergency",
        completed: false
      },
      {
        id: 8,
        title: "Registration & Fees",
        description: "Save $800 for registration and fees",
        targetAmount: 800,
        currentAmount: 200,
        category: "fees",
        completed: false
      },
      {
        id: 9,
        title: "Insurance Fund",
        description: "Save $1,500 for car insurance",
        targetAmount: 1500,
        currentAmount: 300,
        category: "insurance",
        completed: false
      },
      {
        id: 10,
        title: "Maintenance Fund",
        description: "Save $1,000 for car maintenance",
        targetAmount: 1000,
        currentAmount: 100,
        category: "maintenance",
        completed: false
      }
    ]
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const updateGoalProgress = (goalId, newAmount) => {
    setGoals(prevGoals => ({
      ...prevGoals,
      [selectedMilestone]: prevGoals[selectedMilestone].map(goal => 
        goal.id === goalId 
          ? { ...goal, currentAmount: newAmount, completed: newAmount >= goal.targetAmount }
          : goal
      )
    }));
  };

  const addGoal = (newGoal) => {
    setGoals(prevGoals => ({
      ...prevGoals,
      [selectedMilestone]: [...prevGoals[selectedMilestone], { ...newGoal, id: Date.now() }]
    }));
  };

  const openGoalModal = (goal = null) => {
    setSelectedGoal(goal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGoal(null);
  };

  const currentGoals = goals[selectedMilestone] || [];
  const totalTarget = currentGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalCurrent = currentGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const overallProgress = totalTarget > 0 ? (totalCurrent / totalTarget) * 100 : 0;

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="flex space-between" style={{padding: '1.5rem 2rem'}}>
        <h1 style={{margin: 0}}>Money Milestones</h1>
        <button 
          className="button theme-toggle-btn" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
          style={{ fontSize: '1.3rem', padding: '0.3rem 0.7rem', minWidth: 'unset', borderRadius: '50%' }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      <div className="main-content">
        <MilestoneSelector 
          selectedMilestone={selectedMilestone} 
          onMilestoneChange={setSelectedMilestone} 
        />
        <FinancialSummary 
          totalTarget={totalTarget} 
          totalCurrent={totalCurrent} 
          overallProgress={overallProgress} 
          onAddGoal={() => openGoalModal()}
          milestoneType={selectedMilestone} 
        />
        <Roadmap 
          goals={currentGoals} 
          onGoalClick={openGoalModal}
          onUpdateProgress={updateGoalProgress}
          milestoneType={selectedMilestone} 
        />
        {showModal && (
          <GoalModal 
            goal={selectedGoal} 
            onClose={closeModal} 
            onSave={selectedGoal ? updateGoalProgress : addGoal}
            milestoneType={selectedMilestone} 
          />
        )}
      </div>
    </div>
  );
}

export default App; 