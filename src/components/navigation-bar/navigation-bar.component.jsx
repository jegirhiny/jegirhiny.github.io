import '../navigation-bar/navigation-bar.styles.css';

const Navigation = () => {
    return(
        <div id='landing' className='nav-bar'>
            <a className='nav-name'>jegirhiny.github.io</a>
            <ol className='nav-list'>
                <a href='#about'><span>01.</span>About Me</a>
                <a href='#projects'><span>02.</span>Projects</a>
                <a href='#projects'><span>03.</span>Skills</a>
                <a href='#contact'><span>04.</span>Contact</a>
                <a href='..\pdfs\Jake_Girhiny_Resume.pdf' id='resume-link' download>Resume</a>
            </ol>
        </div>
    );
}

export default Navigation;