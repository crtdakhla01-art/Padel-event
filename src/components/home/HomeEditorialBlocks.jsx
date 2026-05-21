import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SectionHeader({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8ba045]">{eyebrow}</p>
      ) : null}
      <h2
        className="mt-3 text-[clamp(1.8rem,4vw,4rem)] uppercase leading-[0.92] text-[#171910]"
        style={{
          fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {body ? <p className="mt-4 max-w-[60ch] text-sm leading-7 text-[#616557]">{body}</p> : null}
    </div>
  )
}

export function TournamentCard({ item, featured = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className={`group relative overflow-hidden border ${
        item.tone === 'dark' ? 'border-white/10 bg-[#171910] text-white' : 'border-[#171910]/10 bg-white text-[#171910]'
      }`}
    >
      <div className={`grid h-full ${featured ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-[340px]">
          <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#171910]">
            {item.category}
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${item.tone === 'dark' ? 'text-[#b8c58a]' : 'text-[#8ba045]'}`}>
              {item.city} · {item.date}
            </p>
            <h3
              className="mt-3 text-[clamp(1.25rem,2.1vw,2.2rem)] uppercase leading-[0.92]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </h3>
            <p className={`mt-4 text-sm leading-7 ${item.tone === 'dark' ? 'text-white/78' : 'text-[#616557]'}`}>
              {item.summary}
            </p>
          </div>

          <div className="mt-6">
            <Link
              to={item.href}
              className={`inline-flex items-center gap-2 border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition ${
                item.tone === 'dark'
                  ? 'border-white/20 text-white hover:bg-white hover:text-[#171910]'
                  : 'border-[#171910]/15 text-[#171910] hover:bg-[#171910] hover:text-white'
              }`}
            >
              Discover event
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function AnimatedNumber({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return

    let animationFrameId
    const duration = 1200
    const start = performance.now()

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(Math.round(progress * value))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [inView, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export function LiveStat({ label, value, suffix }) {
  return (
    <div className="border border-white/14 bg-black/24 px-4 py-4 backdrop-blur-md sm:px-5">
      <p
        className="text-[clamp(1.45rem,2.5vw,2.4rem)] uppercase leading-none text-white"
        style={{
          fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        <AnimatedNumber value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">{label}</p>
    </div>
  )
}

export function ClubCard({ club, reverse = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`grid overflow-hidden border border-[#171910]/10 bg-white ${reverse ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'}`}
    >
      <div className={`${reverse ? 'lg:order-2' : ''} relative min-h-[280px] overflow-hidden`}>
        <img src={club.image} alt={club.name} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-7 lg:p-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8ba045]">{club.city} · {club.courts}</p>
          <h3
            className="mt-3 text-[clamp(1.35rem,2vw,2.2rem)] uppercase leading-[0.95]"
            style={{
              fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {club.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#616557]">{club.vibe}</p>
        </div>

        <div className="mt-6">
          <Link
            to={club.href}
            className="inline-flex items-center gap-2 border border-[#171910]/15 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171910] transition hover:bg-[#171910] hover:text-white"
          >
            View club
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export function SponsorWordmark({ name }) {
  return (
    <div className="group border-b border-[#171910]/8 py-5 transition hover:border-[#8ba045]">
      <p className="text-[clamp(1rem,1.55vw,1.4rem)] font-semibold uppercase tracking-[0.16em] text-[#171910]/55 transition group-hover:text-[#171910]">
        {name}
      </p>
    </div>
  )
}