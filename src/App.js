import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo-fast.jpeg';
import ContactUs from './contact';
import AboutMe from './aboutme';
import result from './result.svg';
import Animation from './animation';
import Navbar from './navbar.js';
import AboutUs from './about-us';
import LanguageSwitcher from './language';

function App() {
  return (

    <div className="text-center vh-100 main">
      <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top"></img>
      <Navbar />
      <Animation />

      <AboutMe />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
