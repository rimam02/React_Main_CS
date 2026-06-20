import ThemeToggle from './ThemeToggle.jsx';

function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-mark">JWT</span>
        <div>
          <strong>Security Laboratory</strong>
          <small>React + Vite</small>
        </div>
      </div>

      <div className="nav-links">
        <a href="#generator">Generator</a>
        <a href="#decoder">Decoder</a>
        <a href="#attacks">Attacks</a>
        <a href="#info">Learn</a>
      </div>

      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </nav>
  );
}

export default Navbar;
