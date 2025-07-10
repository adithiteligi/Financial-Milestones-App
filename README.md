# College Financial Roadmap App

A modern, interactive financial planning app designed specifically for college students to manage their tuition payments and 401k savings goals.

## Features

### 🎯 Interactive Financial Roadmap
- Visual timeline showing all your financial goals
- Progress tracking with animated progress bars
- Color-coded categories for different goal types
- Real-time progress updates

### 💰 Goal Categories
- **Emergency Fund**: Build a safety net for unexpected expenses
- **Tuition Payment**: Plan and track semester tuition payments
- **401k Contribution**: Start saving for retirement early
- **Graduation Fund**: Prepare for post-graduation expenses

### 🎨 Modern UI/UX
- Dark mode design with green accent theme
- Smooth animations and transitions
- Responsive design for all devices
- Interactive hover effects and feedback

### 📊 Financial Overview
- Total target amount tracking
- Current savings summary
- Overall progress percentage
- Visual progress indicators

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## How to Use

### Adding a New Goal
1. Click the "Add Goal" button in the Financial Overview section
2. Fill in the goal details:
   - Title and description
   - Target amount
   - Current amount saved
   - Select the appropriate category
3. Click "Create Goal" to add it to your roadmap

### Updating Goal Progress
1. Click on any goal card in the roadmap
2. Update the current amount in the modal
3. Click "Update Goal" to save changes

### Tracking Progress
- Each goal shows a progress bar with percentage completion
- Completed goals are marked with a green checkmark
- The overall progress is calculated across all goals

## Technology Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Custom styling with dark mode and green theme
- **Create React App** - Zero-configuration build tool

## Project Structure

```
src/
├── components/
│   ├── Header.js              # App header with logo and navigation
│   ├── FinancialSummary.js    # Overview cards and add goal button
│   ├── Roadmap.js             # Main interactive roadmap component
│   ├── GoalModal.js           # Modal for adding/editing goals
│   └── *.css                  # Component-specific styles
├── App.js                     # Main app component
├── App.css                    # App-level styles
├── index.js                   # React entry point
└── index.css                  # Global styles
```

## Features in Detail

### Interactive Roadmap
- Timeline-style layout with connecting lines
- Category-specific icons and colors
- Hover effects and smooth transitions
- Click to edit functionality

### Progress Tracking
- Real-time progress calculation
- Animated progress bars
- Currency formatting
- Completion status indicators

### Responsive Design
- Mobile-friendly interface
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## Customization

### Colors and Theme
The app uses a dark mode with green accents. You can customize the colors by modifying the CSS variables in the component files:

- Primary green: `#22c55e`
- Dark green: `#16a34a`
- Background: `#0a0a0a` to `#1a1a1a`
- Card background: `#1a1a1a` to `#2a2a2a`

### Adding New Goal Categories
To add new goal categories, update the category options in `GoalModal.js` and add corresponding icons and colors in `Roadmap.js`.

## Future Enhancements

- Data persistence with localStorage or backend
- Goal completion notifications
- Financial tips and advice
- Export progress reports
- Integration with financial institutions
- Budget planning tools

## Contributing

Feel free to fork this project and submit pull requests for any improvements or new features!

## License

This project is open source and available under the MIT License. 