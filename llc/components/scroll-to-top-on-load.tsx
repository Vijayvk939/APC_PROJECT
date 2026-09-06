"use client"

import { useEffect } from "react"

// Utility component that forces the page scroll back to the top on load/refresh.
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
  }, [])

  return null
}
