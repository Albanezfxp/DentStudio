/** Verdade única sobre a clínica. Nada aqui é estimado ou inventado. */
export const clinic = {
  name: "DentStudio",
  discipline: "Odontologia integrada e estética",
  tagline: "Seu sorriso no mais alto nível",
  place: "Metropolitan Shopping Empresarial",
  street: "Av. Júlia Freire, 1200 - Expedicionários",
  city: "João Pessoa - PB",
  zip: "58041-000",
} as const;

export const clinicAddress = `${clinic.street}, ${clinic.city}, ${clinic.zip}`;

const mapsQuery = `${clinic.place}, ${clinicAddress}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&z=16&output=embed`;
