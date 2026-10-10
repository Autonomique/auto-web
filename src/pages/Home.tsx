import { ArrowDown, ArrowRight, ArrowUpRight, Cpu, Eye, GitBranch, Hand, ShieldCheck, Wrench } from '@phosphor-icons/react'
import { MagneticLink } from '../components/MagneticLink'
import { Page, SectionHeading } from '../components/Layout'
import { ActGlyph, DeploymentArt, MediaFrame, PerceiveGlyph, ReasonGlyph, SceneConsole, TeleopArt } from '../components/Visuals'
import { articles, formatDate, industries, links, partnerMailto, photos } from '../content'

const partnership = articles[0]

export function HomePage() {
  return (
    <Page page="home">
      <section className="home-hero container grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot live" /> PHYSICAL AI · LIVE IN PRODUCTION</p>
          <h1>Human-like dexterity.<br /><span className="muted">Industrial reliability.</span></h1>
          <p className="hero-description">The intelligence layer for robots that reason, plan, and adapt on the line, not just in the lab.</p>
          <p className="body-copy">Autonomique builds physical AI that turns variable, high-mix manual work into automation you can depend on. Hardware-agnostic. Edge-native. Already running on a Tier-1 automotive production line.</p>
          <div className="hero-actions"><MagneticLink href={partnerMailto}>Partner with us <ArrowUpRight size={18} /></MagneticLink><a className="text-link" href="#platform">See the platform <ArrowDown size={17} /></a></div>
        </div>
        <div className="reveal reveal-later"><SceneConsole /></div>
        <div className="hero-footnote md:col-span-2"><span>NO BACKFLIPS. JUST WORK THAT SHIPS.</span><span>An SRI International spinout · Menlo Park &amp; Montréal</span></div>
      </section>

      <div className="spec-strip container"><span><Cpu size={20} /> EDGE-NATIVE</span><span><GitBranch size={20} /> HARDWARE-AGNOSTIC</span><span><Hand size={20} /> HUMAN-IN-THE-LOOP</span><span><ShieldCheck size={20} /> PRODUCTION-GRADE</span></div>

      <section className="section-pad container grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <SectionHeading eyebrow="01 / THE RELIABILITY GAP" title={<>85% right is a demo.<br /><span className="muted">Production needs more nines.</span></>}>
          <p>Manufacturers are short on skilled hands, and the work that’s left is the hardest to automate: variable parts, tight tolerances, multi-step assembly. Today’s options force a trade-off.</p>
        </SectionHeading>
        <div className="gap-table" role="table" aria-label="How Autonomique compares with existing automation">
          <div className="gap-row gap-head" role="row"><span role="columnheader"><span className="sr-only">Approach</span></span><span role="columnheader">Adapts to variation</span><span role="columnheader">Production reliability</span></div>
          <div className="gap-row" role="row"><span role="rowheader">Fixed automation</span><span role="cell" className="gap-no">Weeks to reprogram</span><span role="cell" className="gap-yes">Yes</span></div>
          <div className="gap-row" role="row"><span role="rowheader">Purely learned AI</span><span role="cell" className="gap-yes">Yes</span><span role="cell" className="gap-no">Data-hungry, hard to trust</span></div>
          <div className="gap-row gap-us" role="row"><span role="rowheader">Autonomique</span><span role="cell" className="gap-yes">Yes</span><span role="cell" className="gap-yes">Yes</span></div>
        </div>
      </section>

      <section id="platform" className="platform-section section-pad">
        <div className="container">
          <div className="horizontal-heading">
            <SectionHeading eyebrow="02 / THE PLATFORM" title={<>One stack.<br />Perceive, reason, act.</>} />
            <p>A unified intelligence layer that runs at the edge, on the robots you already trust.</p>
          </div>
          <div className="stack-grid grid md:grid-cols-3 gap-6">
            <article className="stack-card"><div className="stack-visual"><PerceiveGlyph /></div><p className="eyebrow"><Eye size={16} /> PERCEIVE</p><h3>Understands the scene.</h3><p>A semantic scene graph turns pixels into parts, tools, fixtures, and the relationships between them, updated in real time.</p></article>
            <article className="stack-card"><div className="stack-visual"><ReasonGlyph /></div><p className="eyebrow"><GitBranch size={16} /> REASON</p><h3>Plans the next move.</h3><p>A hybrid skills library composes multi-step workflows, choosing between learned and deterministic skills for each step.</p></article>
            <article className="stack-card"><div className="stack-visual"><ActGlyph /></div><p className="eyebrow"><Wrench size={16} /> ACT</p><h3>Executes with precision.</h3><p>Fast, precise, contact-rich manipulation across arms, bimanual systems, and mobile platforms, with no cloud round-trip.</p></article>
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="container section-pad grid md:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <SectionHeading eyebrow="03 / GENERALIST–SPECIALIST" title={<>A generalist that understands.<br /><span className="muted">Specialists that deliver.</span></>}>
            <p>One general model perceives and reasons about the whole task. Purpose-built specialists carry out each step with the repeatability a production line demands.</p>
            <p>The result: new tasks without starting over, using a fraction of the data and compute of purely learned approaches.</p>
          </SectionHeading>
          <div className="route-map">
            <div className="route-title"><span className="status-dot live" /><span>Generalist</span><small>PERCEPTION + REASONING</small></div>
            {[['01', 'Learned skills', 'Flexible where parts and positions vary.'], ['02', 'Deterministic skills', 'Exact where tolerances leave no room.'], ['03', 'Human expertise', 'Tele-op for the rare edge case, and a teacher for the next one.']].map(([number, title, description]) => <div className="route-row" key={number}><span className="mono">{number}</span><div><strong>{title}</strong><p>{description}</p></div><ArrowRight size={20} /></div>)}
            <p className="route-note">The generalist routes each step to the right specialist, and the library grows with every deployment.</p>
          </div>
        </div>
      </section>

      <section id="teleop" className="section-pad container grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <MediaFrame photo={photos.teleop} alt="An operator remotely controlling an industrial robot" label="SURGICAL-GRADE TELE-OP"><TeleopArt /></MediaFrame>
        <div>
          <SectionHeading eyebrow="04 / HUMAN IN THE LOOP" title={<>A safety net<br />that teaches.</>}>
            <p>Born from SRI’s telemanipulation research, our tele-op lets one expert guide a robot anywhere with the precision of being there. Every session becomes training data.</p>
          </SectionHeading>
          <ol className="ladder">
            <li><span className="mono">A</span><div><strong>Teleoperated</strong><p>Experts handle new and difficult tasks remotely.</p></div></li>
            <li><span className="mono">B</span><div><strong>Semi-autonomous</strong><p>Proven routines are codified as skills.</p></div></li>
            <li className="ladder-active"><span className="mono">C</span><div><strong>Autonomous</strong><p>Confidence earned, human oversight on call.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="container">
        <div className="proof-band grid md:grid-cols-[1fr_1fr]">
          <div className="proof-copy">
            <p className="eyebrow"><span className="status-dot live" /> 05 / IN PRODUCTION</p>
            <h2>From paid pilot<br />to the production line.</h2>
            <p>At F&amp;P Mfg., a Tier-1 automotive supplier, a bimanual wheeled robot running Autonomique performs precision-critical, multi-part assembly of chassis and suspension components. Its scope is expanding to new tasks, lines, and sites.</p>
            <div className="proof-stats"><div><strong>Tier-1</strong><span>Automotive supplier</span></div><div><strong>Live</strong><span>Production deployment</span></div><div><strong>Global</strong><span>Rollout planned</span></div></div>
            <a href={`${links.news}#${partnership.slug}`} className="text-link">Read the announcement <ArrowUpRight size={18} /></a>
          </div>
          <MediaFrame photo={photos.deployment} alt="An Autonomique-powered robot on the F&P Mfg. production line" label="TIER-1 AUTOMOTIVE · LIVE"><DeploymentArt /></MediaFrame>
        </div>
      </section>

      <section className="section-pad container">
        <div className="horizontal-heading"><SectionHeading eyebrow="06 / WHERE WE WORK" title={<>Built for the hard parts<br />of manufacturing.</>} /><a href={links.industries} className="text-link">All industries <ArrowUpRight size={18} /></a></div>
        <div className="industry-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry) => <a key={industry.id} className="industry-tile" href={`${links.industries}#${industry.id}`}><span className="mono">{industry.code}</span><h3>{industry.name}</h3><p>{industry.tasks.join(' · ')}</p><span className={`pill ${industry.status === 'In production' ? 'pill-live' : ''}`}><span className="status-dot" /> {industry.status.toUpperCase()}</span></a>)}
        </div>
      </section>

      <section className="section-pad container news-teaser">
        <div className="horizontal-heading"><SectionHeading eyebrow="07 / LATEST" title="News & notes." /><a href={links.news} className="text-link">All news <ArrowUpRight size={18} /></a></div>
        <div className="notes-list">
          {articles.slice(0, 3).map((article) => <a className="note-row" href={`${links.news}#${article.slug}`} key={article.slug}><span className="eyebrow">{article.category.toUpperCase()}{article.date ? ` · ${formatDate(article.date)}` : ''}</span><div><h3>{article.title}</h3><p>{article.dek}</p></div><ArrowUpRight size={24} /></a>)}
        </div>
      </section>

      <section className="closing container"><p className="eyebrow">STRATEGIC PARTNERSHIP PROGRAM</p><h2>Build the autonomous<br />factory with us.</h2><p className="closing-copy">We work with a small cohort of manufacturing leaders on their hardest manual tasks. If a task is variable, precise, and stubbornly manual, we want to hear about it.</p><div className="hero-actions"><MagneticLink href={partnerMailto}>Become a partner <ArrowUpRight size={18} /></MagneticLink><MagneticLink href={links.careers} secondary>Join the team <ArrowRight size={18} /></MagneticLink></div></section>
    </Page>
  )
}
