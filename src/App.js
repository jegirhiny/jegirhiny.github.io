import Navigation from './components/navigation-bar/navigation-bar.component';
import Introduction from './components/landing/landing.component';
import NavigationSideBar from './components/navigation-side-bar/navigation-side-bar.component';
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
        <SocialBarLeft></SocialBarLeft>
        <NavigationSideBar></NavigationSideBar>
        <div className='landing-section' id='landing'>
          <Navigation></Navigation>
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
      </div>
    </div>
  );
}

export default App;
