import NavBarTop from './components/nav-bar-top/nav-bar-top.component';
import Introduction from './components/landing/landing.component';
import NavBarSide from './components/nav-bar-side/nav-bar-side.component';
import SocialBarLeft from './components/social-bar-left/social-bar-left.component';
import Projects from './components/featured-projects/featured-projects.component';
import ContactInfo from './components/contact-info/contact-info.component';
import AboutMe from './components/about-me/about-me.component';
import Footer from './components/footer/footer.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='landing-section' id='landing'>
          <NavBarTop></NavBarTop>
          <Introduction></Introduction>
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
        <NavBarSide></NavBarSide>
      </div>
    </div>
  );
}

export default App;
