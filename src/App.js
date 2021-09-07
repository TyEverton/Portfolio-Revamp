import './App.css'
import HomePage from './Components/HomePage'
import NavBar from "./Components/NavBar"
import DownloadLink from "./Components/ResumeDownload"

function App() {
  return (
    <div className="App">
      <HomePage />
      <NavBar />
      <DownloadLink />
    </div>
  )
}

export default App
