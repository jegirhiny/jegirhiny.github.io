import '../navigation-side-bar/navigation-side-bar.styles.css';

const NavigationSideBar = () => {
    return(
        <div className='vertical-right-bar'>
            <a href='#landing'>
                <img src='../images/home-logo.png' alt='GitHub'/>
            </a>
            <a href='#about'>
                <img src='../images/terminal-logo.png' alt='Gmail'/>
            </a>
            <a href='#projects'>
                <img src='../images/code-logo.png' alt='Instagram'/>
            </a>
            <a href='#contact'>
                <img src='../images/phone-logo.png' alt='Instagram'/>
            </a>
            <div className='vertical-right'></div>
        </div>
    );
}

export default NavigationSideBar;