import { NavLink } from "react-router-dom";
import "./Project.css";
function Project({ title, img }) {
  return (
    <li className="project">
      <NavLink to={title.replace(/\s/g, "")}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}
export default Project;
