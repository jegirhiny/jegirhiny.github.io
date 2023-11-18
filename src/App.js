import NavBarTop from './components/nav-bar-top/nav-bar-top.component';
import NavBarRight from './components/nav-bar-right/nav-bar-right.component';
import SocialBarLeft from './components/social-bar-left/social-bar-left.component';
import Landing from './components/landing/landing.component';
import About from './components/about/about.component';
import Projects from './components/featured-projects/featured-projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='landing-section' id='landing'>
          <NavBarTop />
          <Landing />
        </div>
        <div className='about-section' id='about'>
          <About />
        </div>
        <div className='skill-section' id='projects'>
          <Projects />
        </div>
        <div className='contact-section' id='contact'>
          <Contact />
        </div>
        <div className='footer-section'>
          <Footer />
        </div>
        <SocialBarLeft />
        <NavBarRight />
      </div>
    </div>
  );
}

export default App;
