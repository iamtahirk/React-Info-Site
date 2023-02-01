// import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css'
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode () {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
      <Main darkMode = {darkMode} />
    </div>
  )
}

export default App
