export const categories = [
  { slug: "soins-visage", label: "Soins visage" },
  { slug: "complements", label: "Compléments alimentaires" },
  { slug: "bebe", label: "Hygiène bébé" },
  { slug: "corps", label: "Hygiène corporelle" },
]

export const categoryLabel = (slug) =>
  categories.find((c) => c.slug === slug)?.label ?? slug

export const products = [
  {
    id: "serum-vitamine-c",
    name: "Sérum éclat à la vitamine C",
    category: "soins-visage",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=70&auto=format&fit=crop",
    description:
      "Sérum concentré à la vitamine C pour un teint éclatant et uniforme. Atténue les taches et stimule la production de collagène. Convient à tous les types de peau.",
  },
  {
    id: "creme-hydratante",
    name: "Crème hydratante visage",
    category: "soins-visage",
    price: 9800,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=70&auto=format&fit=crop",
    description:
      "Crème légère à l'acide hyaluronique qui hydrate en profondeur 24h. Peau souple, confortable et repulpée dès la première application.",
  },
  {
    id: "gel-nettoyant",
    name: "Gel nettoyant purifiant",
    category: "soins-visage",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=70&auto=format&fit=crop",
    description:
      "Gel doux qui nettoie les impuretés et resserre les pores sans dessécher. Idéal pour les peaux mixtes à grasses, matifie en douceur.",
  },
  {
    id: "vitamine-c-fizz",
    name: "Vitamine C pétillante",
    category: "complements",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=70&auto=format&fit=crop",
    description:
      "Comprimés effervescents à la vitamine C pour renforcer les défenses naturelles et lutter contre la fatigue. Goût orange agréable, 20 comprimés.",
  },
  {
    id: "multivitamines",
    name: "Multivitamines & minéraux",
    category: "complements",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70&auto=format&fit=crop",
    description:
      "Formule complète en vitamines B, C, D et zinc pour un apport quotidien optimal. Soutient l'énergie, l'immunité et le moral.",
  },
  {
    id: "omega-3",
    name: "Oméga 3 capsules",
    category: "complements",
    price: 11000,
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=70&auto=format&fit=crop",
    description:
      "Acides gras oméga-3 (EPA et DHA) d'origine marine pour le cœur, la vision et le cerveau. 60 capsules, sans goût de poisson.",
  },
  {
    id: "lait-toilette-bebe",
    name: "Lait de toilette bébé",
    category: "bebe",
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&q=70&auto=format&fit=crop",
    description:
      "Lait nettoyant doux sans rinçage pour la peau délicate de bébé. Nourrit, protège et respecte le pH physiologique dès la naissance.",
  },
  {
    id: "gel-lavant-bebe",
    name: "Gel lavant doux bébé",
    category: "bebe",
    price: 6200,
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&q=70&auto=format&fit=crop",
    description:
      "Gel lavant corps et cheveux au pH neutre, sans savon ni parfum irritant. Douceur et sécurité pour le bain quotidien de bébé.",
  },
  {
    id: "liniment-bebe",
    name: "Liniment oléo-calcaire",
    category: "bebe",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=70&auto=format&fit=crop",
    description:
      "Soin d'origine naturelle pour nettoyer le siège de bébé au quotidien. Nettoie, protège et apaise les fesses délicates.",
  },
  {
    id: "savon-nourrissant",
    name: "Savon artisanal nourrissant",
    category: "corps",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1560032779-0a8809186efd?w=600&q=70&auto=format&fit=crop",
    description:
      "Savon doux enrichi au karité et aux huiles végétales. Nettoie sans agresser et laisse la peau douce et parfumée.",
  },
  {
    id: "gel-douche",
    name: "Gel douche hydratant",
    category: "corps",
    price: 5800,
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=70&auto=format&fit=crop",
    description:
      "Gel douche à la glycérine et à l'aloe vera qui nettoie en douceur tout en préservant l'hydratation de la peau. Format 250 ml.",
  },
  {
    id: "deodorant-naturel",
    name: "Déodorant naturel",
    category: "corps",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&q=70&auto=format&fit=crop",
    description:
      "Déodorant sans aluminium à base de bicarbonate et d'huiles essentielles. Protection efficace jusqu'à 24h, respectueux de la peau.",
  },
]
