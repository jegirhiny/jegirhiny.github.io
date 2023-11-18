import './project-item.styles.css';

const ProjectItem = ({ title, description, technologies}) => {
    return (
        <div className='projects-div-inner'>
            <img src='../images/folder-logo.png'></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{technologies}</h3>
        </div>
    )
}

export default ProjectItem;