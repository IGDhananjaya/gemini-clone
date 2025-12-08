# Gemini AI Clone (React JS)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=flat&logo=google&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

A fully functional **AI Chatbot** that replicates the look and feel of Google's Gemini interface. Built with **React JS** and powered by the **Google Gemini API** (via `google-generative-ai` SDK), this application allows users to have natural, real-time conversations with the AI.

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)

## ℹ️ About the Project
This project is a clone of the Gemini web interface, designed to demonstrate modern frontend development skills and API integration. It connects directly to Google's Generative AI models to provide intelligent responses, code generation, and creative writing assistance within a clean, responsive UI.

## 🌟 Features
* **Real-time Chat:** Instant streaming responses from Gemini.
* **Gemini Integration:** Uses the latest `gemini free` model.
* **Responsive UI:** Sidebar navigation, new chat functionality, and mobile-friendly layout.
* **Markdown Support:** Properly formats code blocks, lists, and bold text in AI responses.
* **Loading Animations:** Smooth skeleton loaders and typing effects.
* **History Management:** Saves recent chat prompts (optional/if implemented).

## 🛠 Tech Stack
* **Frontend Library:** [React.js](https://react.dev/)
* **Build Tool:** Vite / Create React App
* **AI SDK:** [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai)
* **Styling:** CSS3 / Tailwind CSS (Update based on what you used)
* **Icons:** React Icons / FontAwesome

## 💻 Prerequisites
Before running this project, ensure you have:
* **Node.js** (v16 or higher) installed.
* A **Google Gemini API Key**. You can get one for free at [Google AI Studio](https://aistudio.google.com/).

## 🚀 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/yourusername/gemini-clone.git](https://github.com/yourusername/gemini-clone.git)
    cd gemini-clone
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    Create a `.env` file in the root directory and add your API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    # OR if using Create React App:
    # REACT_APP_GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the Application**
    ```bash
    npm run dev
    # OR
    # npm start
    ```
    Open your browser and navigate to `http://localhost:5173` (or `http://localhost:3000`).

## 📸 Screenshots

| Welcome Screen | Chat Interface |
| :---: | :---: |
| <img src="images/welcome.png" width="400" alt="Welcome Screen"> | <img src="images/chat-response.png" width="400" alt="Chat Response"> |

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request.

## 👤 Author
**I Gede Dhananjaya**
* **Role:** Software Engineer

---
*Disclaimer: This is a personal project for educational purposes and is not affiliated with Google.*
