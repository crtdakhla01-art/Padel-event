import homeVisual from '../assets/home.jpg'
import headerVisual from '../assets/header.jpg'
import footerVisual from '../assets/footer.jpg'
import styleVisual from '../assets/global-kit-styles.jpg'

export const brand = {
  name: 'Padel Maroc Pro',
  baseline: 'Fédération et écosystème premium du padel au Maroc',
}

export const navItems = [
  { label: 'Accueil', path: '/' },
  {
    label: 'Le Padel au Maroc',
    path: '/clubs',
    children: [{ label: 'Clubs de Padel au Maroc', path: '/clubs-de-padel' }],
  },
  {
    label: 'Événements',
    path: '/evenements',
    children: [
      { label: 'Calendrier des compétitions', path: '/calendrier' },
    ],
  },
  { label: 'Partenaires et sponsors', path: '/partenaires' },
  { label: 'Contact', path: '/contact' },
]

export const heroSlides = [
  {
    image: homeVisual,
    eyebrow: 'Saison 2026',
    title: 'Le Padel Marocain en Mouvement',
    text: 'Tournois nationaux, académies et clubs premium réunis dans une même énergie sportive.',
  },
]

export const stats = [
  { label: 'Clubs actifs', value: '120+' },
  { label: 'Tournois par an', value: '48' },
  { label: 'Joueurs licenciés', value: '7 500+' },
  { label: 'Villes couvertes', value: '19' },
]

export const clubs = [
  {
    name: 'Atlas Padel Club — Marrakech',
    city: 'Marrakech',
    image: styleVisual,
    description:
      'Complexe de référence avec courts panoramiques, coaching de performance et événements corporate.',
  },
  {
    name: 'Casablanca Padel Hub',
    city: 'Casablanca',
    image: homeVisual,
    description:
      'Expérience premium indoor-outdoor, académie junior et ligue du week-end.',
  },
  {
    name: 'Rabat Élite Padel',
    city: 'Rabat',
    image: footerVisual,
    description:
      'Club orienté compétition avec encadrement technique et analyse vidéo des matchs.',
  },
]

export const events = [
  {
    title: 'Morocco Open 1000',
    date: '14 juin 2026',
    location: 'Rabat Arena',
    image: homeVisual,
    level: 'Élite',
  },
  {
    title: 'Casablanca Night Series',
    date: '29 juin 2026',
    location: 'Casablanca Padel Hub',
    image: headerVisual,
    level: 'Pro-Am',
  },
  {
    title: 'Agadir Beach Masters',
    date: '12 juillet 2026',
    location: 'Agadir Coast Club',
    image: styleVisual,
    level: 'National',
  },
]

export const timeline = [
  {
    stage: 'Phase qualificative',
    date: 'Mai 2026',
    body: 'Seize clubs régionaux se disputent les places pour le tableau final.',
  },
  {
    stage: 'Tableau principal',
    date: 'Juin 2026',
    body: 'Les meilleures paires nationales et les invités internationaux s\'affrontent dans trois villes.',
  },
  {
    stage: 'Finales nationales',
    date: 'Juillet 2026',
    body: 'Clôture de saison, animations en fan zone et remise des distinctions.',
  },
]

export const calendar = [
  {
    month: 'Mai 2026',
    competitions: [
      'Rookie Cup Fès — 3 mai',
      'Women Impact Tour Tanger — 11 mai',
      'Interclubs Région Sud — 24 mai',
    ],
  },
  {
    month: 'Juin 2026',
    competitions: [
      'Morocco Open 1000 — 14 juin',
      'Casablanca Night Series — 29 juin',
    ],
  },
  {
    month: 'Juillet 2026',
    competitions: [
      'Agadir Beach Masters — 12 juillet',
      'Finales nationales — 27 juillet',
    ],
  },
]

export const sponsors = [
  'Royal Air Maroc',
  'OCP Sport Initiative',
  'Décathlon Maroc',
]

export const contactInfo = {
  address: 'Kassam 1 - Dakhla - Maroc',
  phone: '+212 660 544 904',
  email: 'contact@padelmarocpro.ma',
}

export const visualAssets = {
  headerVisual,
  footerVisual,
  homeVisual,
  styleVisual,
}
