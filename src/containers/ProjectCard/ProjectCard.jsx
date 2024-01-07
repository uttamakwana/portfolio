import "./project-card.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-secondary">
      {/* <img src={project.img} alt="project-img" className="project-card-img" /> */}
      <a className="project-card-content" href={project.link} target="_blank">
        <h1 className="project-card-title font-extrabold">{project.title}</h1>
        <p className="project-card-description font-medium">
          {project.description}
        </p>
        <p className="project-card-time font-regular clr-tertiory">
          {project.time}
        </p>
        <p className="project-card-techstack font-bold">{project.techStack}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
