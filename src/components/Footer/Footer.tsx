import logo from '../../assets/clinic_logo/whiteTransparent.png'
import { clinic } from '../../data/clinic'
import { doctors } from '../../data/doctors'
import './Footer.css'

const NAV = [
  { href: '#dr-thomas', label: 'Dr. Thomás' },
  { href: '#dr-gabriel', label: 'Dr. Gabriel' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clinica', label: 'A clínica' },
  { href: '#localizacao', label: 'Localização' },
]

function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <div className="foot__brand">
          <img src={logo} alt="DentStudio" loading="lazy" />
          <p className="foot__tagline">{clinic.tagline}.</p>
        </div>

        <nav className="foot__col" aria-label="Rodapé">
          <span className="label label--bare label--muted">Navegar</span>
          <ul>
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="foot__col">
          <span className="label label--bare label--muted">WhatsApp</span>
          <ul>
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <a href={doctor.whatsapp} target="_blank" rel="noreferrer">
                  {doctor.shortName} · {doctor.whatsappLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot__col">
          <span className="label label--bare label--muted">Endereço</span>
          <address>
            {clinic.place}
            <br />
            {clinic.street}
            <br />
            {clinic.city} · {clinic.zip}
          </address>
        </div>
      </div>

      <div className="shell foot__bottom">
        <span>© {new Date().getFullYear()} DentStudio</span>
        <span className="foot__bottom-note">
          {clinic.discipline}
          <i className="sparkle" aria-hidden="true" />
          {clinic.city}
        </span>
      </div>
    </footer>
  )
}

export default Footer
