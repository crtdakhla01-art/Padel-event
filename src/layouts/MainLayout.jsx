import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const revealed = Array.from(document.querySelectorAll('.reveal'))
    if (!revealed.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealed.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) {
        element.classList.add('is-visible')
      } else {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="flex flex-col bg-ink text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
