import { Link } from 'react-router-dom'
import { Building2, Handshake, Megaphone, Sparkles, Trophy } from 'lucide-react'
import usePageSeo from '../hooks/usePageSeo'
import { sponsors } from '../data/siteData'
import heroImg from '../assets/images/PARTNERS_PAGE/img_18.png'
import introImg from '../assets/images/PARTNERS_PAGE/img_11.png'
import spotlightImg from '../assets/images/PARTNERS_PAGE/img_15.png'

function PartnersPage() {
  usePageSeo({
    title: 'Partenaires | Padel Maroc Pro',
    description:
      'Partenaires et sponsors officiels du Morocco Padel Masters 2026. Rejoignez le dispositif de visibilite national.',
  })

  const partnerTiers = [
    {
      name: 'Title Partner',
      reach: 'Naming officiel',
      perks: 'Visibilite premium sur court central, media et digital.',
    },
    {
      name: 'Official Partner',
      reach: 'Activation terrain',
      perks: 'Branding zones joueurs, fan zone et social content.',
    },
    {
      name: 'Supporting Partner',
      reach: 'Presence locale',
      perks: 'Logo wall, presence programme et operations sur site.',
    },
  ]

  const partnerBenefits = [
    'Audience sport premium et engagee',
    'Activation marque sur 3 jours de tournoi',
    'Couverture media regionale et nationale',
    'Visibilite digitale avant et apres evenement',
  ]

  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Partenaires et sponsors padel"
          loading="lazy"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/42 to-black/22" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[4vw] pb-8 sm:pb-12 lg:pb-16">
            <p className="inline-flex items-center gap-2 text-[clamp(0.62rem,1vw,0.82rem)] font-semibold uppercase tracking-[0.2em] text-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              Sponsorship program
            </p>
            <h1
              className="mt-3 max-w-5xl text-[clamp(1.85rem,5.8vw,4.6rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Partenaires officiels
              <br />
              morocco padel masters
            </h1>
            <p className="mt-4 max-w-2xl text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed text-white/90">
              Associez votre marque a l'evenement padel de reference avec un dispositif
              de visibilite premium sur site, media et digital.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.56fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#5c5c52]">
              <Handshake className="h-3.5 w-3.5" />
              Pourquoi sponsoriser
            </p>

            <h2
              className="mt-3 max-w-3xl text-[clamp(1.7rem,4.1vw,3.8rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Un partenariat sport
              <br />
              business et image
            </h2>

            <p className="mt-6 max-w-[62ch] text-sm leading-7 text-[#5c5c52]">
              Le Morocco Padel Masters propose des formats de collaboration sur mesure,
              adaptes aux objectifs de notoriete, performance commerciale et engagement
              communautaire de votre entreprise.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-[#5c5c52]">
              {partnerBenefits.map((benefit) => (
                <li key={benefit} className="inline-flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-[#8ba045]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden bg-black/5">
            <img
              src={introImg}
              alt="Activation sponsor sur evenement padel"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Partner tiers */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto w-full max-w-[1200px] px-[4vw] py-12 sm:py-14 lg:py-16">
          <h3
            className="text-[clamp(1.55rem,3.1vw,2.7rem)] uppercase leading-[0.96]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Formules partenaires
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {partnerTiers.map((tier) => (
              <article key={tier.name} className="border border-[#1f2118]/10 bg-white/70 p-6 sm:p-7">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f8e47]">
                  <Building2 className="h-3.5 w-3.5" />
                  {tier.reach}
                </p>
                <h4
                  className="mt-3 text-[clamp(1.08rem,1.65vw,1.42rem)] uppercase leading-none"
                  style={{
                    fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {tier.name}
                </h4>
                <p className="mt-4 text-sm leading-7 text-[#5c5c52]">{tier.perks}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsor wall + spotlight */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.56fr] lg:gap-16">
          <div>
            <h3
              className="text-[clamp(1.55rem,3.1vw,2.7rem)] uppercase leading-[0.96]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Sponsor wall
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sponsors.map((name) => (
                <article
                  key={name}
                  className="flex min-h-[64px] items-center border border-[#1f2118]/10 bg-white/65 px-4"
                >
                  <p
                    className="text-[clamp(0.95rem,1.3vw,1.12rem)] uppercase"
                    style={{
                      fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {name}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-black/5">
              <img
                src={spotlightImg}
                alt="Visibilite partenaires en bord de terrain"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <div className="mt-5 space-y-3 text-sm text-[#5c5c52]">
              <p className="inline-flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-[#8ba045]" />
                Presence branding sur court, LED, backdrops et interviews.
              </p>
              <p className="inline-flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-[#8ba045]" />
                Contenus co-branded pour reels, stories et recap officiel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="reveal bg-[#1f2118]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-[4vw] py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <p className="text-sm text-white/85">Devenez partenaire officiel du Morocco Padel Masters 2026.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-[#b7c25b] bg-[#b7c25b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f2118] transition hover:bg-white"
            >
              Demander un dossier
            </Link>
            <Link
              to="/evenements"
              className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#b7c25b] hover:text-[#b7c25b]"
            >
              Voir l'evenement
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersPage
