import './navbar.css';

function Navbar() {
  return(
    <header class="header">
      <div class="header-wrapper">
        <nav aria-label="Menu principal" className="menu sticky-top" >
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a href="#form" className="nav-link">Contact us</a>
            </li>
            <li className="nav-item">
              <a href="#process" className="nav-link">process</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
