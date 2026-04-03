import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Divider = () => <div className="divider-glow" />

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Benefits />
        <Divider />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
