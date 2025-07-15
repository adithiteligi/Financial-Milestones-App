import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function getMonthlyTotals(contributions) {
  // Get last 12 months
  const now = new Date();
  const months = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      month: d.toLocaleString('default', { month: 'short', year: '2-digit' }),
      date: d,
      total: 0
    });
  }
  // Sum contributions per month
  contributions.forEach(({ date, amount }) => {
    const d = new Date(date);
    const idx = months.findIndex(m => m.date.getFullYear() === d.getFullYear() && m.date.getMonth() === d.getMonth());
    if (idx !== -1) months[idx].total += amount;
  });
  // Cumulative sum
  let running = 0;
  return months.map(m => {
    running += m.total;
    return { month: m.month, total: running };
  });
}

const OverallContributionsChart = ({ contributions }) => {
  const data = getMonthlyTotals(contributions);
  if (data.every(d => d.total === 0)) return null;
  return (
    <div style={{ margin: '2rem 0', background: 'var(--color-card)', borderRadius: 12, padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <h4 style={{ margin: '0 0 1rem 0', color: 'var(--color-accent)' }}>Total Money Added</h4>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={v => `$${v}`}/>
          <Line type="monotone" dataKey="total" stroke="#2e7d32" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverallContributionsChart; 