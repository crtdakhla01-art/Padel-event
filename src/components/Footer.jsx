import { Link } from 'react-router-dom'
import { useCachedSiteData } from '../hooks/useCachedSiteData'

function Footer() {
  const { data } = useCachedSiteData()
  const brand = data?.brand ?? { name: 'Padel Event Maroc' }
  const contactInfo = data?.contactInfo ?? { address: '', phone: '', email: '' }

  return (
    <footer className="bg-[#e8ead8] text-ink">

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-base font-extrabold uppercase tracking-widest text-ink">
              {brand.name}
            </span>
            <p className="text-sm text-ink/70 leading-relaxed">
              {contactInfo.address}
            </p>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand transition">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand transition">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>
            {/* Socials */}
            <div className="flex items-center gap-4 pt-1">
              <a href="#" aria-label="Facebook" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8zm-7-7a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10A5 5 0 0112 7zm4.5-.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Menu column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">Menu</h4>
            <Link to="/" className="text-sm text-ink/70 hover:text-brand transition">Accueil</Link>
            <Link to="/clubs" className="text-sm text-ink/70 hover:text-brand transition">Clubs de padel</Link>
            <Link to="/calendrier" className="text-sm text-ink/70 hover:text-brand transition">Événements</Link>
            <Link to="/calendrier" className="text-sm text-ink/70 hover:text-brand transition">Calendrier</Link>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">Liens utiles</h4>
            <Link to="/calendrier" className="text-sm text-ink/70 hover:text-brand transition">Inscriptions</Link>
            <Link to="/contact" className="text-sm text-ink/70 hover:text-brand transition">Contact</Link>
            <Link to="/clubs" className="text-sm text-ink/70 hover:text-brand transition">Trouver un club</Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/15 mx-4 sm:mx-6 lg:mx-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4 text-[11px] text-ink/50">
          <span>© Padel Event Maroc 2026. Tous droits réservés.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand transition">Politique de confidentialité</a>
            <a href="#" className="hover:text-brand transition">Conditions d’utilisation</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
