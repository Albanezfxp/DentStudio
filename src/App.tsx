import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import DoctorProfile from './components/DoctorProfile/DoctorProfile'
import Services from './components/Services/Services'
import ClinicSection from './components/ClinicSection/ClinicSection'
import LocationSection from './components/LocationSection/LocationSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import MobileCta from './components/MobileCta/MobileCta'
import { doctors } from './data/doctors'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#servicos">
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />

        {/* A alternância de lado entre os dois perfis é o que dá ritmo à rolagem. */}
        <div id="dentistas">
          {doctors.map((doctor, i) => (
            <DoctorProfile key={doctor.id} doctor={doctor} reversed={i % 2 === 1} />
          ))}
        </div>

        <Services />
        <ClinicSection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer />
      <MobileCta />
    </>
  )
}

export default App
