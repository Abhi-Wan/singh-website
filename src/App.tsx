import { Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ResumePage } from "./pages/ResumePage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { PhotosPage } from "./pages/PhotosPage"
import { ContactPage } from "./pages/ContactPage"
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="photos" element={<PhotosPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
