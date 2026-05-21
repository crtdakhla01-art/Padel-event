import { motion, useReducedMotion } from 'framer-motion'

function MockupCard({ image, title, className = '', rotation = '0deg', priority = false, zIndex = 1 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`absolute overflow-hidden rounded-md shadow-[0_20px_40px_rgba(15,15,15,0.12)] ${className}`}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
      animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
      style={{ rotate: rotation, zIndex }}
    >
      <img
        src={image}
        alt={title}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}

export default MockupCard