import homeVisual from '../assets/home.jpg'
import headerVisual from '../assets/header.jpg'
import footerVisual from '../assets/footer.jpg'
import styleVisual from '../assets/global-kit-styles.jpg'

export const brand = {
  name: 'Coupe Intercontinentale de Padel',
  baseline: 'Dakhla 2026 - Carrefour du Sport et des Affaires',
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
    eyebrow: '3eme edition',
    title: 'Coupe Intercontinentale de Padel - Dakhla 2026',
    text: 'Un evenement sportif international qui rassemble sport, business, tourisme et networking.',
  },
]

export const stats = [
  { label: 'Nations participantes', value: '16' },
  { label: 'Continents representes', value: '5' },
  { label: 'Equipes internationales', value: '32' },
  { label: 'Supporteurs internationaux', value: '+160' },
]

export const clubs = [
  {
    name: 'Dakhla Padel Club',
    courts: '8 terrains',
    city: 'Marrakech',
    image: styleVisual,
    description:
      'Infrastructure premium, academie et programmation annuelle de tournois regionaux.',
  },
  {
    name: 'Casablanca Padel Hub',
    courts: '10 terrains',
    city: 'Casablanca',
    image: homeVisual,
    description:
      'Complexe indoor-outdoor avec ecole juniors et activations business & networking.',
  },
  {
    name: 'Rabat Elite Padel',
    courts: '6 terrains',
    city: 'Rabat',
    image: footerVisual,
    description:
      'Club oriente competition, sessions de performance et circuit national amateur.',
  },
]

export const events = [
  {
    title: 'Coupe Intercontinentale de Padel - Dakhla 2026',
    date: '22 - 25 octobre 2026',
    location: 'Dakhla',
    image: homeVisual,
    level: 'International',
  },
  {
    title: 'Padel Business Cup',
    date: 'Novembre 2026',
    location: 'Rabat',
    image: headerVisual,
    level: 'Pro-Am',
  },
  {
    title: 'Open Marrakech',
    date: 'Mars 2026',
    location: 'Marrakech',
    image: styleVisual,
    level: 'National',
  },
]

export const timeline = [
  {
    stage: 'Premiere edition',
    date: '2019',
    body: 'Lancement de la competition avec un format pionnier reliant sport et attractivite territoriale.',
  },
  {
    stage: 'Retour post-pandemie',
    date: '2024',
    body: 'Relance de l\'evenement avec un positionnement plus international.',
  },
  {
    stage: 'Nouvelle ambition',
    date: '2026',
    body: 'Edition Dakhla orientee sport, business, tourisme et networking.',
  },
]

export const calendar = [
  {
    month: 'Janvier 2026',
    competitions: [
      'Tournoi Casablanca',
    ],
  },
  {
    month: 'Mars 2026',
    competitions: [
      'Open Marrakech',
    ],
  },
  {
    month: 'Juin 2026',
    competitions: [
      'Coupe Intercontinentale Dakhla',
    ],
  },
  {
    month: 'Septembre 2026',
    competitions: [
      'Masters Rabat',
    ],
  },
  {
    month: 'Novembre 2026',
    competitions: [
      'Padel Business Cup',
    ],
  },
]

export const sponsors = [
  'Automobile',
  'Banque',
  'Energie',
  'Institutionnels',
  'Telecom',
  'Immobilier',
  'Tourisme',
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
