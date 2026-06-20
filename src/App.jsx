import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import TokenGenerator from './components/TokenGenerator.jsx';
import TokenDecoder from './components/TokenDecoder.jsx';
import TokenVerifier from './components/TokenVerifier.jsx';
import AttackSimulator from './components/AttackSimulator.jsx';
import TokenHistory from './components/TokenHistory.jsx';
import InfoPanel from './components/InfoPanel.jsx';

const HISTORY_KEY = 'jwtLabTokenHistory';
const THEME_KEY = 'jwtLabTheme';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'light';
  });

  const [tokenHistory, setTokenHistory] = useState(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(tokenHistory));
  }, [tokenHistory]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  function saveTokenToHistory(token, payload) {
    const newToken = {
      id: crypto.randomUUID(),
      token,
      payload,
      createdAt: new Date().toLocaleString()
    };

    setTokenHistory((oldHistory) => [newToken, ...oldHistory]);
  }

  function deleteToken(id) {
    setTokenHistory((oldHistory) => oldHistory.filter((item) => item.id !== id));
  }

  function clearHistory() {
    setTokenHistory([]);
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="app-shell">
        <section className="intro-section">
          <div>
            <p className="eyebrow">First-Year B.Tech CSE Case Study</p>
            <h1>JWT Security Laboratory</h1>
            <p>
              A frontend-only lab to generate, decode, verify, and test JSON Web
              Tokens while learning the security ideas behind them.
            </p>
          </div>
        </section>

        <div className="lab-grid">
          <TokenGenerator onTokenGenerated={saveTokenToHistory} />
          <TokenDecoder />
          <TokenVerifier />
          <AttackSimulator />
          <TokenHistory
            history={tokenHistory}
            onDelete={deleteToken}
            onClear={clearHistory}
          />
          <InfoPanel />
        </div>
      </main>
    </>
  );
}

export default App;
