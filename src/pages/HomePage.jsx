import Hero from '../components/Hero'
import usePageSeo from '../hooks/usePageSeo'

function HomePage() {
  usePageSeo({
    title: 'Accueil | Padel Maroc Pro',
    description:
      'Plateforme officielle du padel au Maroc: clubs, evenement principal, calendrier, partenaires et informations utiles.',
  })

  return (
    <section className="w-full bg-[#f3f1eb] text-[#1d2017]">
      <div className="reveal relative">
        <Hero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[4vw] pb-8 sm:pb-12 lg:pb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
              Federation officielle · Maroc
            </p>
            <h1
              className="mt-3 max-w-4xl text-[clamp(1.95rem,6vw,4.7rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Le padel marocain
              <br />
              en mouvement
            </h1>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomePage
