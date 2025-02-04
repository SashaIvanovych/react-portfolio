import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Olexandr</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <Link
          target="_blank"
          to="https://drive.google.com/file/d/1zhsYEPx_DKzeeWp5u6dGVfvQ0_1XwF9W/view?usp=sharing"
          className="btn"
        >
          Download CV
        </Link>
      </div>
    </header>
  );
}
export default Header;
