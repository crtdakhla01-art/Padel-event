import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react'
import usePageSeo from '../hooks/usePageSeo'
import { contactInfo } from '../data/siteData'
import heroImg from '../assets/images/CONTACT_PAGE/img_17.png'
import officeImg from '../assets/images/CONTACT_PAGE/img_11.png'

function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  usePageSeo({
    title: 'Contact | Coupe Intercontinentale de Padel',
    description:
      'Contactez l equipe pour partenariat, participation et informations sur la Coupe Intercontinentale de Padel - Dakhla 2026.',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez corriger les champs invalides avant envoi.',
      })
      return
    }

    const formData = new FormData(form)
    const payload = {
      fullName: formData.get('fullName')?.toString().trim(),
      company: formData.get('company')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      subject: formData.get('subject')?.toString(),
      message: formData.get('message')?.toString().trim(),
    }

    // Frontend-only flow for now: this is where API submission will be wired later.
    if (!payload.fullName || !payload.email || !payload.subject || !payload.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Les champs obligatoires doivent etre remplis.',
      })
      return
    }

    setSubmitStatus({
      type: 'success',
      message: 'Demande envoyee localement. Le branchement backend sera ajoute ensuite.',
    })
    form.reset()
  }

  const contactCards = [
    {
      icon: Phone,
      label: 'Telephone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: contactInfo.address,
      href: '#',
    },
  ]

  return (
    <section className="w-full bg-[#efefe9] text-[#1f2118]">
      {/* Hero */}
      <div className="reveal relative isolate w-full overflow-hidden bg-black/5">
        <img
          src={heroImg}
          alt="Equipe padel au Maroc"
          loading="lazy"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/42 to-black/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-[4vw] pb-8 sm:pb-12 lg:pb-16">
            <p className="inline-flex items-center gap-2 text-[clamp(0.62rem,1vw,0.82rem)] font-semibold uppercase tracking-[0.2em] text-white/90">
              <Mail className="h-3.5 w-3.5" />
              Contact officiel
            </p>
            <h1
              className="mt-3 max-w-5xl text-[clamp(1.9rem,5.9vw,4.7rem)] uppercase leading-[0.94] text-white"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed text-white/90">
              Nous contacter pour partenariat ou participation.
            </p>
          </div>
        </div>
      </div>

      {/* Quick contacts */}
      <div className="reveal bg-[#dfe2cf]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-[4vw] py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:py-12">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group border border-[#1f2118]/10 bg-white/60 p-5 transition hover:-translate-y-0.5"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7f8e47]">
                <card.icon className="h-3.5 w-3.5" />
                {card.label}
              </p>
              <p
                className="mt-3 text-[clamp(1rem,1.6vw,1.25rem)]"
                style={{
                  fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                {card.value}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Form + office */}
      <div className="reveal mx-auto w-full max-w-[1200px] px-[4vw] py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_0.56fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#5c5c52]">
              <CalendarDays className="h-3.5 w-3.5" />
              Formulaire de contact
            </p>

            <h2
              className="mt-3 max-w-3xl text-[clamp(1.7rem,4.1vw,3.8rem)] uppercase leading-[0.94]"
              style={{
                fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Envoyez votre
              <br />
              demande
            </h2>

            <p className="mt-6 max-w-[62ch] text-sm leading-7 text-[#5c5c52]">
              Remplissez ce formulaire pour toute demande concernant le Morocco Padel
              Masters 2026. Notre equipe vous contacte dans les meilleurs delais.
            </p>

            <form
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              aria-label="Formulaire de contact"
              noValidate
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Nom complet
                <input
                  type="text"
                  name="fullName"
                  required
                  minLength={2}
                  maxLength={80}
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  placeholder="Votre nom"
                />
              </label>

              <label className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={120}
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  placeholder="vous@email.com"
                />
              </label>

              <label className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Societe
                <input
                  type="text"
                  name="company"
                  maxLength={120}
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  placeholder="Nom de votre societe"
                />
              </label>

              <label className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Telephone
                <input
                  type="tel"
                  name="phone"
                  pattern="^\\+?[0-9\\s()\-]{8,20}$"
                  maxLength={20}
                  title="Format attendu: +212 5 22 00 10 10"
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  placeholder="+212 ..."
                />
              </label>

              <label className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Sujet
                <select
                  name="subject"
                  required
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir un sujet
                  </option>
                  <option value="inscription">Inscription tournoi</option>
                  <option value="partenariat">Partenariat sponsor</option>
                  <option value="media">Media et presse</option>
                  <option value="autre">Autre demande</option>
                </select>
              </label>

              <label className="sm:col-span-2 flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c5c52]">
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  minLength={20}
                  maxLength={2000}
                  className="border border-[#1f2118]/15 bg-white px-4 py-3 text-sm text-[#1f2118] outline-none transition focus:border-[#8ba045]"
                  placeholder="Votre message..."
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#1f2118]/20 bg-[#1f2118] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8ba045] hover:text-[#1f2118]"
                >
                  Envoyer la demande
                </button>
                {submitStatus.message ? (
                  <p
                    role="status"
                    className={`mt-3 text-sm ${
                      submitStatus.type === 'error' ? 'text-[#b33a3a]' : 'text-[#4f6a20]'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <div>
            <div className="overflow-hidden bg-black/5">
              <img
                src={officeImg}
                alt="Bureaux federation padel maroc"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>

            <div className="mt-5 border border-[#1f2118]/10 bg-white/70 p-5 sm:p-6">
              <h3
                className="text-[clamp(1.08rem,1.65vw,1.35rem)] uppercase leading-none"
                style={{
                  fontFamily: 'Oswald, Bebas Neue, Impact, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                Siege organisation
              </h3>

              <p className="mt-4 inline-flex items-start gap-2 text-sm leading-7 text-[#5c5c52]">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#8ba045]" />
                {contactInfo.address}
              </p>

              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#5c5c52]">
                <Phone className="h-4 w-4 text-[#8ba045]" />
                {contactInfo.phone}
              </p>

              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#5c5c52]">
                <Mail className="h-4 w-4 text-[#8ba045]" />
                {contactInfo.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="reveal bg-[#1f2118]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-[4vw] py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <p className="text-sm text-white/85">Besoin d'une reponse immediate pour votre participation ?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center border border-[#b7c25b] bg-[#b7c25b] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f2118] transition hover:bg-white"
            >
              Appeler l'equipe
            </a>
            <Link
              to="/evenements"
              className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-[#b7c25b] hover:text-[#b7c25b]"
            >
              Retour evenement
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
