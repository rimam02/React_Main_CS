# 🔐 JWT (JSON Web Token) Security Laboratory

A beginner-friendly ReactJS application that demonstrates how JSON Web Tokens (JWTs) are generated, decoded, verified, and how common JWT security attacks work. This project was developed as a case study for educational purposes to help students understand JWT authentication concepts through an interactive web interface.

---

## 📖 About the Project

JWT (JSON Web Token) is widely used for authentication and authorization in modern web applications. Although JWTs are commonly used, many beginners find it difficult to understand how they work internally.

This project provides a hands-on learning environment where users can:

- Generate JWT tokens using the HS256 algorithm.
- Decode JWT header and payload.
- Verify JWT signatures.
- Simulate common JWT attacks.
- Store generated token history.
- Learn JWT security best practices.

---

## ✨ Features

- 🔑 JWT Token Generator
- 📖 JWT Token Decoder
- ✅ JWT Signature Verification
- ⚠️ JWT Attack Simulator
  - None Algorithm Attack
  - Payload Tampering Attack
- 🕒 Token History using Local Storage
- 🌙 Light/Dark Theme Toggle
- 📱 Responsive User Interface

---

## 🛠️ Technologies Used

- ReactJS
- Vite
- JavaScript (ES6+)
- CSS3
- jose
- jwt-decode
- Browser Local Storage

---

## 📂 Project Structure

```
JWT-Security-Laboratory/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── TokenGenerator.jsx
│   │   ├── TokenDecoder.jsx
│   │   ├── TokenVerifier.jsx
│   │   ├── AttackSimulator.jsx
│   │   ├── TokenHistory.jsx
│   │   └── InfoPanel.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

---

### Installation

Clone the repository

```bash
git clone https://github.com/rimam02/React_Main_CS.git
```

Go to the project folder

```bash
cd JWT-Security-Laboratory
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

---

## 📷 Application Screenshots


- Home Page
<img width="418" height="235" alt="image" src="https://github.com/user-attachments/assets/42c8f901-c557-4bc8-9e3c-9df8774c9cb6" />



- JWT Generator
<img width="418" height="235" alt="image" src="https://github.com/user-attachments/assets/8e3332c6-51a5-4d02-9d37-df331f9a0bcb" />


  

- JWT Decoder & Signature Verification
<img width="418" height="235" alt="image" src="https://github.com/user-attachments/assets/9b708939-c7d4-4f8f-a7f2-2f9d0bd4e572" />


  

- Attack Simulator
<img width="418" height="235" alt="image" src="https://github.com/user-attachments/assets/245148b3-7dd3-4b43-aa7d-d3becbd4ce7a" />

---

## 🎯 Learning Outcomes

This project helps users understand:

- JWT structure (Header, Payload, Signature)
- JWT generation process
- Token decoding
- Signature verification
- JWT security vulnerabilities
- Importance of signature validation
- Browser Local Storage
- React functional components
- React Hooks (`useState`, `useEffect`)
- Component-based architecture

---

## 🌐 Live Demo

👉 **Live Project**

https://react-main-cs-594x.vercel.app/

---

## 💻 GitHub Repository

👉 **Repository**

https://github.com/rimam02/React_Main_CS.git

---

## 👩‍💻 Author

**Rima Maji**

B.Tech Student

Case Study Project

JWT (JSON Web Token) Security Laboratory

---

## 📚 References

- React Documentation
- Vite Documentation
- jose Documentation
- jwt-decode Documentation
- MDN Web Docs
- JWT.io Documentation
