export const SITE = {
  name: "Parapharmacie",
  tagline: "Votre santé et votre bien-être au quotidien",
  phone: "237XXXXXXXXX",
  address: "Rue 1234, Akwa — Douala, Cameroun",
  hours: "Lun – Sam : 8h00 – 19h30",
  hoursWeekend: "Dimanche : 8h00 – 13h00",
}

export function whatsappLink(message) {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`
}
