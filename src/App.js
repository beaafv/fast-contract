import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-fast.jpeg';
import ContactUs from './contact';
import AboutMe from './aboutme';
import result from './result.svg';
import Animation from './animation';
import Navbar from './navbar.js';

function App() {
  return (

    <div className="text-center vh-100 main">
      <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top"></img>
      <Navbar />


      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-50 justify-content-evenly">
              <a className="nav-link" href="#">About us</a>
              <a className="nav-link" href="#">Contact us</a>
            </div>
          </div>
        </div>
      </nav> */}
      <Animation />

      <AboutMe />
      <ContactUs />

    </div>
  );
}

export default App;
