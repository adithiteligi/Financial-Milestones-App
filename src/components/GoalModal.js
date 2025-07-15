import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, DollarSign } from 'lucide-react';
import './GoalModal.css';

const GoalModal = ({ goal, onClose, onSave, milestoneType }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetAmount: '',
    currentAmount: '',
    category: 'emergency'
  });

  useEffect(() => {
    if (goal) {
      setFormData({
        title: goal.title,
        description: goal.description,
        targetAmount: goal.targetAmount.toString(),
        currentAmount: goal.currentAmount.toString(),
        category: goal.category
      });
    } else {
      // Set default category based on milestone type
      const defaultCategory = milestoneType === 'college' ? 'emergency' : 'downpayment';
      setFormData(prev => ({ ...prev, category: defaultCategory }));
    }
  }, [goal, milestoneType]);

  const getCategoryOptions = () => {
    if (milestoneType === 'college') {
      return [
        { value: 'emergency', label: 'Emergency Fund' },
        { value: 'tuition', label: 'Tuition Payment' },
        { value: 'retirement', label: '401k Contribution' },
        { value: 'graduation', label: 'Graduation Fund' }
      ];
    } else if (milestoneType === 'house') {
      return [
        { value: 'downpayment', label: 'Down Payment' },
        { value: 'emergency', label: 'Emergency Fund' },
        { value: 'closing', label: 'Closing Costs' },
        { value: 'maintenance', label: 'Home Maintenance' },
        { value: 'taxes', label: 'Property Taxes' }
      ];
    }
    return [];
  };

  const getModalTitle = () => {
    if (goal) {
      return 'Edit Goal';
    }
    if (milestoneType === 'college') return 'Add College Goal';
    if (milestoneType === 'car') return 'Add Car Goal';
    return 'Add Goal';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const goalData = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      currentAmount: parseFloat(formData.currentAmount),
      completed: parseFloat(formData.currentAmount) >= parseFloat(formData.targetAmount)
    };

    if (goal) {
      onSave(goal.id, goalData.currentAmount);
    } else {
      onSave(goalData);
    }
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    const number = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleCurrencyChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9.]/g, '');
    setFormData(prev => ({
      ...prev,
      [name]: numericValue
    }));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{getModalTitle()}</h2>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="goal-form">
            <div className="form-group">
              <label htmlFor="title">Goal Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder={milestoneType === 'college' ? "e.g., Emergency Fund" : "e.g., Down Payment Fund"}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={milestoneType === 'college' ? "Describe your college financial goal..." : "Describe your home ownership goal..."}
                rows="3"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="targetAmount">Target Amount</label>
                <input
                  type="text"
                  id="targetAmount"
                  name="targetAmount"
                  value={formData.targetAmount ? formatCurrency(formData.targetAmount) : ''}
                  onChange={handleCurrencyChange}
                  placeholder="0"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="currentAmount">Current Amount</label>
                <input
                  type="text"
                  id="currentAmount"
                  name="currentAmount"
                  value={formData.currentAmount ? formatCurrency(formData.currentAmount) : ''}
                  onChange={handleCurrencyChange}
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {getCategoryOptions().map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="save-btn">
                <Save size={16} />
                {goal ? 'Update Goal' : 'Create Goal'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GoalModal; 