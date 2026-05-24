import { Routes, Route } from 'react-router-dom'
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
  return (
    <>
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
