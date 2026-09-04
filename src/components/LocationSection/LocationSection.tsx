import { clinic, mapsEmbed, mapsLink } from '../../data/clinic'
import { ArrowRight, PinMark } from '../Icon/Icon'
import './LocationSection.css'

function LocationSection() {
  return (
    <section id="localizacao" className="loc section">
      <div className="shell loc__inner">
        <div className="loc__plate">
          <span className="label reveal">Onde estamos</span>

          <h2 className="reveal" style={{ '--reveal-step': 1 } as React.CSSProperties}>
            {clinic.place}
          </h2>

          <address
            className="loc__address reveal"
            style={{ '--reveal-step': 2 } as React.CSSProperties}
          >
            <span>{clinic.street}</span>
            <span>
              {clinic.city} · {clinic.zip}
            </span>
          </address>

          <a
            className="btn loc__cta reveal"
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            style={{ '--reveal-step': 3 } as React.CSSProperties}
          >
            <PinMark />
            Traçar rota
            <ArrowRight className="arrow" />
          </a>
        </div>

        <div className="loc__map reveal">
          <iframe
            title={`Mapa da ${clinic.name} no ${clinic.place}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default LocationSection
