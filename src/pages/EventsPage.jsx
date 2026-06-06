import { Link } from 'react-router-dom'
import { CalendarDays, CheckCircle2, MapPin, Sparkles } from 'lucide-react'
import usePageSeo from '../hooks/usePageSeo'
import heroImg from '../assets/images/EVENTS_PAGE/img_19.png'
import introImg from '../assets/images/EVENTS_PAGE/img_13.png'
import storyImg from '../assets/images/EVENTS_PAGE/img_12.png'
import cardImg1 from '../assets/images/EVENTS_PAGE/img_1.png'
import cardImg2 from '../assets/images/EVENTS_PAGE/img_3.png'
import cardImg3 from '../assets/images/EVENTS_PAGE/img_10.png'

function EventsPage() {
  usePageSeo({
    title: 'Événements | Padel Event Maroc',
    description:
      'Découvrez les plus grands événements de padel organisés au Maroc et à l\'international.',
  })

  const eventSteps = [
    {
      number: '1',
      title: 'Tournois internationaux',
      text: 'Affiches internationales et tableaux compétitifs avec délégations de plusieurs pays.',
    },
    {
      number: '2',
      title: 'Networking & business meetings',
      text: 'Rencontres B2B, activations partenaires et opportunités d\'investissement.',
    },
    {
      number: '3',
      title: 'Animations publiques',
      text: 'Exhibitions, village partenaires et expériences ouvertes au grand public.',
    },
  ]

  const faqItems = [
    {
      question: 'Quel est l\'événement principal ?',
      answer:
        'Padel Event Maroc - Dakhla 2026 est le rendez-vous central de la saison.',
      open: true,
    },
    {
      question: 'Quels formats sont proposés ?',
      answer: '',
      open: false,
    },
    {
      question: 'Y a-t-il des activités business ?',
      answer: '',
      open: false,
    },
    {
      question: 'Les animations sont-elles ouvertes au public ?',
      answer: '',
      open: false,
    },
  ]

  const eventProgram = [
    {
      title: 'Coupe Intercontinentale - Ouverture',
      place: 'Dakhla',
      date: '22 Octobre 2026',
      image: cardImg1,
    },
    {
      title: 'Journée exhibitions & networking',
      place: 'Dakhla',
      date: '23 Octobre 2026',
      image: cardImg2,
    },
    {
      title: 'Finales et cérémonie',
      place: 'Dakhla',
      date: '25 Octobre 2026',
      image: cardImg3,
    },
  ]

  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Événement padel au Maroc"
          loading="lazy"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/45" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <div className="mx-auto w-full max-w-[1000px]">
            <p className="inline-flex items-center gap-2 text-[clamp(0.62rem,1vw,0.82rem)] font-semibold uppercase tracking-[0.2em] text-white/95">
              <Sparkles className="h-3.5 w-3.5" />
              Événements
            </p>
            <h1
              className="mt-3 text-[clamp(1.95rem,6.2vw,4.9rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Coupe intercontinentale
              <br />
              de padel - dakhla 2026
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[clamp(0.9rem,1.4vw,1.15rem)] leading-relaxed text-white/90">
              Un événement international réunissant joueurs, sponsors,
              investisseurs et médias autour du sport et du business.
            </p>
          </div>
        </div>
      </div>

      {/* Journey steps */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.58fr_1fr] lg:gap-14">
          <div>
            <div className="overflow-hidden bg-black/5">
              <img
                src={introImg}
                alt="Infrastructures et clubs de padel"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>

            <ul className="mt-7 space-y-3 text-sm text-[#5c5c52]">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8ba045]" />
                Tournois internationaux et exhibitions
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8ba045]" />
                Networking et business meetings
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8ba045]" />
                Activités partenaires et fan expériences
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8ba045]" />
                Visibilité médiatique nationale et internationale
              </li>
            </ul>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#5c5c52]">
              <MapPin className="h-3.5 w-3.5" />
              Programme
            </p>

            <h2
              className="mt-3 max-w-3xl text-[clamp(1.7rem,4.1vw,3.9rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Moments forts de
              <br />
              l'événement
            </h2>

            <div className="mt-8 space-y-7">
              {eventSteps.map((step) => (
                <article key={step.number} className="grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-5">
                  <span
                    className="text-[clamp(1.45rem,2.5vw,2.2rem)] leading-none text-[#a8b56a]"
                    style={{
                      fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      className="text-[clamp(1rem,1.45vw,1.25rem)] uppercase leading-none"
                      style={{
                        fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[48ch] text-sm leading-7 text-[#5c5c52]">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story + FAQ section */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#5c5c52]">
                <MapPin className="h-3.5 w-3.5" />
                Informations utiles
              </p>

              <h3
                className="mt-3 max-w-3xl text-[clamp(1.7rem,4vw,3.6rem)] uppercase leading-[0.94]"
                style={{
                  fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Participation,
                <br />
                logistique et accès
              </h3>

              <div className="mt-8 space-y-1">
                {faqItems.map((faq) => (
                  <article key={faq.question} className="border-b border-[#1f2118]/15 py-4">
                    <div className="flex items-center justify-between gap-6">
                      <h4
                        className="text-[0.92rem] uppercase"
                        style={{
                          fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                          fontWeight: 600,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {faq.question}
                      </h4>
                      <span className="text-xl leading-none text-[#7f8e47]">{faq.open ? '-' : '+'}</span>
                    </div>

                    {faq.open ? (
                      <p className="mt-3 max-w-[62ch] text-sm leading-7 text-[#5c5c52]">{faq.answer}</p>
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/calendrier"
                  className="inline-flex items-center gap-2 border border-[#1f2118]/20 bg-[#1f2118] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#8ba045] hover:text-[#1f2118]"
                >
                  Voir le programme complet
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden bg-black/5">
                <img
                  src={storyImg}
                  alt="Paysage et voyage sportif"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#5c5c52]">
                L'événement combine compétition, business et expériences partenaires
                dans un cadre unique à Dakhla, avec programmation sportive et rencontres
                professionnelles sur toute la durée.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discover events cards */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_0.52fr] lg:gap-14">
          <h3
            className="text-[clamp(1.7rem,4vw,3.4rem)] uppercase leading-[0.94]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Aperçu de
            <br />
            la programmation
          </h3>

          <div className="pb-1">
            <p className="max-w-[42ch] text-sm leading-7 text-[#5c5c52]">
              Quatre jours de compétition, exhibitions, networking et activités
              ouvertes au public.
            </p>
            <Link
              to="/calendrier"
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f2118] transition hover:text-[#7f8e47]"
            >
              Voir détails
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {eventProgram.map((event) => (
            <article key={event.title} className="group overflow-hidden border border-[#1f2118]/10 bg-white/65">
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <h4
                  className="text-[clamp(1.08rem,1.65vw,1.45rem)] uppercase leading-none"
                  style={{
                    fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {event.title}
                </h4>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8ba045]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.place}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-[4vw] py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <p className="text-sm text-[#5c5c52]">Prêt à rejoindre Padel Event Maroc 2026 ?</p>
          <p className="text-sm text-[#5c5c52]">Prêt à participer à Padel Event Maroc - Dakhla 2026 ?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/calendrier"
              className="inline-flex items-center justify-center border border-[#1f2118]/20 bg-[#1f2118] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8ba045] hover:text-[#1f2118]"
            >
              Calendrier
            </Link>
            <Link
              to="/clubs-de-padel"
              className="inline-flex items-center justify-center border border-[#1f2118]/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f2118] transition hover:border-[#7f8e47] hover:text-[#7f8e47]"
            >
              Clubs de padel
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPage
