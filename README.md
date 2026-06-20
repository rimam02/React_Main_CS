# JWT Security Laboratory

A beginner-friendly ReactJS case study project for learning JSON Web Tokens. The project is frontend-only and demonstrates JWT generation, decoding, signature verification, local token history, and common JWT attack ideas.

## Tech Stack

- ReactJS with Vite
- JavaScript
- CSS
- `jose`
- `jwt-decode`
- `localStorage`

## Installation Commands

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Step-by-Step Setup

1. Open the project folder in VS Code or any code editor.
2. Open a terminal in the project folder.
3. Run `npm install` to install React, Vite, `jose`, and `jwt-decode`.
4. Run `npm run dev` to start the development server.
5. Open the local URL shown in the terminal, usually `http://localhost:5173`.
6. Use the generator to create a token, then copy it into the decoder, verifier, and attack simulator.

## Folder Structure

```text
src/
|
├── components/
│   ├── Navbar.jsx
│   ├── TokenGenerator.jsx
│   ├── TokenDecoder.jsx
│   ├── TokenVerifier.jsx
│   ├── AttackSimulator.jsx
│   ├── TokenHistory.jsx
│   ├── InfoPanel.jsx
│   └── ThemeToggle.jsx
|
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Package Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^7.2.7",
  "@vitejs/plugin-react": "^5.0.0",
  "jose": "^6.1.3",
  "jwt-decode": "^4.0.0"
}
```

## Component Explanation

### `App.jsx`

The main component of the project. It stores the selected theme and token history. It also saves both values in `localStorage` using `useEffect`.

### `Navbar.jsx`

Displays the project name, section links, and the light/dark mode toggle.

### `ThemeToggle.jsx`

A small reusable button component that switches between light and dark mode.

### `TokenGenerator.jsx`

Accepts a JSON payload and secret key from the user. It uses `jose` to generate an HS256 signed JWT. Generated tokens are sent back to `App.jsx` and saved in history.

### `TokenDecoder.jsx`

Accepts a JWT token and decodes its header and payload using `jwt-decode`. This component shows that decoding is only reading the token, not verifying it.

### `TokenVerifier.jsx`

Accepts a JWT token and secret key. It uses `jose` to verify the token signature. If the token or secret is wrong, it shows `Invalid Signature`.

### `AttackSimulator.jsx`

Demonstrates two JWT security problems:

- None Algorithm Attack: changes the header algorithm to `none` and removes the signature.
- Payload Tampering Attack: modifies the payload while keeping the old signature, causing verification failure.

### `TokenHistory.jsx`

Displays generated tokens saved in `localStorage`. The user can delete one token or clear all tokens.

### `InfoPanel.jsx`

Contains beginner-friendly theory about JWT, header, payload, signature, authentication, authorization, risks, and best practices.

## How to Use the Lab

1. Enter or edit a JSON payload in the generator.
2. Enter a secret key.
3. Generate a JWT token.
4. Copy the token to the decoder to see the header and payload.
5. Copy the token to the verifier and use the same secret key to check the signature.
6. Paste the token in the attack simulator and try the none algorithm and payload tampering demonstrations.
7. View generated tokens in token history.

## Important Learning Points

- JWT payloads are encoded, not encrypted.
- Anyone can decode a JWT and read its payload.
- A valid signature proves that the token was not modified.
- If payload data is changed, signature verification fails.
- Applications should never accept tokens using the `none` algorithm.
- Sensitive information such as passwords should never be stored in JWT payloads.

## Viva Questions and Answers

### 1. What is JWT?

JWT stands for JSON Web Token. It is a compact token used to send information between systems in a safe and verifiable format.

### 2. What are the three parts of a JWT?

A JWT has three parts: header, payload, and signature.

### 3. What does the header contain?

The header contains metadata such as token type and signing algorithm.

### 4. What does the payload contain?

The payload contains claims or user-related data such as name, role, or expiry time.

### 5. Is JWT payload encrypted?

No. JWT payload is usually Base64URL encoded, not encrypted. Anyone with the token can decode it.

### 6. What is the use of the signature?

The signature verifies that the token was created using the correct secret key and was not changed.

### 7. Which library is used to generate and verify tokens in this project?

The project uses the `jose` library.

### 8. Which library is used to decode tokens?

The project uses the `jwt-decode` library.

### 9. What is the none algorithm attack?

It is an attack where the token algorithm is changed to `none` and the signature is removed. Secure systems must reject such tokens.

### 10. Why does payload tampering fail during verification?

Because the original signature was created for the original payload. When the payload changes, the old signature no longer matches.

### 11. What is authentication?

Authentication checks the identity of a user.

### 12. What is authorization?

Authorization checks what actions or resources the authenticated user is allowed to access.

### 13. Why should secret keys be strong?

Weak secret keys can be guessed by attackers, allowing them to create fake valid tokens.

### 14. Why is `localStorage` used in this project?

It is used to store token history and theme preference in the browser.

### 15. Is this project using a backend?

No. This is a frontend-only educational project.

## Limitations

- This project is for learning only.
- In real applications, JWT generation and verification should usually happen on a secure backend.
- Secret keys should not be exposed in frontend code for real production systems.
