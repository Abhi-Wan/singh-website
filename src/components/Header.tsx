import viteLogo from '/vite.svg'
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <a href="/">
          <img src={viteLogo} className="header-logo" alt="Vite logo" />
          <span className="home-text">Abhinav Singh</span>
        </a>
      </div>

      <div className="middle-section">
        <a href="/" className="header-link">
          <span className="nav-text">Home</span>
        </a>
        <a href="/about" className="header-link">
          <span className="nav-text">About</span>
        </a>
        <a href="/resume" className="header-link">
          <span className="nav-text">Resume</span>
        </a>
        <a href="/projects" className="header-link">
          <span className="nav-text">Code Projects</span>
        </a>
        <a href="/photos" className="header-link">
          <span className="nav-text">Photography</span>
        </a>
        <a href="/contact" className="header-link">
          <span className="nav-text">Contact</span>
        </a>
      </div>

      <div className="right-section">
        <a href="https://www.linkedin.com/in/abhinavsinghuw/" target="_blank">
          <img src={viteLogo} className="link-logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/Abhi-Wan/" target="_blank">
          <img src={viteLogo} className="link-logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
}