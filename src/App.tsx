import { Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { PhotosPage } from "./pages/PhotosPage"
import { ContactPage } from "./pages/ContactPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="photos" element={<PhotosPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
