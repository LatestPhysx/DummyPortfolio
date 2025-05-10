import { react } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Info from './components/info'
import Slider from './components/slider'
import Projects from './components/projects'
import Certificats from './components/certificats'
import Education from './components/education'
import Contact from './components/contact'
import Skills from './components/skills'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Info />
        <Slider />
        <Education />
        <Certificats />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App