import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import "./BtnDarkMode.css";

function BtnDarkMode() {
  //const [isLightMode, setIsLightMode] = useState(true);
  const [isLightMode, setIsLightMode] = useLocalStorage(
    "isLightMode",
    detectDarkMode()
  );
  const btnRef = useRef(null);

  useEffect(() => {
    if (!isLightMode) {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [isLightMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newIsLightMode = event.matches ? false : true;
        setIsLightMode(newIsLightMode);
      });
  }, [setIsLightMode]);
  const toogleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <button
      ref={btnRef}
      className="dark-mode-btn"
      type="button"
      onClick={toogleTheme}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
export default BtnDarkMode;
