import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="qapps-portfolio-website container">
      <header className="header container">

        {/* Mobile Menu */}
        <nav id="qapps-navigation--mobile" className="navigation">
          <ul id="qapps-menu--mobile" className="menu">
            <li>Mobile Menu</li>
          </ul>
        </nav>

        {/* Main Menu */}
        <nav id="qapps-navigation--main" className="navigation">
          <ul id="qapps-menu--main" className="menu">
            <li className="menu-item current">
              <a href="#profile" className="menu-item-link link">Profile</a>
            </li>
            <li className="menu-item">
              <a href="#resume" className="menu-item-link link">Resume</a>
            </li>
            <li className="menu-item">
              <a href="#portfolio" className="menu-item-link link">Portfolio</a>
            </li>
            <li className="menu-item">
              <a href="#blog" className="menu-item-link link">Blog</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-item-link link super-secret">?</a>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
