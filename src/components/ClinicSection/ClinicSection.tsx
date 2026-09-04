import logo from "../../assets/clinic_logo/whiteTransparent.png";
import { clinic } from "../../data/clinic";
import { ArrowRight } from "../Icon/Icon";
import "./ClinicSection.css";

/* A foto real do consultório ainda não chegou. Quando chegar, é só importar
   aqui e trocar <div className="clinic__mark"> pelo retrato da recepção —
   o resto do layout já está dimensionado para receber uma imagem. */

/** Seção deliberadamente secundária: a clínica é o endereço e o contexto,
 *  não o protagonista da página. */
function ClinicSection() {
  return (
    <section
      id="clinica"
      className="clinic section section--tight section--raised"
    >
      <div className="shell clinic__inner">
        <div className="clinic__mark reveal">
          <img src={logo} alt="DentStudio" loading="lazy" />
          <span className="clinic__mark-tag">
            <i className="sparkle" aria-hidden="true" />
            {clinic.discipline}
          </span>
        </div>

        <div className="clinic__body">
          <span className="label reveal">A clínica</span>

          <h2
            className="reveal"
            style={{ "--reveal-step": 1 } as React.CSSProperties}
          >
            {clinic.discipline}
          </h2>

          <p
            className="clinic__tagline reveal"
            style={{ "--reveal-step": 2 } as React.CSSProperties}
          >
            “{clinic.tagline}.”
          </p>

          <p
            className="clinic__text reveal"
            style={{ "--reveal-step": 3 } as React.CSSProperties}
          >
            A DentStudio fica no {clinic.place}, em {clinic.city}. É onde o Dr.
            Thomás Silva Vilas Boas e o Dr. Gabriel Medeiros atendem lado a
            lado, reunindo odontologia clínica, periodontia e harmonização
            orofacial no mesmo endereço.
          </p>

          <a
            className="btn-quiet clinic__link reveal"
            href="#localizacao"
            style={{ "--reveal-step": 4 } as React.CSSProperties}
          >
            Ver a localização
            <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClinicSection;
