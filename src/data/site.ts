export const business = {
  name: 'Ravensberger Backstube',
  tagline: 'Wuppertal wacht auf. Wir backen schon.',
  street: 'Ravensberger Str. 72',
  zip: '42117',
  city: 'Wuppertal',
  rating: '4,9',
  ratingCount: null as number | null,
  phone: null as string | null,
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Ravensberger+Str.+72,+42117+Wuppertal',
  mapsEmbed:
    'https://www.google.com/maps?q=Ravensberger+Str.+72,+42117+Wuppertal&output=embed',
  mapsPlace: 'https://www.google.com/maps/search/?api=1&query=Ravensberger+Backstube+Wuppertal',
};

export const hours = [
  { day: 'Montag', open: '05:00', close: '17:00', today: false },
  { day: 'Dienstag', open: '05:00', close: '17:00', today: false },
  { day: 'Mittwoch', open: '05:00', close: '17:00', today: false },
  { day: 'Donnerstag', open: '05:00', close: '17:00', today: false },
  { day: 'Freitag', open: '05:00', close: '17:00', today: false },
  { day: 'Samstag', open: '06:00', close: '15:00', today: false },
  { day: 'Sonntag', open: '08:00', close: '15:00', today: false },
];

export const breakfastMenu = [
  {
    title: 'Morgenglanz',
    subtitle: 'Kleines Frühstück',
    price: '6,90 €',
    items: [
      '2 Brötchen',
      'Gurke, Tomate, Salat',
      '1 Butter',
      '1 Käse (Gouda)',
      '1 Aufstrich nach Wahl',
      '1 Kochschinken oder Hähnchenbrust',
      '1 Salami oder Camembert',
      '1 kleiner Kaffee crema oder Filterkaffee',
    ],
  },
  {
    title: 'Wohlfühlstart',
    subtitle: 'Großes Frühstück',
    price: '12,90 €',
    priceNote: '1 Person',
    secondPrice: '20,50 €',
    secondPriceNote: 'Für 2 Personen',
    items: [
      '2 Brötchen',
      '1 Bauernbrötchen oder Croissant',
      '1 gekochtes Ei',
      'Gurke, Tomate, Salat',
      '1 Butter',
      '1 Käse (Gouda)',
      '1 Hähnchenbrust',
      '1 Salami oder Camembert',
      '1 Marmelade',
      '1 Aufstrich nach Wahl',
      '1 Kochschinken oder Frischkäse',
      '1 großer Kaffee oder 2 kleine Kaffee',
      '1 Orangensaft oder Apfelsaft',
    ],
  },
  {
    title: 'Mediterrane Morgenfreude',
    subtitle: 'Herzhafter Start',
    price: '6,90 €',
    extraPrice: '8,50 €',
    extraLabel: 'Mit extra Sucuk und Käse',
    items: ['1 Menemen', '2 Brötchen', '1 kleiner türkischer Schwarztee'],
  },
  {
    title: 'Genussmoment',
    subtitle: 'Kaffee & Kuchen',
    price: '5,70 €',
    items: ['1 Stück Torte oder ein Stück Kuchen nach Wahl', '1 großer Filterkaffee'],
  },
  {
    title: 'Teilchenfreude',
    subtitle: 'Süße Pause',
    price: '4,20 €',
    items: ['1 Teilchen nach Wahl', '1 kleiner Kaffee crema oder kleiner Filterkaffee'],
  },
  {
    title: 'Back-set für die Minis',
    subtitle: 'Für kleine Genießer',
    price: '3,50 €',
    items: ['1 Lauge oder Croissant', '1 Donut oder Muffin', '1 Capri-Sun'],
  },
] as const;

export const categories = [
  {
    id: 'broetchen',
    name: 'Frische Brötchen',
    blurb: 'Jeden Morgen frisch gebacken – knusprig außen, weich innen.',
    image:
      'https://images.pexels.com/photos/37060185/pexels-photo-37060185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'brot',
    name: 'Brot',
    blurb: 'Handgemachte Brote aus lange geführten Teigen.',
    image:
      'https://images.pexels.com/photos/5567093/pexels-photo-5567093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'suesses',
    name: 'Süßes',
    blurb: 'Croissants, Teilchen und süße Versuchungen zum Kaffee.',
    image:
      'https://images.pexels.com/photos/13439698/pexels-photo-13439698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    blurb: 'Herzhafte belegte Brötchen und Sandwichs für unterwegs.',
    image:
      'https://images.pexels.com/photos/29516125/pexels-photo-29516125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'kaffee',
    name: 'Kaffee',
    blurb: 'Frisch gebrühter Kaffee und Kaffeespezialitäten.',
    image:
      'https://images.pexels.com/photos/28496565/pexels-photo-28496565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
