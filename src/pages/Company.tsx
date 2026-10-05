import { ArrowUpRight } from '@phosphor-icons/react'
import { MagneticLink } from '../components/MagneticLink'
import { Page, PageHero, SectionHeading } from '../components/Layout'
import { LocationsArt, MediaFrame } from '../components/Visuals'
import { backers, careersMailto, hiringAreas, links, partnerMailto, photos, team } from '../content'

const timeline = [
  ['SRI', 'Research roots', 'Incubated at SRI International, building on telemanipulation, dexterous manipulation, spatial intelligence, and generative-AI planning for robots.'],
  ['2024', 'Spinout', 'Founded as Avsr AI and spun out of SRI. Later renamed Autonomique: autonomy, at scale.'],
  ['2025', 'Paid pilot', 'A bimanual wheeled robot begins precision assembly at a Tier-1 automotive supplier.'],
  ['2026', 'Production', 'From pilot to live production at F&P Mfg., with a global rollout in view.'],
]

const principles = [
  ['Reliability is the product.', 'A robot that works most of the time is a demo. We design for the last few nines first.'],
  ['Useful over flashy.', 'No backflips. We measure progress in parts assembled, not views.'],
  ['Humans stay in the loop.', 'Expert oversight is part of the system and how it keeps getting better.'],
]

export function CompanyPage() {
  return (
    <Page page="company">
      <PageHero eyebrow="COMPANY" title={<>Autonomy at scale.<br /><span className="muted">Grounded in research.</span></>} aside={<MediaFrame photo={photos.team} alt="The Autonomique team" label="MENLO PARK · MONTRÉAL"><LocationsArt /></MediaFrame>}>
        <p className="hero-description">We’re building the intelligence layer for the autonomous factory.</p>
        <p className="body-copy">Autonomique is a physical AI company spun out of SRI International. We bring decades of robotics research and a team with deep AI and deployment experience to the hardest manual work on the factory floor.</p>
      </PageHero>

      <section className="section-pad container grid md:grid-cols-[1fr_1.3fr] gap-16">
        <SectionHeading eyebrow="01 / OUR PATH" title={<>From the lab<br />to the line.</>} />
        <ol className="timeline">{timeline.map(([year, title, description]) => <li key={year}><span className="mono">{year}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section className="dark-band">
        <div className="container section-pad grid md:grid-cols-[1fr_1.3fr] gap-16">
          <SectionHeading eyebrow="02 / HOW WE WORK" title={<>High-tech.<br /><span className="muted">Down to earth.</span></>} />
          <div className="principles">{principles.map(([title, description], index) => <article className="principle" key={title}><span className="mono">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section-pad container">
        <SectionHeading eyebrow="03 / LEADERSHIP" title="The team." />
        <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((person) => <article className="person" key={person.name}><span className="person-initials" aria-hidden="true">{person.name.split(' ').map((part) => part[0]).join('')}</span><h3>{person.name}</h3><p className="person-role">{person.role}</p>{person.note && <p>{person.note}</p>}</article>)}
        </div>
        <div className="backers"><span className="eyebrow">BACKED BY</span>{backers.map((backer) => <span key={backer}>{backer}</span>)}</div>
      </section>

      <section id="careers" className="section-pad container careers grid md:grid-cols-[1fr_1.3fr] gap-16">
        <SectionHeading eyebrow="04 / CAREERS" title={<>Put robots<br />to real work.</>}>
          <p>Small team, hard problems, real deployments. We hire in Menlo Park and Montréal, hybrid.</p>
          <div className="hero-actions"><MagneticLink href={careersMailto}>Get in touch <ArrowUpRight size={18} /></MagneticLink></div>
        </SectionHeading>
        <div className="notes-list">{hiringAreas.map(([title, description]) => <a className="note-row" href={careersMailto} key={title}><span className="eyebrow">HIRING</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={24} /></a>)}</div>
      </section>

      <section className="closing container"><p className="eyebrow">WORK WITH US</p><h2>Partners, people,<br />and hard problems.</h2><div className="hero-actions"><MagneticLink href={partnerMailto}>Partner with us <ArrowUpRight size={18} /></MagneticLink><MagneticLink href={links.news} secondary>Latest news <ArrowUpRight size={18} /></MagneticLink></div></section>
    </Page>
  )
}
