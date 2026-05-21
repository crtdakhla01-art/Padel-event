import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-10">
      <p className="font-accent text-xs uppercase tracking-[0.2em] text-brand">Erreur 404</p>
      <h1 className="mt-3 font-display text-7xl uppercase text-white">Page introuvable</h1>
      <p className="mt-4 text-white/60">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center border border-brand bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:bg-white"
      >
        Retour à l'accueil
      </Link>
    </section>
  )
}

export default NotFoundPage
