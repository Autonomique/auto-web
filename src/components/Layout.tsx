import { useState, type ReactNode } from 'react'
import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import { contactEmail, links, partnerMailto } from '../content'

export type PageId = 'home' | 'industries' | 'news' | 'company'

const copyrightYear = new Date().getFullYear()

export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="none">
      <path d="M5 27 16 5l11 22" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 19.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1.5 3" />
      <circle cx="16" cy="19.5" r="3.2" fill="var(--node, #c5d798)" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Brand() {
  return <span className="brand"><Mark /><span>autonomique</span></span>
}

const navItems: [PageId | 'platform', string, string][] = [
  ['platform', 'Platform', links.platform],
  ['industries', 'Industries', links.industries],
  ['news', 'News', links.news],
  ['company', 'Company', links.company],
]

function Header({ page }: { page: PageId }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-4">
        <a href={links.home} aria-label="Autonomique home"><Brand /></a>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <List size={24} />}</button>
        <nav id="main-navigation" className={`navigation ${open ? 'navigation-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([id, label, href]) => <a key={id} href={href} aria-current={id === page ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={partnerMailto}>Partner with us <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href={links.home} aria-label="Autonomique home"><Brand /></a>
          <p>Physical AI for robots that reason,<br />plan, and adapt on the factory floor.</p>
          <div className="footer-links">
            {navItems.map(([id, label, href]) => <a key={id} href={href}>{label}</a>)}
            <a href={links.careers}>Careers</a>
            <a href={`mailto:${contactEmail}`}>Contact <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {copyrightYear} Autonomique Inc.</span><span>Menlo Park, CA · Montréal, QC</span><span>An SRI International spinout</span><a href={`${links.home}licenses.txt`}>Third-party notices <ArrowUpRight size={13} /></a></div>
      </div>
    </footer>
  )
}

export function Page({ page, children }: { page: PageId, children: ReactNode }) {
  return (
    <div className="site">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}

export function SectionHeading({ eyebrow, title, children, id }: { eyebrow: string, title: ReactNode, children?: ReactNode, id?: string }) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export function PageHero({ eyebrow, title, children, aside }: { eyebrow: string, title: ReactNode, children?: ReactNode, aside?: ReactNode }) {
  return (
    <section className="page-hero container grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> {eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
      {aside && <div className="reveal reveal-later">{aside}</div>}
    </section>
  )
}
