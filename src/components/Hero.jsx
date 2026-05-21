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
    <section className="w-full">
      <img
        src={heroImages[currentIndex]}
        alt="Joueur de padel"
        loading="lazy"
        className="block h-auto w-full transition-opacity duration-700"
      />
    </section>
  )
}

export default Hero
