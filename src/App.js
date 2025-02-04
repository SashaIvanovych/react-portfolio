import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import MainLayout from "./pages/MainLayout";
import ScrollToTop from "./utils/scrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="projects/:title" element={<ProjectPage />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
