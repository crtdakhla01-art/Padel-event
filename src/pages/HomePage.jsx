import Hero from '../components/Hero'
import usePageSeo from '../hooks/usePageSeo'
import { Link } from 'react-router-dom'
import { CalendarDays, Globe2, Trophy, Users } from 'lucide-react'

function HomePage() {
  usePageSeo({
    title: 'Accueil | Padel Event Maroc',
    description:
      'Padel Event Maroc - Dakhla 2026: sport, business, tourisme et networking.',
  })

  const stats = [
    { value: '16', label: 'nations participantes' },
    { value: '5', label: 'continents représentés' },
    { value: '32', label: 'équipes internationales' },
    { value: '+160', label: 'supporteurs internationaux' },
  ]

  const whyDakhla = [
    'Destination sportive premium',
    'Hub Afrique - Europe - Amériques',
    'Cadre naturel exceptionnel',
    'Forte visibilité médiatique',
  ]

  return (
    <section className="w-full bg-[#f3f1eb] text-[#1d2017]">
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <Hero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[4vw] pb-8 sm:pb-12 lg:pb-16">
            <h1
              className="mt-3 max-w-4xl text-[clamp(1.95rem,6vw,4.7rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Padel Event Maroc
              <br />
              Dakhla 2026
            </h1>

            <p className="mt-3 max-w-3xl text-[clamp(0.95rem,1.5vw,1.2rem)] leading-relaxed text-white/90">
              3e édition sous le thème: Carrefour du Sport et des Affaires.
              Un événement international entre désert, lagune et océan.
            </p>

            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/85">
              <CalendarDays className="h-4 w-4" />
              22 - 25 Octobre 2026
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/evenements"
                className="inline-flex items-center justify-center border border-white/35 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1d2017] transition hover:bg-[#dfe2cf]"
              >
                Découvrir l'événement
              </Link>
              <Link
                to="/partenaires"
                className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#dfe2cf] hover:text-[#dfe2cf]"
              >
                Devenir partenaire
              </Link>
              <Link
                to="/calendrier"
                className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#dfe2cf] hover:text-[#dfe2cf]"
              >
                Voir le calendrier
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-[4vw] py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-12">
          {stats.map((item) => (
            <article key={item.label} className="border border-[#1d2017]/10 bg-white/55 p-5">
              <p
                className="text-[clamp(1.3rem,2.2vw,2rem)] uppercase leading-none"
                style={{
                  fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.value}
              </p>
              <p className="mt-2 text-sm text-[#4f5540]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[4vw] py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c5c52]">
            <Globe2 className="h-3.5 w-3.5" />
            Pourquoi Dakhla
          </p>
          <h2
            className="mt-3 text-[clamp(1.7rem,4.1vw,3.6rem)] uppercase leading-[0.94]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Un carrefour naturel
            <br />
            pour le padel mondial
          </h2>
          <ul className="mt-7 space-y-3 text-sm text-[#4f5540]">
            {whyDakhla.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[#8ba045]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[#1d2017]/10 bg-white/70 p-6 sm:p-7">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f8e47]">
            <Users className="h-3.5 w-3.5" />
            Rejoignez l'événement
          </p>
          <p className="mt-4 text-sm leading-7 text-[#4f5540]">
            Rejoignez l'un des plus grands événements de padel en Afrique.
            Joueurs, partenaires, médias et investisseurs se retrouvent à Dakhla
            pour une édition orientée performance et opportunités.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center border border-[#1d2017]/20 bg-[#1d2017] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8ba045] hover:text-[#1d2017]"
          >
            Nous contacter
          </Link>
        </div>
      </div>

    </section>
  )
}

export default HomePage
