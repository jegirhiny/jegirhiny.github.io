import './featured-projects.styles.css';

const Projects = () => {
    return(
        <section className='projects-container'>
            <div className='projects-header-text'>
                <h1>Noteworthy Work.</h1>
                <div className='special-text'>
                    <h2 id='surround-text-vault'>Peak into the</h2>
                    <a href='#' id='vault'>vault</a>
                    <h2>.</h2>
                </div>
            </div>
            <div className='projects-div'>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                        <img src='../images/folder-logo.png'></img>
                        <h2>wordle</h2>
                        <p>Wordle is a web-based game giving players six chances to guess the word correctly.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>Java + JavaFX</h3>
                    </div>
                </div>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                        <img src='../images/folder-logo.png'></img>
                        <h2>fifteen-puzzle-game</h2>
                        <p>The fifteen puzzle game is a sliding puzzle with fifteen moving tiles.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>React + JavaScript + HTML + CSS</h3>
                    </div>
                </div>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                            <img src='../images/folder-logo.png'></img>
                            <h2 className='folder-header'>blackjack</h2>
                            <p className='folder-desc'>Blackjack is a card game where the goal is to have a higher value than the dealer.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>Java</h3>
                    </div>
                </div>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                        <img src='../images/folder-logo.png'></img>
                        <h2>farm-idle-game</h2>
                        <p>Farm Idle is an unfinished clicker game. Dig, seed, and upgrade your way to victory.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>Java + JavaFX</h3>
                    </div>
                </div>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                        <img src='../images/folder-logo.png'></img>
                        <h2>personal-portfolio</h2>
                        <p>This was my first big leap into web development. I'm happy with how it turned out.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>React + JavaScript + HTML + CSS</h3>
                    </div>
                </div>
                <div className='projects-div-inner'>
                    <div className='projects-header'>
                        <img src='../images/folder-logo.png'></img>
                        <h2>tic-tac-toe</h2>
                        <p>Tic-Tac-Toe is a game for two players who take turns marking spaces in a 3x3 grid.</p>
                    </div>
                    <div className='projects-footer'>
                        <h3>Java</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;