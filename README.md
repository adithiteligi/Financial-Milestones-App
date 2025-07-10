# Money Milestones 💰

A beautiful, interactive financial planning app designed to help college students and young professionals achieve their financial goals through visual roadmaps and milestone tracking.

## ✨ Features

- **Multiple Milestone Types**: College roadmap and home ownership planning
- **Interactive Roadmaps**: Curved, animated paths with glassmorphism effects
- **Progress Tracking**: Visual progress bars and completion percentages
- **Dark Mode Design**: Modern dark theme with green accents
- **Mobile-First**: Optimized for iPhone and mobile devices
- **Glassmorphism UI**: Translucent backgrounds with blur effects

## 🎯 Milestone Types

### College Roadmap
- Tuition payments
- Textbook expenses
- Meal plan costs
- 401k contributions
- Emergency fund building

### Home Ownership Roadmap
- Down payment savings
- Closing costs
- Mortgage payments
- Home maintenance fund
- Property tax savings

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd money-milestones
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

3. **Or deploy via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `build/` folder to [netlify.com](https://netlify.com)

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/money-milestones"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3 with Glassmorphism effects
- **Build Tool**: Create React App
- **Deployment**: Vercel (recommended)

## 📱 Mobile Optimization

The app is specifically designed for mobile devices with:
- iPhone-specific viewport handling
- Touch-optimized interactions
- Safe area insets
- Responsive design patterns

## 🎨 Design Features

- **Dark Mode**: Elegant dark theme with green accents
- **Glassmorphism**: Translucent backgrounds with blur effects
- **Curved Roadmaps**: SVG-based animated paths
- **Progress Visualization**: Interactive progress bars
- **Smooth Animations**: CSS transitions and keyframes

## 📁 Project Structure

```
money-milestones/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── MilestoneSelector.js
│   │   ├── Roadmap.js
│   │   ├── GoalModal.js
│   │   └── FinancialSummary.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need for better financial planning tools for students
- Built with modern web technologies and design principles
- Special thanks to the React and Vercel communities

---

**Made with ❤️ for better financial futures** 