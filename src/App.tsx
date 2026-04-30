import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useCursor } from './hooks/useCursor'

function App() {
  const { cursorRef, followerRef } = useCursor()

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      <Navbar />
      <main>
        <Hero />
       
        <Skills />
         {/* <About /> */}
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
