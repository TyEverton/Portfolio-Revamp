import './App.css'
import NavBar from './Components/NavBar'
import DownloadLink from './Components/ResumeDownload'
import ContactForm from './Components/ContactForm'
import AboutMe from './Components/AboutMe'
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="App">
      <NavBar />
      <DownloadLink />
      <ContactForm />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
