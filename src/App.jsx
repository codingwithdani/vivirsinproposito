import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Books from './components/Books/Books'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VivirSinProposito from './pages/VivirSinProposito/VivirSinProposito'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.malaveautor.com/" />
        <meta property="og:url" content="https://www.malaveautor.com/" />
        <meta property="og:title" content="Carlos A. Aguilera (Malavé) | Autor y Conferencista" />
        <meta property="og:description" content="Carlos A. Aguilera (Malavé) explora las ideas y creencias que influyen en nuestra forma de vivir. Autor de Vivir sin Propósito y Gánale al depredador." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vivir-sin-proposito" element={<VivirSinProposito />} />
    </Routes>
  )
}

export default App
