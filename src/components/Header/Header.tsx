import { useEffect, useState } from 'react'
import logo from '../../assets/clinic_logo/whiteTransparent.png'
import { doctors } from '../../data/doctors'
import { ArrowRight, MenuMark, WhatsAppMark } from '../Icon/Icon'
import './Header.css'

const NAV = [
  { href: '#dentistas', label: 'Dentistas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clinica', label: 'A clínica' },
  { href: '#localizacao', label: 'Localização' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava a rolagem do fundo enquanto o painel do menu está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`head${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell head__bar">
        <a href="#inicio" className="head__brand" aria-label="DentStudio — início">
          <img src={logo} alt="DentStudio" />
        </a>

        <nav className="head__nav" aria-label="Navegação principal">
          <ul>
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn head__cta" href="#contato">
          <WhatsAppMark />
          Agendar
        </a>

        <button
          type="button"
          className="head__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuMark open={open} />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`head__panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav className="shell head__panel-inner" aria-label="Navegação">
          <ul className="head__panel-nav">
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="head__panel-foot">
            <span className="label label--muted">Falar no WhatsApp</span>
            {doctors.map((doctor) => (
              <a
                key={doctor.id}
                className="head__panel-link"
                href={doctor.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <span>{doctor.shortName}</span>
                <ArrowRight className="arrow" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
