function ThemeToggle({ theme, onToggleTheme }) {
  return (
    <button className="theme-toggle" onClick={onToggleTheme} type="button">
      <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}

export default ThemeToggle;
