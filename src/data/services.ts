/** Serviços da CLÍNICA — não de um dentista específico. Nenhum item aqui é
 *  rotulado com nome de profissional, e o visitante se auto-seleciona pelo
 *  bloco que interessa a ele.
 *
 *  PENDENTE DE CONFIRMAÇÃO: esta lista é o escopo típico das áreas de atuação
 *  do Dr. Thomás e do Dr. Gabriel. Antes de ir pro ar, confirmar item a item
 *  com os dois e remover o que a clínica não oferecer. */
export interface ServiceBlock {
  id: string;
  index: string;
  title: string;
  support: string;
  items: string[];
}

export const serviceBlocks: ServiceBlock[] = [
  {
    id: "clinica-restauradora",
    index: "01",
    title: "Odontologia clínica e restauradora",
    support: "A base de um sorriso saudável",
    items: [
      "Avaliação e plano de tratamento",
      "Limpeza e profilaxia",
      "Aplicação de flúor e selante",
      "Tratamento de cárie",
      "Restauração em resina",
      "Troca de restaurações antigas",
      "Reconstrução de dente fraturado",
      "Tratamento de sensibilidade",
      "Clareamento dental",
      "Facetas em resina",
      "Placa de bruxismo",
      "Extração simples",
      "Urgência odontológica",
    ],
  },
  {
    id: "periodontia",
    index: "02",
    title: "Periodontia e saúde gengival",
    support: "Gengiva saudável, sorriso bem desenhado",
    items: [
      "Raspagem supragengival",
      "Raspagem e alisamento radicular",
      "Tratamento de gengivite",
      "Tratamento de periodontite",
      "Manutenção periodontal",
      "Gengivoplastia",
      "Aumento de coroa clínica",
      "Tratamento de sorriso gengival",
      "Recobrimento de retração gengival",
    ],
  },
  {
    id: "harmonizacao",
    index: "03",
    title: "Estética facial e harmonização orofacial",
    support: "Equilíbrio e proporção do rosto",
    items: [
      "Toxina botulínica (rugas de expressão)",
      "Botox para bruxismo",
      "Contorno de masseter",
      "Sorriso gengival com toxina",
      "Preenchimento labial",
      "Preenchimento de olheiras",
      "Preenchimento de malar",
      "Projeção de mento e contorno mandibular",
      "Rinomodelação",
      "Bioestimuladores de colágeno",
      "Skinbooster",
      "Planejamento facial (análise de proporção e simetria)",
    ],
  },
];
