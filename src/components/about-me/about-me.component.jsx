import '../about-me/about-me.styles.css';

const AboutMe = () => {
    return(
        <div>
            <div className='about-me-background'>
                <h1 className='about-me-main-header'>About Me.</h1>
                <h2 className='about-me-header'>Short and sweet.</h2>
                <div className='about-me-desc-container'>
                    <p className='about-me-desc'>
                        Hello! My name is Jake. I'm an aspiring software engineer who loves creating. Introduced to programming in late 2020, 
                        I became fascinated with code and began taking courses at <a href='https://www.wma.us/'>Wilbraham & Monson Academy</a> (my high school).
                        After graduating, I took a decisive step and enrolled in the UMass Global <a href='https://www.umassglobal.edu/academic-programs/extended-education/software-engineering-bootcamp'>Software Engineering Bootcamp</a>. 
                        Today, I'm excited to be actively working towards completing the program.
                    </p>
                    <p className='about-me-desc'>
                        Away from the screens, I cherish quality time with friends and family. 
                        Our adventures often involve scenic hikes, gatherings at <a href='https://www.noodlesnorthampton.com/'>Noodles</a> (a delightful local Asian eatery), 
                        and the occasional high-stakes ultimate frisbee showdown. It's all about making lasting memories and savoring the excitement of each adventure.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;