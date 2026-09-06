"use client"

import type React from "react"

interface FooterNavLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

// Footer link that performs smooth scroll to a page section if the link starts with #.
export function FooterNavLink({ href, className, children }: FooterNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
