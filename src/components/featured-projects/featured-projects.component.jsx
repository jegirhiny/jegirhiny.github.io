import ProjectItem from '../project-item/project-item.components';
import './featured-projects.styles.css';

const Projects = () => {
    return(
        <div className='projects-container'>
            <div className='projects-div'>
                <ProjectItem 
                    title="Developer Portfolio"
                    desc="Welcome to my GitHub-hosted portfolio! Here, you can immerse yourself in a collection of my projects, trace my creative journey, and reach out for opportunities to collaborate." 
                    tech={["React", "JavaScript", "CSS"]} 
                    link="https://github.com/jegirhiny/jegirhiny.github.io"
                />
                <ProjectItem 
                    title="Weather App"
                    desc="Get weather forecasts, current conditions, and more, all in one convenient place. Plan confidently, access accurate weather data, and never be caught off guard by the elements again." 
                    tech={["API", "JavaScript", "HTML", "CSS"]} 
                    link="https://github.com/jegirhiny/weather-app"
                />
                <ProjectItem 
                    title="Password Generator"
                    desc="Welcome to my GitHub-hosted portfolio! Here, you can immerse yourself in a collection of my projects, trace my creative journey, and reach out for opportunities to collaborate." 
                    tech={["JavaScript", "HTML", "CSS"]} 
                    link="https://github.com/jegirhiny/jegirhiny.github.io"
                />
                <ProjectItem 
                    title="Wordle"
                    desc="Challenge your word-guessing skills with the classic web game, Wordle. This project presents a Java and JavaFX implementation, highlighting proficiency in Java development and UI design." 
                    tech={["Java", "JavaFX", "CSS"]} 
                    link=""
                />
            </div>
        </div>
    );
}

export default Projects;