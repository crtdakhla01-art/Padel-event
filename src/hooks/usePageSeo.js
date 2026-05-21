import { useEffect } from 'react'

function usePageSeo({ title, description }) {
  useEffect(() => {
    document.title = title

    const descTag = document.querySelector('meta[name="description"]')
    if (descTag && description) {
      descTag.setAttribute('content', description)
    }
  }, [title, description])
}

export default usePageSeo
