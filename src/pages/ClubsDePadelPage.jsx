import { MapPin, Trophy, Star } from 'lucide-react'
import heroImg from '../assets/images/img_19.png'
import aboutImg from '../assets/images/img_13.png'
import g1 from '../assets/images/img_1.png'
import g2 from '../assets/images/img_2.png'
import g3 from '../assets/images/img_3.png'
import g4 from '../assets/images/img_4.png'
import g5 from '../assets/images/img_5.png'
import g6 from '../assets/images/img_7.png'
import g7 from '../assets/images/img_8.png'
import g8 from '../assets/images/img_10.png'

const features = [
  {
    icon: MapPin,
    title: 'COURTS PREMIUM',
    text: 'Terrains homologués aux standards internationaux dans tout le Maroc.',
  },
  {
    icon: Trophy,
    title: 'TOURNOIS OFFICIELS',
    text: "Compétitions régionales et nationales organisées tout au long de l'année.",
  },
  {
    icon: Star,
    title: 'ACADÉMIES JUNIORS',
    text: "Programmes d'entraînement dédiés aux jeunes talents du padel marocain.",
  },
]

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8]

function ClubsDePadelPage() {
  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Clubs de Padel au Maroc"
          loading="eager"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 inline-flex items-center gap-2 text-[clamp(0.65rem,1.1vw,0.85rem)] font-semibold uppercase tracking-[0.22em]">
            <MapPin className="h-3.5 w-3.5" />
            Le Padel au Maroc
          </p>
          <h1
            className="max-w-6xl text-[clamp(1.95rem,6.2vw,4.9rem)] uppercase leading-[0.96]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Clubs de Padel au Maroc
          </h1>
          <p className="mt-4 text-[clamp(0.9rem,1.6vw,1.55rem)] text-white/90">
            Découvrez les meilleurs clubs de padel à travers tout le Royaume.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[clamp(0.62rem,0.9vw,0.8rem)] font-semibold uppercase tracking-[0.2em] text-[#5c5c52]">
              <MapPin className="h-3.5 w-3.5" />
              Réseau National
            </p>

            <h2
              className="max-w-3xl text-[clamp(1.8rem,4.2vw,3.9rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Un Réseau de Clubs d'Excellence
            </h2>

            <div className="mt-8 max-w-2xl space-y-4 text-[clamp(0.9rem,1.05vw,1.02rem)] leading-8 text-[#5c5c52]">
              <p>
                Le padel connaît une expansion remarquable au Maroc, avec plus de 120 clubs
                actifs répartis dans 19 villes du Royaume. Des complexes modernes aux
                académies de formation, l'infrastructure padel marocaine ne cesse de se
                développer.
              </p>
              <p>
                Nos clubs partenaires offrent des installations de qualité internationale,
                des coaches certifiés et des programmes adaptés à tous les niveaux, du
                débutant au compétiteur confirmé.
              </p>
              <p>
                Rejoignez la communauté padel du Maroc et trouvez le club le plus proche
                de chez vous pour commencer votre aventure sur les courts.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-black/5">
            <img
              src={aboutImg}
              alt="Club de padel au Maroc"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Features strip */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-[4vw] py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:py-14">
          {features.map((item) => (
            <article key={item.title} className="group flex items-start gap-4">
              <item.icon className="mt-1 h-7 w-7 text-[#b7c25b] transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div>
                <h3
                  className="text-[clamp(1rem,1.35vw,1.2rem)] uppercase leading-none"
                  style={{
                    fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[28ch] text-sm leading-7 text-[#5c5c52]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="reveal grid grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="group relative aspect-[4/3] overflow-hidden">
            <img
              src={src}
              alt={`Club padel ${index + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClubsDePadelPage
