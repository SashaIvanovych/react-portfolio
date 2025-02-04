import { Link } from "react-router-dom";
import "./BtnGitHub.css";
import gitHubBlack from "../../img/icons/gitHub-black.svg";

function BtnGitHub({ link }) {
  return (
    <Link target="_blank" to={link} className="btn-outline">
      <img src={gitHubBlack} alt="icon gitHub" />
      GitHub repo
    </Link>
  );
}
export default BtnGitHub;
