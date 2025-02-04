import Header from "../components/header/Header";

function Main() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, Redux, HTML, CSS, NPM, SCSS, Git</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
