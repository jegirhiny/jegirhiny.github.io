import ProjectItem from '../project-item/project-item.components';
import './featured-projects.styles.css';

const Projects = () => {
    return(
        <section className='projects-container'>
            <div className='projects-header-text'>
                <h1>Noteworthy Work</h1>
                <h2>Peak into the <a href='https://github.com/jegirhiny' className='vault'>vault</a></h2>
            </div>
            <div className='projects-div'>
                <ProjectItem title="personal-portfolio" description="My personal portfolio showcasing my projects and accomplishments." technologies="React / JS" />
                <ProjectItem title="weather-app" description="Allows users to check the current weather and forecast for a specific location." technologies="JS / HTML / CSS" />
                <ProjectItem title="calendar" description="A sleek calendar application that helps you stay organized and manage events." technologies="React / JS" />
                <ProjectItem title="wordle" description="Wordle is a web-based game giving players six chances to guess the word correctly." technologies="Java / JavaFX" />
                <ProjectItem title="password-generator" description="A user-friendly password generator capable of creating highly secure passwords." technologies="React / JS" />
                <ProjectItem title="jeopardy" description="An adaptation of the classic Jeopardy game - challenge your trivia skills." technologies="JS / HTML / CSS" />
            </div>
        </section>
    );
}

export default Projects;