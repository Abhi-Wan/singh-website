import { NavLink } from "react-router";
import GithubLogo from "/github.png";
import LinkedInLogo from "/linkedin.png";
import ProfilePic from "../assets/profile.jpg";
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="home-link">
          <img src={ProfilePic} className="header-logo" alt="Vite logo" />
          <span className="home-text">Abhinav Singh</span>
        </NavLink>
      </div>

      <div className="middle-section">
        <NavLink to="/" className="header-link">
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink to="/about" className="header-link">
          <span className="nav-text">About</span>
        </NavLink>
        <NavLink to="/resume" className="header-link">
          <span className="nav-text">Resume</span>
        </NavLink>
        <NavLink to="/projects" className="header-link">
          <span className="nav-text">Code Projects</span>
        </NavLink>
        <NavLink to="/photos" className="header-link">
          <span className="nav-text">Photography</span>
        </NavLink>
        <NavLink to="/contact" className="header-link">
          <span className="nav-text">Contact</span>
        </NavLink>
      </div>

      <div className="right-section">
        <a href="https://www.linkedin.com/in/abhinavsinghuw/" target="_blank" className="logo-link">
          <img src={LinkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/Abhi-Wan/" target="_blank" className="logo-link">
          <img src={GithubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
    </div>
  );
}