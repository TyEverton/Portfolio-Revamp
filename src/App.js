import './App.css'
import NavBar from "./Components/NavBar"
import DownloadLink from "./Components/ResumeDownload"
import ContactForm from "./Components/ContactForm"

function App() {
  return (
    <div className="App">
      <NavBar />
      <DownloadLink />
      <ContactForm />
    </div>
  )
}

export default App
