import Project from "../components/project/Project";
import projectList from "../data/projectList";
function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectList.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </ul>
      </div>
    </main>
  );
}
export default Projects;
