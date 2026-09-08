// Versões re-comprimidas para a web (mesma resolução, JPEG q80): juntas caem
// de 1,71 MB para 182 KB, o que pesa porque boa parte do público chega pelo
// celular vindo de link. Os arquivos originais seguem intactos em
// ../assets/dr's/ e são a fonte para regerar estas.
import thomasPortrait from "../assets/dr's/optimized/thito_clinic.jpg";
import gabrielPortrait from "../assets/dr's/optimized/gm_clinic.jpg";

/** Uma linha da ficha do dentista. Só credenciais e formação — serviço
 *  nenhum entra aqui, porque serviço é da clínica. */
export interface DoctorFact {
  /** Opcional de propósito: nível de formação não se rótula. Os dois ainda
   *  estão se especializando, e no Brasil só quem tem a especialidade
   *  registrada no CRO pode anunciar "especialista"/"especialização". Sem
   *  rótulo, a linha apenas declara a formação, sem reivindicar título. */
  label?: string;
  value: string;
}

export interface Doctor {
  id: string;
  /** Numeração de índice usada no hero e no CTA final. */
  index: string;
  name: string;
  /** "Dr. Thomás" — para botões e rótulos curtos. */
  shortName: string;
  /** Sobrenome em caixa alta, usado como etiqueta vertical do retrato. */
  tag: string;
  role: string;
  /** Área de atuação — o que faz o visitante se identificar com um dos dois.
   *  É formação, nunca lista de serviço: serviço é da clínica. */
  focus: string;
  facts: DoctorFact[];
  whatsapp: string;
  whatsappLabel: string;
  portrait: string;
  portraitAlt: string;
  /** object-position do retrato — cada foto enquadra o rosto de um jeito. */
  portraitPos: string;
  /** Zoom do retrato — a foto do Dr. Gabriel é mais aberta que a do Dr. Thomás. */
  portraitZoom: number;
}

export const doctors: Doctor[] = [
  {
    id: "dr-thomas",
    index: "01",
    name: "Dr. Thomás Silva Vilas Boas",
    shortName: "Dr. Thomás",
    tag: "Thomás",
    role: "Cirurgião-Dentista",
    focus: "Dentística · Periodontia · Estética Avançada",
    facts: [
      { label: "Registro", value: "CRO-PB 12263" },
      {
        label: "Pós-graduação",
        value: "Dentística, Periodontia e Estética Avançada",
      },
      { value: "Imersão em Gengivoplastia" },
    ],
    whatsapp: "https://wa.me/558399931455",
    whatsappLabel: "(83) 99993-1455",
    portrait: thomasPortrait,
    portraitAlt: "Dr. Thomás Silva Vilas Boas na recepção da DentStudio",
    portraitPos: "center 34%",
    portraitZoom: 1,
  },
  {
    id: "dr-gabriel",
    index: "02",
    name: "Dr. Gabriel Medeiros",
    shortName: "Dr. Gabriel",
    tag: "Gabriel",
    role: "Cirurgião-Dentista",
    focus: "Harmonização Orofacial",
    facts: [
      { label: "Registro", value: "CRO-PB 12353" },
      { value: "Harmonização Orofacial" },
    ],
    whatsapp: "https://wa.me/5583993897637",
    whatsappLabel: "(83) 99389-7637",
    portrait: gabrielPortrait,
    portraitAlt: "Dr. Gabriel Medeiros na recepção da DentStudio",
    portraitPos: "center 14%",
    portraitZoom: 1.34,
  },
];
