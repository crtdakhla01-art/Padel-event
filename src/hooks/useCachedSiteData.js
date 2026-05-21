import { useQuery } from '@tanstack/react-query'
import * as siteData from '../data/siteData'

function fetchSiteData() {
  return Promise.resolve(siteData)
}

export function useCachedSiteData() {
  return useQuery({
    queryKey: ['site-data'],
    queryFn: fetchSiteData,
  })
}