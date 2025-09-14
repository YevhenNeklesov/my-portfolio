import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Attainments from "./pages/Attainments/Attainments";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/attainments" element={<Attainments />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SocialMedia />
      </div>
    </>
  );
}

export default App;
