import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Books from './components/Books/Books'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Books />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
