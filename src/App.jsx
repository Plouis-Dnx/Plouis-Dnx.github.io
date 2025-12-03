import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-700">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App