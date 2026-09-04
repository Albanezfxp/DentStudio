import type { Doctor } from '../../data/doctors'
import { ArrowRight, WhatsAppMark } from '../Icon/Icon'
import './DoctorProfile.css'

interface DoctorProfileProps {
  doctor: Doctor
  /** Inverte o lado do retrato — a alternância é o que dá ritmo à rolagem. */
  reversed?: boolean
}

/** Perfil individual: credenciais e formação apenas. Serviço nenhum aparece
 *  aqui, porque serviço é da clínica — mas o CTA é o WhatsApp DESTE dentista. */
function DoctorProfile({ doctor, reversed = false }: DoctorProfileProps) {
  return (
    <section
      id={doctor.id}
      className={`doc section${reversed ? ' doc--rev section--raised' : ''}`}
    >
      <div className="shell doc__inner">
        <div className="doc__figure reveal">
          <div className="portrait doc__portrait">
            <img
              className="portrait__img"
              src={doctor.portrait}
              alt={doctor.portraitAlt}
              loading="lazy"
              style={
                {
                  '--portrait-pos': doctor.portraitPos,
                  '--portrait-zoom': doctor.portraitZoom,
                } as React.CSSProperties
              }
            />
          </div>
        </div>

        <div className="doc__body">
          <span className="label reveal">{doctor.role}</span>

          <h2 className="doc__name reveal" style={{ '--reveal-step': 1 } as React.CSSProperties}>
            {doctor.name}
          </h2>

          {/* A área de atuação não se repete aqui: a ficha abaixo já a declara
              na forma formal, e o `focus` vive no hero e no CTA final. */}
          <dl className="doc__facts reveal" style={{ '--reveal-step': 2 } as React.CSSProperties}>
            {doctor.facts.map((fact) => (
              <div className="doc__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="doc__action reveal" style={{ '--reveal-step': 3 } as React.CSSProperties}>
            <a className="btn btn--lg" href={doctor.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppMark />
              Falar com o {doctor.shortName}
              <ArrowRight className="arrow" />
            </a>
            <span className="doc__phone">{doctor.whatsappLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile
