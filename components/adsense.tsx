'use client'

import { useEffect } from 'react'

export function AdSense() {
  useEffect(() => {
    // Only inject the script if it hasn't been added yet
    const scriptSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6621331032123517'
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = scriptSrc
    script.crossOrigin = 'anonymous'
    
    // Appending to head manually avoids React hydration interference
    document.head.appendChild(script)
  }, [])

  return null
}
