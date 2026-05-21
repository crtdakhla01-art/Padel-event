import homeVisual from '../assets/home.jpg'
import headerVisual from '../assets/header.jpg'
import footerVisual from '../assets/footer.jpg'
import styleVisual from '../assets/global-kit-styles.jpg'
import eventImage1 from '../assets/images/EVENTS_PAGE/img_1.png'
import eventImage2 from '../assets/images/EVENTS_PAGE/img_10.png'
import eventImage3 from '../assets/images/EVENTS_PAGE/img_12.png'
import eventImage4 from '../assets/images/EVENTS_PAGE/img_13.png'
import eventImage5 from '../assets/images/EVENTS_PAGE/img_19.png'
import calendarImage1 from '../assets/images/CALENDAR_PAGE/img_14.png'
import calendarImage2 from '../assets/images/CALENDAR_PAGE/img_20.png'
import calendarImage3 from '../assets/images/CALENDAR_PAGE/img_8.png'
import partnerImage1 from '../assets/images/PARTNERS_PAGE/img_11.png'
import partnerImage2 from '../assets/images/PARTNERS_PAGE/img_15.png'
import partnerImage3 from '../assets/images/PARTNERS_PAGE/img_18.png'

export const featuredTournaments = [
  {
    title: 'Morocco Open 1000',
    city: 'Rabat',
    date: '14 Juin 2026',
    category: 'Elite',
    image: eventImage1,
    href: '/evenements',
    tone: 'dark',
    summary: 'Le rendez-vous premium de la saison avec tableau international, sessions de nuit et fan zone immersive.',
  },
  {
    title: 'Casablanca Night Series',
    city: 'Casablanca',
    date: '29 Juin 2026',
    category: 'Pro-Am',
    image: eventImage2,
    href: '/calendrier',
    tone: 'light',
    summary: 'Format urbain sous les projecteurs avec musique live, hospitality lounge et sessions exhibition.',
  },
  {
    title: 'Agadir Beach Masters',
    city: 'Agadir',
    date: '12 Juillet 2026',
    category: 'National',
    image: eventImage3,
    href: '/evenements',
    tone: 'light',
    summary: 'Padel, coastline atmosphere et storytelling media dans un week-end destine aux amateurs de grands decors.',
  },
  {
    title: 'Atlas Finals Weekend',
    city: 'Marrakech',
    date: '27 Juillet 2026',
    category: 'Finales',
    image: eventImage4,
    href: '/calendrier',
    tone: 'dark',
    summary: 'Finales federales, ceremonies, partenaires et production media premium au coeur du circuit national.',
  },
]

export const liveExperience = {
  image: eventImage5,
  eyebrow: 'Live event experience',
  title: 'Au coeur du padel marocain, la tension monte avant chaque point.',
  body: 'Chaque tournoi devient une experience complete: public, lumiere, contenu media, clubs hotes et narration federale reunis dans une meme energie.',
  stats: [
    { label: 'Spectateurs sur site', value: 18500, suffix: '+' },
    { label: 'Heures de diffusion', value: 64, suffix: 'h' },
    { label: 'Clubs engages', value: 120, suffix: '+' },
  ],
}

export const topClubs = [
  {
    name: 'Atlas Padel Club',
    city: 'Marrakech',
    courts: '8 courts',
    vibe: 'Panoramic performance hub',
    image: styleVisual,
    href: '/clubs-de-padel',
  },
  {
    name: 'Casablanca Padel Hub',
    city: 'Casablanca',
    courts: '10 courts',
    vibe: 'Urban night sessions',
    image: homeVisual,
    href: '/clubs-de-padel',
  },
  {
    name: 'Rabat Elite Padel',
    city: 'Rabat',
    courts: '6 courts',
    vibe: 'Competition-first atmosphere',
    image: footerVisual,
    href: '/clubs-de-padel',
  },
]

export const galleryMoments = [
  { id: 'gallery-1', image: calendarImage1, height: 'tall' },
  { id: 'gallery-2', image: partnerImage1, height: 'medium' },
  { id: 'gallery-3', image: calendarImage2, height: 'wide' },
  { id: 'gallery-4', image: headerVisual, height: 'medium' },
  { id: 'gallery-5', image: calendarImage3, height: 'tall' },
  { id: 'gallery-6', image: partnerImage2, height: 'medium' },
  { id: 'gallery-7', image: partnerImage3, height: 'medium' },
]

export const communitySpotlight = {
  feature: {
    image: eventImage3,
    label: 'Community spotlight',
    title: 'Une nouvelle generation de joueurs, coachs et createurs structure la scene padel au Maroc.',
    body: 'Des academies locales aux grands weekends de competition, la communaute grandit avec une culture premium, inclusive et visuelle.',
  },
  stories: [
    {
      name: 'Sara El Idrissi',
      role: 'Joueuse / Casablanca',
      quote: 'Le circuit marocain commence enfin a raconter ses matchs comme une vraie scene internationale.',
    },
    {
      name: 'Yassine Benomar',
      role: 'Coach / Rabat',
      quote: 'Les clubs veulent plus qu un terrain: ils veulent une identite, une experience, une communaute.',
    },
    {
      name: 'Nora Amrani',
      role: 'Media host / Marrakech',
      quote: 'Le futur du padel passe aussi par les images, les interviews et les recits que l on construit autour du jeu.',
    },
  ],
}

export const finalCta = {
  image: footerVisual,
  eyebrow: 'Padel Maroc Pro',
  title: 'Join the padel movement.',
  subtitle: 'Explore Morocco\'s events, clubs, stories and the next generation of premium padel experiences.',
}