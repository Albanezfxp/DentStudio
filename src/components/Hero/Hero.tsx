import { clinic } from "../../data/clinic";
import { doctors } from "../../data/doctors";
import { ArrowRight } from "../Icon/Icon";
import "./Hero.css";

const BASE_FACTS = [clinic.discipline, clinic.place, clinic.city];

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="shell hero__inner">
        <div className="hero__head">
          <span className="label reveal">
            {clinic.name}
            <i className="sparkle" aria-hidden="true" />
            {clinic.city}
          </span>

          <h1
            className="reveal"
            style={{ "--reveal-step": 1 } as React.CSSProperties}
          >
            Seu sorriso no
            <br />
            mais alto <em>nível</em>.
          </h1>

          <p
            className="hero__lead reveal"
            style={{ "--reveal-step": 2 } as React.CSSProperties}
          >
            Dr. Thomás Silva Vilas Boas e Dr. Gabriel Medeiros são os dois
            cirurgiões-dentistas da DentStudio, clínica de odontologia integrada
            e estética em João Pessoa.
          </p>
        </div>

        {/* O par. Este é o trabalho da página: fazer o visitante escolher um dos dois. */}
        <div className="hero__pair">
          {doctors.map((doctor) => (
            <a
              key={doctor.id}
              className="hero__fig"
              data-doctor={doctor.id}
              href={`#${doctor.id}`}
              aria-label={`Ver o perfil do ${doctor.shortName}`}
            >
              <div className="portrait hero__portrait">
                <img
                  className="portrait__img"
                  src={doctor.portrait}
                  alt={doctor.portraitAlt}
                  style={
                    {
                      "--portrait-pos": doctor.portraitPos,
                      "--portrait-zoom": doctor.portraitZoom,
                    } as React.CSSProperties
                  }
                />
              </div>
              <span className="hero__fig-tag">
                <span className="hero__fig-num">{doctor.index}</span>
                {doctor.shortName}
              </span>
            </a>
          ))}
        </div>

        <ul className="hero__index">
          {doctors.map((doctor, i) => (
            <li key={doctor.id}>
              <a
                className="hero__row reveal"
                data-doctor={doctor.id}
                href={`#${doctor.id}`}
                style={{ "--reveal-step": 3 + i } as React.CSSProperties}
              >
                <span className="hero__row-num">{doctor.index}</span>
                <span className="hero__row-body">
                  <span className="hero__row-name">{doctor.name}</span>
                  <span className="hero__row-focus">{doctor.focus}</span>
                </span>
                <ArrowRight className="arrow hero__row-arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__base">
        <div className="shell hero__base-inner">
          {BASE_FACTS.map((fact, i) => (
            <span className="hero__base-item" key={fact}>
              {i > 0 && <i className="sparkle" aria-hidden="true" />}
              {fact}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
