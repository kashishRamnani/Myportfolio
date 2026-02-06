import { Routes, Route } from "react-router-dom"; // no Router import
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Home, AboutMe, Projects, Skills, Contact } from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
