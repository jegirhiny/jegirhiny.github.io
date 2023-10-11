import '../about-me/about-me.styles.css';

const AboutMe = () => {
    return(
        <div>
            <div className='about-me-background'>
                <h1 className='about-me-main-header'>About Me.</h1>
                <h2 className='about-me-header'>Short and sweet.</h2>
                <div className='about-me-desc-container'>
                    <p className='about-me-desc'>
                        Hello! My name is Jake, and I'm an aspiring software engineer who loves creating. Introduced to programming in late 2020, 
                        I became fascinated with code and soon began taking courses at <a href='https://www.wma.us/'>Wilbraham & Monson Academy</a> (my high school). 
                        Although not many were offered, I effortlessly enrolled in Web Design, Robotics, Big Data, and AP Computer Science A.
                        You may find the course descriptions <a href='https://issuu.com/wilbrahammonsonacademy/docs/curriculum_guide_2022_2_/16'>here</a>.
                    </p>
                    <p className='about-me-desc'>
                        Too keep myself challenged, I'm always learning something new or working on projects. Recentley, I've been learning React, 
                        and improving my JavaScript, HTML, and CSS. In the future, I'd like to learn other frameworks and languages.
                        Outside the computer, I love hanging out with friends and family. We'll usually take a hike, or meet at <a href='https://www.noodlesnorthampton.com/'>Noodles</a>, a local Asian restaurant in Northampton.
                        There is also <a href='https://www.sixflags.com/america'>Six Flags</a>, or ultimate frisbee match (it gets intense).
                    </p>
                </div>
                {/* <div className='about-me-photo-container'>
                    <div className='about-me-photo'></div>
                </div> */}
            </div>
        </div>
    );
}

export default AboutMe;