import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../libs/gtag'

export default function usePageView() {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }
    const handleRouteChange = (path: string, { shallow }: any) => {
      if (!shallow) {
        gtag.pageView(path)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return() => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
