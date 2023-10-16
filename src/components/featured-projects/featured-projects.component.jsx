import './featured-projects.styles.css';

const Projects = () => {
    return(
        <section className='projects-container'>
            <div className='projects-header-text'>
                <h1>Noteworthy Work</h1>
                <h2>Peak into the <span href='https://github.com/jegirhiny' className='vault'>vault</span></h2>
            </div>
            <div className='projects-div'>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>wordle</h2>
                    <p>Wordle is a web-based game giving players six chances to guess the word correctly.</p>
                    <h3>Java + JavaFX</h3>
                </div>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>fifteen-puzzle-game</h2>
                    <p>The fifteen puzzle game is a sliding puzzle with fifteen moving tiles.</p>
                    <h3>React + JavaScript</h3>
                </div>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>blackjack</h2>
                    <p>Blackjack is a card game where the goal is to have a higher value than the dealer.</p>
                    <h3>Java</h3>
                </div>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>farm-idle-game</h2>
                    <p>Farm Idle is an unfinished clicker game. Dig, seed, and upgrade your way to victory.</p>
                    <h3>Java + JavaFX</h3>
                </div>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>personal-portfolio</h2>
                    <p>This was my first big leap into web development. I'm happy with how it turned out.</p>
                    <h3>React + JavaScript</h3>
                </div>
                <div className='projects-div-inner'>
                    <img src='../images/folder-logo.png'></img>
                    <h2>tic-tac-toe</h2>
                    <p>Tic-Tac-Toe is a game for two players who take turns marking spaces in a 3x3 grid.</p>
                    <h3>Java</h3>
                </div>
            </div>
        </section>
    );
}

export default Projects;