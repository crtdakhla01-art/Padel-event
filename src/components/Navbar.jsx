import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useCachedSiteData } from '../hooks/useCachedSiteData'

function Navbar() {
  const location = useLocation()
  const { data } = useCachedSiteData()
  const navItems = data?.navItems ?? []
  const contactInfo = data?.contactInfo ?? { phone: '', email: '' }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)

  return (
    <header className="relative z-50 border-b-[3px] border-brand bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <span className="text-sm font-semibold tracking-[0.08em] text-ink/70 lg:hidden">Menu</span>

        {/* Nav links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isChildActive = item.children?.some((child) => child.path === location.pathname)
            const isParentActive = item.path === location.pathname

            if (item.children?.length) {
              return (
                <div key={item.label} className="relative flex items-center gap-1">
                  <NavLink
                    to={item.path}
                    onClick={() => setOpenDesktopDropdown(null)}
                    className={`text-[12px] font-bold tracking-[0.08em] transition ${
                      isParentActive || isChildActive ? 'text-brand' : 'text-ink hover:text-brand'
                    }`}
                  >
                    {item.label}
                  </NavLink>

                  <button
                    type="button"
                    aria-label={`Ouvrir le sous-menu ${item.label}`}
                    onClick={() =>
                      setOpenDesktopDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                    className="text-ink transition hover:text-brand"
                  >
                    <span className="text-[9px]">▾</span>
                  </button>

                  {openDesktopDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-3 min-w-[260px] rounded border border-ink/10 bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          onClick={() => setOpenDesktopDropdown(null)}
                          className={({ isActive }) =>
                            `block rounded px-3 py-2 text-sm transition ${
                              isActive ? 'bg-brand/15 text-brand' : 'text-ink hover:bg-ink/5'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpenDesktopDropdown(null)}
                className={({ isActive }) =>
                  `text-[12px] font-bold tracking-[0.08em] transition ${
                    isActive ? 'text-brand' : 'text-ink hover:text-brand'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        {/* Right: contact + socials */}
        <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden items-center gap-1.5 text-[11px] font-semibold text-ink transition hover:text-brand xl:flex"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {contactInfo.phone}
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden items-center gap-1.5 text-[11px] font-semibold text-ink transition hover:text-brand xl:flex"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {contactInfo.email}
            </a>

            <a href="#" aria-label="Facebook" className="text-ink hover:text-brand transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-ink hover:text-brand transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8zm-7-7a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10A5 5 0 0112 7zm4.5-.5a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-ink hover:text-brand transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded border border-ink/20 p-2 text-ink transition hover:border-brand hover:text-brand lg:hidden"
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {isMenuOpen && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              if (item.children?.length) {
                const isOpen = openMobileDropdown === item.label
                return (
                  <div key={item.label} className="border-b border-ink/10 py-1">
                    <div className="flex items-center justify-between gap-2">
                      <NavLink
                        to={item.path}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setOpenMobileDropdown(null)
                        }}
                        className={({ isActive }) =>
                          `py-2 text-sm font-semibold transition ${
                            isActive ? 'text-brand' : 'text-ink hover:text-brand'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>

                      <button
                        type="button"
                        aria-label={`Ouvrir le sous-menu ${item.label}`}
                        onClick={() =>
                          setOpenMobileDropdown((prev) => (prev === item.label ? null : item.label))
                        }
                        className="py-2 text-ink transition hover:text-brand"
                      >
                        <span className="text-xs">{isOpen ? '▴' : '▾'}</span>
                      </button>
                    </div>

                    {isOpen && (
                      <div className="pb-2 pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            onClick={() => {
                              setIsMenuOpen(false)
                              setOpenMobileDropdown(null)
                            }}
                            className={({ isActive }) =>
                              `block py-2 text-sm transition ${
                                isActive ? 'text-brand' : 'text-ink/80 hover:text-brand'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setOpenMobileDropdown(null)
                  }}
                  className={({ isActive }) =>
                    `border-b border-ink/10 py-3 text-sm font-semibold transition ${
                      isActive ? 'text-brand' : 'text-ink hover:text-brand'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            })}

            <div className="mt-3 flex items-center gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3 13a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8zm-7-7a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10A5 5 0 0112 7zm4.5-.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-ink hover:text-brand transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
