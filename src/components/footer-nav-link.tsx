interface FooterNavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function FooterNavLink({ href, children, className = "" }: FooterNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href
        return
      }
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
