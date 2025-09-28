import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Project from "./pages/Project/page";
import ProjectDetail from "./pages/Project/[id]/page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
