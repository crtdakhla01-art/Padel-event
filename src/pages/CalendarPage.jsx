import { Link } from 'react-router-dom'
import { CalendarDays, Clock3, MapPin, Trophy } from 'lucide-react'
import usePageSeo from '../hooks/usePageSeo'
import heroImg from '../assets/images/CALENDAR_PAGE/img_20.png'
import sideImg from '../assets/images/CALENDAR_PAGE/img_14.png'
import sessionImg1 from '../assets/images/CALENDAR_PAGE/img_4.png'
import sessionImg2 from '../assets/images/CALENDAR_PAGE/img_6.png'
import sessionImg3 from '../assets/images/CALENDAR_PAGE/img_8.png'

function CalendarPage() {
  usePageSeo({
    title: 'Calendrier des competitions | Coupe Intercontinentale de Padel',
    description:
      'Retrouvez toutes les competitions et evenements de padel programmes au Maroc.',
  })

  const keyDates = [
    {
      label: 'Cloture inscriptions',
      date: 'Tournoi Casablanca - Janvier',
    },
    {
      label: 'Tournoi regional',
      date: 'Open Marrakech - Mars',
    },
    {
      label: 'Evenement international',
      date: 'Coupe Intercontinentale Dakhla - Juin',
    },
    {
      label: 'Circuit national',
      date: 'Masters Rabat - Septembre',
    },
  ]

  const tournamentDays = [
    {
      day: 'Jour 1',
      title: 'Tournoi Casablanca',
      date: 'Janvier 2026',
      image: sessionImg1,
      sessions: ['Niveau: Amateur', 'Ville: Casablanca', 'Format: Tableau principal'],
    },
    {
      day: 'Jour 2',
      title: 'Open Marrakech',
      date: 'Mars 2026',
      image: sessionImg2,
      sessions: ['Niveau: National', 'Ville: Marrakech', 'Format: Open'],
    },
    {
      day: 'Jour 3',
      title: 'Padel Business Cup',
      date: 'Novembre 2026',
      image: sessionImg3,
      sessions: ['Niveau: Corporate', 'Ville: Rabat', 'Format: B2B'],
    },
  ]

  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Calendrier de competition padel"
          loading="lazy"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/25" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[4vw] pb-8 sm:pb-12 lg:pb-16">
            <p className="inline-flex items-center gap-2 text-[clamp(0.62rem,1vw,0.82rem)] font-semibold uppercase tracking-[0.2em] text-white/90">
              <CalendarDays className="h-3.5 w-3.5" />
              Calendrier des competitions
            </p>
            <h1
              className="mt-3 max-w-5xl text-[clamp(1.85rem,5.8vw,4.6rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Calendrier padel
              <br />
              maroc 2026
            </h1>
            <p className="mt-4 max-w-2xl text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed text-white/90">
              Retrouvez toutes les competitions et evenements de padel programmes
              au Maroc, avec une vue claire de la saison.
            </p>
          </div>
        </div>
      </div>

      {/* Key dates */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-[4vw] py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-12">
          {keyDates.map((item) => (
            <article key={item.label} className="border border-[#1f2118]/10 bg-white/55 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c5c52]">
                {item.label}
              </p>
              <p
                className="mt-3 text-[clamp(1rem,1.45vw,1.2rem)] uppercase leading-none"
                style={{
                  fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                {item.date}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Program intro */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.56fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#5c5c52]">
              <Trophy className="h-3.5 w-3.5" />
              Programme du tournoi
            </p>

            <h2
              className="mt-3 max-w-3xl text-[clamp(1.7rem,4.1vw,3.8rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              3 jours de competition
              <br />
              en continu
            </h2>

            <p className="mt-6 max-w-[62ch] text-sm leading-7 text-[#5c5c52]">
              Le calendrier centralise les rendez-vous majeurs de la saison.
              Cette base peut evoluer avec filtres par ville, niveau et date
              ainsi qu'une vue calendrier moderne.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/evenements"
                className="inline-flex items-center justify-center border border-[#1f2118]/20 bg-[#1f2118] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8ba045] hover:text-[#1f2118]"
              >
                Retour evenement
              </Link>
              <Link
                to="/clubs-de-padel"
                className="inline-flex items-center justify-center border border-[#1f2118]/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f2118] transition hover:border-[#8ba045] hover:text-[#8ba045]"
              >
                Clubs participants
              </Link>
            </div>
          </div>

          <div className="overflow-hidden bg-black/5">
            <img
              src={sideImg}
              alt="Ambiance tournoi et public"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Day schedule */}
      <div className="reveal bg-[#e8ead8]">
        <div className="mx-auto w-full max-w-[1200px] px-[4vw] py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tournamentDays.map((day) => (
              <article key={day.day} className="overflow-hidden border border-[#1f2118]/10 bg-white/70">
                <div className="relative overflow-hidden">
                  <img
                    src={day.image}
                    alt={day.title}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                  <span className="absolute left-3 top-3 border border-white/35 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    {day.day}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f8e47]">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {day.date}
                  </p>

                  <h3
                    className="mt-3 text-[clamp(1.08rem,1.6vw,1.38rem)] uppercase leading-[0.98]"
                    style={{
                      fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {day.title}
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm text-[#5c5c52]">
                    {day.sessions.map((session) => (
                      <li key={session} className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-[#8ba045]" />
                        {session}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Venue line */}
      <div className="reveal bg-[#1f2118]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-[4vw] py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <p className="inline-flex items-center gap-2 text-sm text-white/85">
            <MapPin className="h-4 w-4 text-[#b7c25b]" />
            Evenement majeur: Coupe Intercontinentale de Padel - Dakhla
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#b7c25b] hover:text-[#b7c25b]"
          >
            Assistance inscriptions
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CalendarPage
