'use client'
import { load, trackPageview } from 'fathom-client'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    load(process.env.NEXT_PUBLIC_FATHOM_ID as string, {
      includedDomains: [process.env.DOMAIN_ONE as string, process.env.DOMAIN_TWO as string],
      spa: 'auto',
    })

    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    trackPageview({
      url: pathname + searchParams?.toString(),
      referrer: document.referrer
    })

    // Record a pageview when route changes
  }, [pathname, searchParams])

  return null
}

export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}