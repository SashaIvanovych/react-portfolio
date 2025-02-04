import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import projectList from "../data/projectList";
function ProjectPage() {
  const params = useParams();
  const selectedProject = projectList.find(
    (project) =>
      project.title.replace(/\s/g, "") === params.title.replace(/\s/g, "")
  );
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{selectedProject?.title}</h1>

          <img
            src={selectedProject?.img}
            alt="Project img"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{selectedProject?.skills}</p>
          </div>
          <BtnGitHub link={selectedProject?.link} />
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
