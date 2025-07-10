import React, { useState } from 'react';
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
        title: "Emergency Fund",
        description: "Save $2,000 for unexpected expenses",
        targetAmount: 2000,
        currentAmount: 800,
        category: "emergency",
        completed: false
      },
      {
        id: 2,
        title: "Tuition Payment",
        description: "Pay next semester's tuition of $8,000",
        targetAmount: 8000,
        currentAmount: 3200,
        category: "tuition",
        completed: false
      },
      {
        id: 3,
        title: "401k Contribution",
        description: "Contribute $6,000 to 401k this year",
        targetAmount: 6000,
        currentAmount: 1800,
        category: "retirement",
        completed: false
      },
      {
        id: 4,
        title: "Graduation Fund",
        description: "Save $5,000 for post-graduation expenses",
        targetAmount: 5000,
        currentAmount: 1200,
        category: "graduation",
        completed: false
      }
    ],
    house: [
      {
        id: 5,
        title: "Down Payment Fund",
        description: "Save $40,000 for 20% down payment",
        targetAmount: 40000,
        currentAmount: 12000,
        category: "downpayment",
        completed: false
      },
      {
        id: 6,
        title: "Emergency Fund",
        description: "Build 6-month emergency fund of $15,000",
        targetAmount: 15000,
        currentAmount: 8000,
        category: "emergency",
        completed: false
      },
      {
        id: 7,
        title: "Closing Costs",
        description: "Save $8,000 for closing costs and fees",
        targetAmount: 8000,
        currentAmount: 3000,
        category: "closing",
        completed: false
      },
      {
        id: 8,
        title: "Home Maintenance Fund",
        description: "Save $10,000 for home repairs and maintenance",
        targetAmount: 10000,
        currentAmount: 2500,
        category: "maintenance",
        completed: false
      },
      {
        id: 9,
        title: "Property Tax Fund",
        description: "Save $6,000 for annual property taxes",
        targetAmount: 6000,
        currentAmount: 1800,
        category: "taxes",
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

  return (
    <div className="App">
      <Header />
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
      </div>
      {showModal && (
        <GoalModal
          goal={selectedGoal}
          onClose={closeModal}
          onSave={selectedGoal ? updateGoalProgress : addGoal}
          milestoneType={selectedMilestone}
        />
      )}
    </div>
  );
}

export default App; 