# JWT Security Laboratory

## Live Demo
(Deployed Link)
https://react-main-cs.vercel.app/

## GitHub Repository
(GitHub Repository Link)
https://github.com/rimam02/React_Main_CS.git

## Project Description

JWT Security Laboratory is a React.js-based educational tool that demonstrates the working of JSON Web Tokens (JWT). The application allows users to generate tokens, decode token contents, verify token integrity, simulate security attacks, and maintain a history of generated tokens.

The project helps users understand JWT structure and common security concepts through an interactive interface.

---

## Features

- Generate JWT Tokens dynamically
- Decode JWT Header, Payload, and Signature
- Verify Token Integrity
- Simulate alg:none Attack
- Display Security Status Messages
- View Header, Payload, and Signature Information
- Maintain Token Generation History
- Interactive and User-Friendly Interface

---

## Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3
- Vite
- Git & GitHub

---

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── assets/
```

## How It Works

### Generate Token

Creates a JWT-like token with dynamic user information and signature data.

### Decode Token

Splits the token into Header, Payload, and Signature sections and displays the decoded content.

### Verify Token

Checks whether the token structure and signature are valid.

### Simulate alg:none Attack

Demonstrates how attackers may manipulate JWT headers by replacing the algorithm with "none".

### Token History

Stores and displays previously generated tokens for analysis.

---

## Screenshots

### Initial Interface
<img width="1470" height="801" alt="Screenshot 2026-06-12 at 12 49 23 AM" src="https://github.com/user-attachments/assets/4fb7a0b3-3596-4f28-9214-f2e9cd6e3145" />


### Token Generation and Decoding
<img width="1470" height="801" alt="Screenshot 2026-06-12 at 12 49 59 AM" src="https://github.com/user-attachments/assets/05af6027-ee31-4fbf-9074-c862fe4cb710" />

### Token Verification
<img width="1470" height="801" alt="Screenshot 2026-06-12 at 12 50 38 AM" src="https://github.com/user-attachments/assets/d54580ff-8c87-4ead-8278-2f8f1e78efb4" />


### alg:none Attack Simulation
<img width="1470" height="801" alt="Screenshot 2026-06-12 at 12 51 20 AM" src="https://github.com/user-attachments/assets/24a51e93-82fe-401f-b969-288820613e72" />

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rimam02/React_Main_CS.git
```

Navigate into the project folder:

```bash
cd React_Main_CS
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Future Improvements

- Persistent History using Local Storage
- Additional JWT Attack Simulations
- Improved Dashboard Analytics
- Enhanced Token Validation

---

## Conclusion

JWT Security Laboratory provides a practical understanding of JSON Web Tokens and common JWT security concepts. The project demonstrates token generation, decoding, verification, attack simulation, and history tracking through an interactive React.js application.

---

## Author

Rima Maji

React.js End Semester Project

Case Study #165 – JWT Security Laboratory
