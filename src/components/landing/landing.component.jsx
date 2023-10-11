import './landing.styles.css';

const Landing = () => {
    return(
        <section className='landing-div'>
            <div className='center-div'>
                <h3 className='landing-my-name'>Hi, my name is</h3>
                <h1 className='landing-name'>Jake Girhiny.</h1>
                <h2 className='landing-job'>Software Engineer.</h2>
                <p className='landing-about'>
                    Undergraduate living in Massachusetts with a passion for software development.
                    Interested in all things applications from designing, testing, and solving real-life problems with code.
                    Have a look around, I'm sure you'll find something you like.
                </p>
                <a href='#about' className='landing-more'>Get to know me!</a>
            </div>
        </section>
    );
}

export default Landing;