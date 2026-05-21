import {
  CalendarDays,
  ShieldCheck,
  Users,
  Plane,
} from 'lucide-react'
import heroImg from '../assets/images/img_16.png'
import aboutImg from '../assets/images/img_12.png'
import g1 from '../assets/images/img_6.png'
import g2 from '../assets/images/img_6.png'
import g3 from '../assets/images/img_6.png'
import g4 from '../assets/images/img_6.png'
import g5 from '../assets/images/img_6.png'
import g6 from '../assets/images/img_6.png'
import g7 from '../assets/images/img_6.png'
import g8 from '../assets/images/img_6.png'

const features = [
  {
    icon: ShieldCheck,
    title: 'FREE CANCELLATION',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: CalendarDays,
    title: 'FLEXIBLE DATES',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: Users,
    title: 'PROFESSIONAL GUIDES',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8]

function ClubsPage() {
  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Trusted travel mates"
          loading="lazy"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 inline-flex items-center gap-2 text-[clamp(0.65rem,1.1vw,0.85rem)] font-semibold uppercase tracking-[0.22em]">
            <Plane className="h-3.5 w-3.5" />
            About
          </p>
          <h1
            className="max-w-6xl text-[clamp(1.95rem,6.2vw,4.9rem)] uppercase leading-[0.96]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Trusted Travel Mates
          </h1>
          <p className="mt-4 text-[clamp(0.9rem,1.6vw,1.55rem)] text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.55fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[clamp(0.62rem,0.9vw,0.8rem)] font-semibold uppercase tracking-[0.2em] text-[#5c5c52]">
              <Plane className="h-3.5 w-3.5" />
              Nextour
            </p>

            <h2
              className="max-w-3xl text-[clamp(1.8rem,4.2vw,3.9rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              We Are A Team Of Passionate Traveler
            </h2>

            <div className="mt-8 max-w-2xl space-y-4 text-[clamp(0.9rem,1.05vw,1.02rem)] leading-8 text-[#5c5c52]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                mauris rhoncus aenean vel. Suspendisse sed nisi lacus sed viverra tellus.
                Urna duis convallis convallis tellus.
              </p>
              <p>
                Interdum velit laoreet. In pellentesque massa placerat duis. Arcu cursus
                euismod quis viverra nibh cras pulvinar mattis. Blandit libero volutpat sed
                cras ornare arcu dui vivamus. Integer eget aliquet nibh praesent.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-black/5">
            <img
              src={aboutImg}
              alt="Travel tent view"
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
              alt={`Travel gallery ${index + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClubsPage
