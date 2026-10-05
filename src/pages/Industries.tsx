import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react'
import { MagneticLink } from '../components/MagneticLink'
import { Page, PageHero, SectionHeading } from '../components/Layout'
import { industries, links, partnerMailto } from '../content'

const fitSignals = [
  ['Variable parts', 'Positions, orientations, or part families shift from cycle to cycle.'],
  ['Tight tolerances', 'Contact-rich steps like insertion, seating, and alignment.'],
  ['Multi-step workflows', 'Sequences a person does by feel, today on a manual station.'],
  ['High mix', 'Changeovers that make fixed automation hard to justify.'],
]

export function IndustriesPage() {
  return (
    <Page page="industries">
      <PageHero eyebrow="INDUSTRIES" title={<>Where precision<br /><span className="muted">meets variation.</span></>}>
        <p className="hero-description">We start where traditional automation gives up.</p>
        <p className="body-copy">Autonomique is built for regulated, high-precision manufacturing: places where tasks change, parts vary, and “almost” isn’t good enough.</p>
      </PageHero>

      <section className="container industry-list">
        {industries.map((industry, index) => (
          <article id={industry.id} key={industry.id} className="industry-row grid md:grid-cols-[.35fr_1fr_1fr] gap-8">
            <div><span className="mono industry-index">{String(index + 1).padStart(2, '0')} / {industry.code}</span><span className={`pill ${industry.status === 'In production' ? 'pill-live' : ''}`}><span className="status-dot" /> {industry.status.toUpperCase()}</span></div>
            <div><h2>{industry.name}</h2><p className="industry-headline">{industry.headline}</p></div>
            <div><p className="industry-summary">{industry.summary}</p><ul className="task-list">{industry.tasks.map((task) => <li key={task}><CheckCircle size={16} /> {task}</li>)}</ul></div>
          </article>
        ))}
      </section>

      <section className="section-pad container grid md:grid-cols-[1fr_1.2fr] gap-16">
        <SectionHeading eyebrow="IS IT A FIT?" title={<>If it’s stubbornly manual,<br /><span className="muted">let’s talk.</span></>}>
          <p>The best first projects share a few traits. One is enough to start the conversation.</p>
        </SectionHeading>
        <div className="principles">{fitSignals.map(([title, description], index) => <article className="principle" key={title}><span className="mono">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>

      <section className="container"><div className="proof-band cta-band"><div className="proof-copy"><p className="eyebrow">STRATEGIC PARTNERSHIP PROGRAM</p><h2>Bring us your<br />hardest task.</h2></div><div className="proof-copy"><p>We partner with a small number of manufacturers at a time, from first assessment to production rollout, so every deployment gets the attention it needs.</p><div className="hero-actions"><MagneticLink href={partnerMailto}>Start a conversation <ArrowUpRight size={18} /></MagneticLink><a href={links.platform} className="text-link">Explore the platform <ArrowUpRight size={18} /></a></div></div></div></section>
      <div className="page-end" />
    </Page>
  )
}
