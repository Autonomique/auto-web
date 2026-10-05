import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BracketsCurly, Command, GithubLogo, Key, LockSimple, MagnifyingGlass, Sparkle, X, List } from '@phosphor-icons/react'
import { MagneticLink } from './components/MagneticLink'
import { LauncherPreview } from './components/LauncherPreview'

const repository = 'https://github.com/vktt/SuperSpot'
const roadmap = `${repository}/blob/main/docs/ROADMAP.md`
const base = import.meta.env.BASE_URL
const nemoUrl = `${base}nemo/`
const copyrightYear = new Date().getFullYear()

function Mark() {
  return <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 4h12c6 0 9 3 9 7 0 2-1 4-3 5 3 1 4 3 4 5 0 5-4 7-10 7H5V4zm6 6v4h6c2 0 3-1 3-2s-1-2-3-2h-6zm0 9v4h6c2 0 4-1 4-2s-2-2-4-2h-6z" fill="currentColor" fillRule="evenodd" /></svg>
}

function Header({ nemo }: { nemo: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-4">
        <a className="brand" href={nemo ? nemoUrl : base} aria-label={nemo ? 'Nemo home' : 'Baral Labs home'}>
          {nemo ? <MagnifyingGlass size={28} weight="bold" /> : <Mark />}
          <span>{nemo ? 'nemo' : <>baral<span className="brand-light"> labs</span></>}</span>
        </a>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <List size={24} />}</button>
        <nav id="main-navigation" className={`navigation ${open ? 'navigation-open' : ''}`} aria-label="Main navigation">
          {(nemo ? [['The toolkit', '#toolkit'], ['Your AI', '#your-ai'], ['Questions', '#questions']] : [['Experiments', '#experiments'], ['Our approach', '#approach'], ['Field notes', '#field-notes']]).map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={nemo ? repository : nemoUrl}>{nemo ? 'Follow on GitHub' : 'Meet Nemo'} <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>
  )
}

function Footer({ nemo }: { nemo: boolean }) {
  return (
    <footer className="site-footer container">
      <div className="footer-top"><a className="brand" href={base}><Mark /><span>baral<span className="brand-light"> labs</span></span></a><p>Small experiments.<br />Thoughtful tools.</p><div className="footer-links"><a href={nemo ? base : nemoUrl}>{nemo ? 'The lab' : 'Nemo'} <ArrowUpRight size={15} /></a><a href={repository}>GitHub <ArrowUpRight size={15} /></a><a href={roadmap}>Roadmap <ArrowUpRight size={15} /></a></div></div>
      <div className="footer-bottom"><span>© {copyrightYear} Baral Labs</span><span>Built in public. Proprietary software.</span><a href={`${repository}/blob/main/LICENSE`}>License <ArrowUpRight size={13} /></a><a href={`${base}licenses.txt`}>Third-party notices <ArrowUpRight size={13} /></a></div>
    </footer>
  )
}

function LabField() {
  return (
    <div className="lab-field" aria-label="An experiment moving from research to prototype to a useful tool" role="img">
      <div className="field-top"><span className="eyebrow">THE EXPERIMENT LOOP</span><span className="field-coordinate">BL / 001</span></div>
      <svg className="field-graphic" viewBox="0 0 480 380" fill="none" aria-hidden="true">
        <circle className="field-orbit" cx="240" cy="190" r="137" stroke="currentColor" strokeDasharray="2 12" />
        <circle cx="240" cy="190" r="92" stroke="currentColor" strokeOpacity=".2" />
        <path d="M28 190h424M240 25v330" stroke="currentColor" strokeOpacity=".12" />
        <path d="M103 190h137l97-97M240 190l96 96" stroke="currentColor" strokeOpacity=".65" />
        <circle cx="103" cy="190" r="6" fill="currentColor" />
        <circle cx="337" cy="93" r="6" fill="currentColor" />
        <circle cx="336" cy="286" r="6" fill="currentColor" />
        <rect x="203" y="153" width="74" height="74" rx="18" fill="#c5d798" />
        <path d="M5 4h12c6 0 9 3 9 7 0 2-1 4-3 5 3 1 4 3 4 5 0 5-4 7-10 7H5V4zm6 6v4h6c2 0 3-1 3-2s-1-2-3-2h-6zm0 9v4h6c2 0 4-1 4-2s-2-2-4-2h-6z" transform="translate(218 168) scale(1.4)" fill="#202622" fillRule="evenodd" />
        <text x="35" y="170" className="field-text">RESEARCH</text>
        <text x="345" y="76" className="field-text">PROTOTYPE</text>
        <text x="344" y="312" className="field-text">EVERYDAY</text>
      </svg>
      <div className="field-bottom"><span className="status-dot" /><span>Currently exploring</span><strong>Human × computer</strong></div>
    </div>
  )
}

function LabsPage() {
  return (
    <div className="labs-page">
      <Header nemo={false} />
      <main id="main">
        <section className="labs-hero container grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> AN INDEPENDENT EXPERIMENT LAB</p>
            <h1>AI experiments,<br /><span className="muted">in the open.</span></h1>
            <p className="hero-description">Ideas are a good start.<br />Useful tools are a better one.</p>
            <p className="body-copy">We’re Baral Labs. We explore what AI can do when it’s personal, practical, and built around the people using it. Then we build, share the decisions, and keep learning.</p>
            <div className="hero-actions"><MagneticLink href="#experiments">Explore the work <ArrowDown size={18} /></MagneticLink><a className="text-link" href={repository}>Follow the process <ArrowUpRight size={17} /></a></div>
          </div>
          <div className="reveal reveal-later"><LabField /></div>
          <div className="hero-footnote md:col-span-2"><span>LESS HYPE. MORE HANDS-ON.</span><span>Independent by choice. Curious by default.</span></div>
        </section>

        <section id="experiments" className="section-pad container">
          <div className="section-heading"><p className="eyebrow">01 / THE WORK</p><h2>From a question<br />to something you can use.</h2><p>Our first experiment starts with a familiar place: your Mac.</p></div>
          <a href={nemoUrl} className="experiment-link grid md:grid-cols-[1.1fr_1fr]">
            <div className="experiment-copy"><span className="pill"><span className="status-dot" /> IN DEVELOPMENT</span><div className="experiment-title"><MagnifyingGlass size={42} weight="bold" /><h3>nemo</h3></div><p className="experiment-tagline">Your Mac, a little closer.</p><p>A native launcher and AI assistant. Find things, run commands, and work with the AI you choose. Without turning your desktop into another browser tab.</p><span className="text-link">Step inside Nemo <ArrowUpRight size={20} /></span></div>
            <div className="experiment-art" aria-hidden="true"><div className="mini-launcher"><div className="mini-search"><MagnifyingGlass size={19} /><span>What’s next?</span><kbd>⌥ Space</kbd></div><div className="mini-result"><Command size={20} /><span>One shortcut. Your whole Mac.</span><ArrowBendIcon /></div><div className="mini-result"><Sparkle size={20} /><span>Your models. Your keys.</span></div><div className="mini-footer">NATIVE SWIFT <span>LOCAL-FIRST</span></div></div><span className="art-label">EXPERIMENT 001 / macOS</span></div>
          </a>
        </section>

        <section id="approach" className="approach-section section-pad">
          <div className="container grid md:grid-cols-[1fr_1.3fr] gap-16">
            <div className="section-heading"><p className="eyebrow">02 / HOW WE THINK</p><h2>Not AI<br />for AI’s sake.</h2><p>Technology should make room for your work, not ask you to work around it.</p></div>
            <div className="principles">
              {[['01', 'Useful before impressive.', 'Start with a real friction point. Build the smallest thing that meaningfully helps. Keep what works.'], ['02', 'Personal doesn’t mean collected.', 'Local-first foundations. Explicit permissions. Your own AI providers. Privacy is an architecture decision, not a badge.'], ['03', 'Show the work.', 'Share the code, the roadmap, and the trade-offs. An experiment is more valuable when you can see how it got there.']].map(([number, title, description]) => <article className="principle" key={number}><span className="mono">{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="field-notes" className="section-pad container">
          <div className="section-heading horizontal-heading"><div><p className="eyebrow">03 / FIELD NOTES</p><h2>An open notebook.</h2></div><p>Not a launch announcement feed.<br />The decisions behind the product.</p></div>
          <div className="notes-list">
            {[['DESIGN', 'Why a native Mac app?', 'SwiftUI, AppKit, and a launcher that belongs on your desktop.', `${repository}/blob/main/project.yml`], ['ARCHITECTURE', 'Local first. AI by choice.', 'Where data lives, how keys are stored, and what goes to a provider.', `${repository}/blob/main/README.md#ai`], ['DIRECTION', 'What we’re building next.', 'The iOS foundation, a Mac agent, and compatible extensions are on the roadmap.', roadmap]].map(([tag, title, description, href]) => <a className="note-row" href={href} key={title}><span className="eyebrow">{tag}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={24} /></a>)}
          </div>
        </section>
        <section className="labs-closing container"><p className="eyebrow">KEEP AN EYE ON THE LAB</p><h2>Good questions.<br />Better experiments.</h2><MagneticLink href={repository}>Follow on GitHub <GithubLogo size={20} /></MagneticLink><p>No mailing list. No noise. Just the work.</p></section>
      </main>
      <Footer nemo={false} />
    </div>
  )
}

function ArrowBendIcon() {
  return <span className="mono">↵</span>
}

const faqs = [
  ['Can I download Nemo today?', 'Nemo is in early development. This website does not offer a signed, notarized download. Developers can follow the repository’s build instructions with macOS 14+, Xcode 16+, and XcodeGen.'],
  ['Is Nemo open source?', 'The work and source are publicly visible, but Nemo is proprietary software, © Baral Labs, all rights reserved. Public development is not an open-source license. See the repository’s LICENSE for the terms.'],
  ['Does everything stay on my Mac?', 'Local search uses macOS services and local data. AI prompts and any context you choose to submit go directly to your configured provider. Web suggestions, web results, and currency-rate updates also use network services. Local model setups are available through Ollama or LM Studio.'],
  ['Which AI providers can I use?', 'OpenAI, Anthropic, Gemini, OpenRouter, OpenAI-compatible endpoints, Ollama, LM Studio, and GitHub Copilot through its CLI. Apple Intelligence on-device models require a supported Mac and macOS 26 or later. Configure providers in Nemo’s Settings; API keys stay in Keychain. Provider fees and availability are separate.'],
  ['Can I use extensions or an iPhone app?', 'Raycast-format script commands and Apple Shortcuts work today. A Raycast-compatible extension host, the iOS app, cross-device sync, and a multi-step Mac agent are planned—not available features. Follow the roadmap for their status.'],
  ['What permissions does Nemo need?', 'Permissions are requested when relevant: Contacts and EventKit for their scopes; Accessibility for pasting and selected-text features; Automation for browser and Finder actions; Full Disk Access for browser data; Screen Recording for screen-text recognition. You choose what to enable.'],
]

function NemoPage() {
  return (
    <div className="nemo-page">
      <Header nemo />
      <main id="main">
        <section className="nemo-hero container grid md:grid-cols-[1fr_1.15fr] items-center gap-12">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> NEMO / BY BARAL LABS</p>
            <h1>Less switching.<br /><span className="muted">More doing.</span></h1>
            <p className="hero-description">Your Mac has a new starting point.</p>
            <p className="body-copy">Find a file. Join a meeting. Ask your AI. Nemo brings the things you do every day into one keyboard-first, native Mac launcher.</p>
            <div className="hero-actions"><MagneticLink href={repository}>Follow development <ArrowUpRight size={18} /></MagneticLink><a href="#toolkit" className="text-link">Take a closer look <ArrowDown size={17} /></a></div>
            <p className="availability"><span className="status-dot" /> Early development · macOS 14+<br /><span>No public signed download yet. Build instructions on GitHub.</span></p>
          </div>
          <div className="reveal reveal-later"><LauncherPreview /></div>
        </section>
        <div className="native-strip container"><span><Command size={20} /> KEYBOARD FIRST</span><span><BracketsCurly size={20} /> NATIVE SWIFT</span><span><LockSimple size={20} /> LOCAL-FIRST</span><span><Key size={20} /> YOUR AI KEYS</span></div>

        <section id="toolkit" className="section-pad container">
          <div className="section-heading"><p className="eyebrow">01 / YOUR EVERYDAY TOOLKIT</p><h2>Less hunting around.<br />More getting somewhere.</h2><p>Small, useful things. Right where you need them.</p></div>
          <div className="toolkit-grid grid md:grid-cols-[1.25fr_1fr] gap-6">
            <article className="tool-feature feature-search"><div className="feature-visual" aria-hidden="true"><span className="scope-chip">ff <span>Tab</span></span><div className="file-lines"><span><FileGlyph /> project-notes.md <small>Documents</small></span><span><FileGlyph /> design-review.pdf <small>Downloads</small></span><span><FileGlyph /> ideas.txt <small>Desktop</small></span></div></div><p className="eyebrow">FIND YOUR WAY</p><h3>Your Mac, searchable.</h3><p>Apps, files, contacts, browser tabs, bookmarks, calendar, and reminders. Focus a scope with a keyword and Tab. Preview files or jump straight in.</p></article>
            <article className="tool-feature feature-work"><div className="feature-visual command-visual" aria-hidden="true"><kbd>⌥</kbd><kbd>Space</kbd><span className="command-caption">A shorter path to what’s next.</span></div><p className="eyebrow">STAY IN FLOW</p><h3>Do the little things faster.</h3><p>Clipboard history, calculations, unit conversions, text transforms, shell commands, scripts, and Shortcuts. Give favorites their own hotkeys.</p></article>
          </div>
          <div className="scope-line"><span className="eyebrow">A FEW WAYS IN</span><span><code>ff</code> Files</span><span><code>cal</code> Calendar</span><span><code>vv</code> Clipboard</span><span><code>ai</code> Ask AI</span><span><code>&gt;</code> Shell</span></div>
        </section>

        <section id="your-ai" className="ai-section section-pad">
          <div className="container grid md:grid-cols-[1fr_1.1fr] gap-16 items-center">
            <div className="section-heading"><p className="eyebrow">02 / YOUR AI, YOUR TERMS</p><h2>A thinking partner.<br />Not a walled garden.</h2><p>Ask a quick question in the launcher, continue in a saved chat, or bring AI to the text cursor in another app.</p><p>Use your own provider accounts and API keys, or connect a local model. Keys live in macOS Keychain. Requests go straight to the provider you configure.</p><a href={`${repository}/blob/main/README.md#ai`} className="text-link">Explore AI setup <ArrowUpRight size={18} /></a></div>
            <div className="provider-map"><div className="provider-map-title"><Sparkle size={24} /><span>Nemo</span><small>ONE NATIVE INTERFACE</small></div><div className="provider-row"><span className="mono">01</span><div><strong>Cloud, by choice</strong><p>OpenAI · Anthropic · Gemini · OpenRouter<br />OpenAI-compatible endpoints · GitHub Copilot CLI</p></div><ArrowRight size={20} /></div><div className="provider-row"><span className="mono">02</span><div><strong>Local, if you prefer</strong><p>Ollama · LM Studio</p></div><ArrowRight size={20} /></div><div className="provider-row"><span className="mono">03</span><div><strong>On-device, where supported</strong><p>Apple Intelligence · macOS 26+</p></div><ArrowRight size={20} /></div><p className="provider-note">Cloud providers receive the prompts and context you submit. Provider costs and model requirements apply.</p></div>
          </div>
        </section>

        <section className="privacy-section section-pad container grid md:grid-cols-[1fr_1.15fr] gap-16">
          <div className="section-heading"><p className="eyebrow">03 / THOUGHTFUL BY DEFAULT</p><h2>It’s your computer.<br />Let’s keep it that way.</h2></div>
          <div className="principles">{[['Built for the Mac.', 'SwiftUI and AppKit, not a web app in a desktop wrapper. Spotlight, Contacts, and EventKit do the work they’re good at.'], ['Permissions with a purpose.', 'Enable only the features you want. Nemo asks macOS for access when a scope needs it, rather than asking for everything up front.'], ['No telemetry by design.', 'No analytics or tracking are built into this website. Nemo’s stated direction is local-first with no telemetry by default—not a promise that every feature is offline.']].map(([title, description]) => <article className="principle" key={title}><LockSimple size={22} /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </section>

        <section className="roadmap-band container"><div><p className="eyebrow">STILL AN EXPERIMENT. ALREADY USEFUL.</p><h2>Built today.<br />Room for tomorrow.</h2></div><div><p>The native Mac launcher and AI tools are here. Next on the roadmap: an iOS foundation, an agent that can act on your Mac, and Raycast-compatible extensions.</p><span className="pill">PLANNED, NOT SHIPPING</span><a href={roadmap} className="text-link">Read the roadmap <ArrowUpRight size={18} /></a></div></section>

        <section id="questions" className="section-pad container grid md:grid-cols-[.8fr_1.2fr] gap-16">
          <div className="section-heading"><p className="eyebrow">04 / GOOD QUESTIONS</p><h2>A little more<br />before you start.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </section>
        <section className="nemo-closing container"><span className="eyebrow">MAKE A LITTLE ROOM FOR FOCUS</span><h2>Your next move<br />starts with Nemo.</h2><div className="hero-actions"><MagneticLink href={repository}>See the project <GithubLogo size={20} /></MagneticLink><MagneticLink href={`${repository}#getting-started`} secondary>Build from source <ArrowUpRight size={18} /></MagneticLink></div><p>macOS 14+ · Early development · Proprietary software</p></section>
      </main>
      <Footer nemo />
    </div>
  )
}

function FileGlyph() {
  return <BracketsCurly size={19} />
}

export default function App() {
  const nemo = /\/nemo(?:\/|\/index\.html)?$/.test(window.location.pathname)
  return <><a href="#main" className="skip-link">Skip to content</a>{nemo ? <NemoPage /> : <LabsPage />}</>
}
