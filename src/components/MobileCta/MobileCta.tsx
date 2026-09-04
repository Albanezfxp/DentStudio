import { doctors } from '../../data/doctors'
import { WhatsAppMark } from '../Icon/Icon'
import './MobileCta.css'

/** Barra fixa de conversão no mobile. São dois números, então um botão
 *  flutuante único seria ambíguo: a barra é dividida ao meio e cada lado
 *  carrega o nome do dentista, para o visitante nunca abrir a conversa errada. */
function MobileCta() {
  return (
    <div className="mcta">
      {doctors.map((doctor) => (
        <a
          key={doctor.id}
          className="mcta__half"
          href={doctor.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppMark />
          {doctor.shortName}
        </a>
      ))}
    </div>
  )
}

export default MobileCta
