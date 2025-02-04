import gitHub from "../../img/icons/gitHub.svg";
import telegram from "../../img/icons/telegram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target="_blank" href="https://github.com/SashaIvanovych">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" href="https://t.me/nekouta">
                <img src={telegram} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 Portfolio front-end</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
