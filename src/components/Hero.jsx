import { useEffect, useState } from 'react'
import homeImage1 from '../assets/images/home_image_1.png'
import homeImage2 from '../assets/images/home_image_2.png'

const heroImages = [homeImage1, homeImage2]

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[700px]">
      <img
        src={heroImages[currentIndex]}
        alt="Joueur de padel"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
      />
    </section>
  )
}

export default Hero
