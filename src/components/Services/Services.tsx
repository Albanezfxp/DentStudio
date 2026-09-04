import { serviceBlocks } from "../../data/services";
import "./Services.css";

/** Uma seção só, da clínica. Nenhum item é rotulado com nome de dentista —
 *  o visitante se auto-seleciona pelo bloco que interessa a ele. */
function Services() {
  return (
    <section id="servicos" className="svc">
      <div className="shell svc__head">
        <span className="label reveal">Serviços da clínica</span>
        <h2
          className="reveal"
          style={{ "--reveal-step": 1 } as React.CSSProperties}
        >
          Três frentes de cuidado,
          <br />
          um só endereço.
        </h2>
        <p
          className="svc__lead reveal"
          style={{ "--reveal-step": 2 } as React.CSSProperties}
        >
          Os procedimentos que entregamos na DentStudio.
        </p>
      </div>

      {serviceBlocks.map((block, i) => (
        <article
          key={block.id}
          className={`svc__block${i % 2 === 1 ? " svc__block--rev" : ""}`}
        >
          <div className="shell svc__block-inner">
            <header className="svc__mark reveal">
              <span className="svc__num" aria-hidden="true">
                {block.index}
              </span>
              <h3 className="svc__title">{block.title}</h3>
              <p className="svc__support">{block.support}</p>
            </header>

            <ul
              className="svc__list reveal"
              style={{ "--reveal-step": 1 } as React.CSSProperties}
            >
              {block.items.map((item) => (
                <li className="svc__item" key={item}>
                  <span>{item}</span>
                  <i className="sparkle svc__item-mark" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Services;
