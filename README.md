# 🧮 CalcPro - Smart Calculator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A sleek, modern, and interactive glassmorphic web calculator built using vanilla web technologies. **CalcPro** features fluid background animations, dynamic button shine micro-interactions, responsive design, and seamless keyboard navigation.

---

## ✨ Features

- **🎨 Modern Glassmorphism UI**: High-fidelity translucent card design with backdrop blurs, soft gradient accents, and subtle drop shadows.
- **✨ Dynamic Visual Micro-Animations**:
  - Floating ambient background circles with smooth continuous easing.
  - Interactive light shine hover sweep across buttons.
  - Display "pop" scale animation on numerical and operator inputs.
  - Gentle shake feedback animation upon calculation errors or invalid syntax.
- **⌨️ Comprehensive Keyboard Support**:
  - Numbers `0` through `9`
  - Operators: `+`, `-`, `*`, `/`, `%`, `.`
  - Evaluation: `Enter` or `=`
  - Delete / Backspace: `Backspace`
  - Clear / Reset: `Escape`
- **📝 Calculation History & Preview**: Shows the previous formula expression above the active calculation result.
- **🛡️ Input Validation**:
  - Prevents multiple consecutive operators.
  - Blocks redundant decimal points within the same numerical segment.
  - Floating-point precision management and Division-by-Zero safety checks.
- **📱 Fully Responsive**: Optimized for desktop monitors, tablets, and mobile screens.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structuring the calculator frame, display panels, and button grid.
- **CSS3**: Custom styling, CSS Grid, Flexbox, keyframe animations, glassmorphism (`backdrop-filter`), and media queries.
- **JavaScript (Vanilla ES6+)**: State management, expression parser, event delegation, and keyboard input handling.

---

## 📁 Project Structure

```text
CalcPro/
├── index.html       # Markup structure and calculator layout
├── style.css        # Styles, animations, glassmorphism, responsive design
├── script.js        # Calculator logic, math evaluation, keyboard controls
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

---

## 🚀 How to Run Locally

CalcPro is a zero-dependency static web application and can be run immediately on any machine:

### Option 1: Direct File Launch
Simply double-click [`index.html`](index.html) or right-click and choose **Open with > Chrome / Firefox / Edge / Safari**.

### Option 2: Using VS Code Live Server
1. Open this repository in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 3: Using Python HTTP Server
Open your terminal in the project directory and execute:
```bash
# Python 3
python -m http.server 3000
```
Then visit [`http://localhost:3000`](http://localhost:3000) in your browser.

### Option 4: Using Node.js (npx serve)
```bash
npx serve .
```

---

## ☁️ Vercel Deployment Instructions

Deploying **CalcPro** to [Vercel](https://vercel.com/) is straightforward with zero configuration needed.

### Method 1: Deploy via GitHub & Vercel Dashboard (Recommended)

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** and select **"Project"**.
3. Choose your GitHub repository: `Fakruddin-Coder/CalcPro`.
4. In the configuration screen:
   - **Framework Preset**: Leave as *Other* (Static Site).
   - **Root Directory**: `./`
   - **Build & Output Settings**: Defaults are fine (no build command needed for static sites).
5. Click **"Deploy"**.
6. Your live site URL (e.g., `https://calc-pro-xxx.vercel.app`) will be available in seconds!

### Method 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the interactive prompts to authenticate and deploy:
   - Set up and deploy? `Y`
   - Which scope? Select your personal account.
   - Link to existing project? `N`
   - What's your project's name? `calcpro`
   - In which directory is your code located? `./`
4. For production deployment, run:
   ```bash
   vercel --prod
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Fakruddin-Coder/CalcPro/issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
