// importing components
import { Navigation } from "../../components";
// importing containers
import { ProjectCard } from "../../containers";
// importing projects data
import { projects } from "../../constants/projects.js";
// import project.css
import './project.css';

const Projects = () => {
  return (
    <main className="main-content flex-between pi-1 projects">
      <Navigation />
      <section className="projects-container">
        {projects &&
          projects.map((project) => <ProjectCard project={project} />)}
      </section>
    </main>
  );
};

export default Projects;
