import { doctors } from '../../data/doctors'
import { ArrowRight, WhatsAppMark } from '../Icon/Icon'
import './ContactSection.css'

/** Segundo pico da página: o mesmo par do hero, agora como ação.
 *  Cada placa abre a conversa do dentista correspondente. */
function ContactSection() {
  return (
    <section id="contato" className="cta section section--abyss">
      <div className="shell">
        <div className="cta__head">
          <span className="label reveal">Contato</span>
          <h2 className="reveal" style={{ '--reveal-step': 1 } as React.CSSProperties}>
            Fale direto com
            <br />o seu dentista.
          </h2>
          <p className="cta__lead reveal" style={{ '--reveal-step': 2 } as React.CSSProperties}>
            Cada especialista responde as próprias mensagens. Escolha com quem você quer
            falar e a conversa abre no WhatsApp dele.
          </p>
        </div>

        <div className="cta__pair">
          {doctors.map((doctor, i) => (
            <a
              key={doctor.id}
              className="cta__plate reveal"
              href={doctor.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{ '--reveal-step': 3 + i } as React.CSSProperties}
            >
              <span className="cta__num" aria-hidden="true">
                {doctor.index}
              </span>

              <span className="cta__name">{doctor.name}</span>
              <span className="cta__focus">{doctor.focus}</span>

              <span className="cta__go">
                <WhatsAppMark />
                <span className="cta__phone">{doctor.whatsappLabel}</span>
                <ArrowRight className="arrow cta__arrow" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
