import NavBarTop from './components/nav-bar-top/nav-bar-top.component';
import NavBarRight from './components/nav-bar-right/nav-bar-right.component';
import SocialBarLeft from './components/social-bar-left/social-bar-left.component';
import Landing from './components/landing/landing.component';
import AboutMe from './components/about-me/about-me.component';
import Projects from './components/featured-projects/featured-projects.component';
import ContactInfo from './components/contact-info/contact-info.component';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='landing-section' id='landing'>
          <NavBarTop></NavBarTop>
          <Landing></Landing>
        </div>
        <div className='about-section' id='about'>
          <AboutMe></AboutMe>
        </div>
        <div className='skill-section' id='projects'>
          <Projects></Projects>
        </div>
        <div className='contact-section' id='contact'>
          <ContactInfo></ContactInfo>
        </div>
        <div className='footer-section'>
          <Footer></Footer>
        </div>
        <SocialBarLeft></SocialBarLeft>
        <NavBarRight></NavBarRight>
      </div>
    </div>
  );
}

export default App;
