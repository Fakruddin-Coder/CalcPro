# 🧮 CalcPro - Smart Calculator

[![Live Demo](https://img.shields.io/badge/Live_Demo-calc--pro--two.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://calc-pro-two.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-success?style=for-the-badge&logo=vercel&logoColor=white)](https://calc-pro-two.vercel.app/)

A sleek, modern, and interactive glassmorphic web calculator built using vanilla web technologies. **CalcPro** features fluid background animations, dynamic button shine micro-interactions, responsive design, and seamless keyboard navigation.

---

## 🌐 Live Demo

Experience **CalcPro** live in your browser:  
👉 **[https://calc-pro-two.vercel.app/](https://calc-pro-two.vercel.app/)**

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
└── README.md        # Project documentation & live deployment link
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

## ☁️ Vercel Deployment

**CalcPro** is deployed on [Vercel](https://vercel.com/) with continuous deployment enabled:

- **Live Production URL**: [https://calc-pro-two.vercel.app/](https://calc-pro-two.vercel.app/)

### Continuous Deployment via GitHub
Whenever changes are pushed to the `main` branch of [Fakruddin-Coder/CalcPro](https://github.com/Fakruddin-Coder/CalcPro), Vercel automatically detects the update, builds, and deploys the new version instantly.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Fakruddin-Coder/CalcPro/issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
