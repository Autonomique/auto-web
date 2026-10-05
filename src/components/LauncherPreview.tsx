'use client'

import { useState } from 'react'
import { ArrowBendDownLeft, ArrowUpRight, ClipboardText, FileText, MagnifyingGlass, Sparkle, Terminal } from '@phosphor-icons/react'

const samples = [
  { title: 'Design notes', subtitle: 'Files · Documents / Nemo', kind: 'file', keywords: 'design notes files ff', detail: 'Find files by name or contents using Spotlight. Quick Look, reveal in Finder, or open in your editor.' },
  { title: 'Open Terminal Here', subtitle: 'Command · Current Finder folder', kind: 'terminal', keywords: 'terminal command shell', detail: 'Jump from the front Finder window into your chosen terminal. Less folder hunting, more doing.' },
  { title: 'Search Contacts', subtitle: 'Scope · cc + Tab', kind: 'search', keywords: 'contacts people cc', detail: 'Search names, companies, and contact details locally. macOS asks for Contacts access when needed.' },
  { title: 'Search Calendar', subtitle: 'Scope · cal + Tab', kind: 'search', keywords: 'calendar meetings cal', detail: 'See upcoming events and join a meeting from the launcher. Calendar access is permission-based.' },
]
const providers = [
  { id: 'cloud', label: 'Your cloud provider', description: 'OpenAI, Anthropic, Gemini, OpenRouter, and compatible endpoints. Your prompts go directly to the provider you configure.' },
  { id: 'local', label: 'Ollama / LM Studio', description: 'Connect a local model server on your Mac. Model availability and performance depend on your setup.' },
  { id: 'apple', label: 'Apple Intelligence', description: 'On-device models on supported Macs with macOS 26 or later and Apple Intelligence enabled.' },
]
const modes = ['Search', 'Ask AI', 'Clipboard'] as const
type Mode = typeof modes[number]

export function LauncherPreview() {
  const [mode, setMode] = useState<Mode>('Search')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [detail, setDetail] = useState('')
  const [provider, setProvider] = useState('local')
  const results = samples.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(query.trim().toLowerCase()))
  const activeProvider = providers.find((item) => item.id === provider)!

  return (
    <div className="preview-wrap">
      <div className="preview-tabs" role="group" aria-label="Choose a product preview">
        {modes.map((item) => (
          <button key={item} aria-pressed={mode === item} onClick={() => {
            setMode(item); setDetail(''); setQuery(''); setSelected(0)
          }}>{item}</button>
        ))}
      </div>
      <div className="launcher">
        <div className="launcher-topline"><span className="status-dot" /> Nemo <span>INTERACTIVE PREVIEW</span></div>
        {mode === 'Search' && (
          <>
            <label className="sr-only" htmlFor="demo-search">Search sample commands</label>
            <div className="launcher-input">
              <MagnifyingGlass size={22} aria-hidden="true" />
              <input id="demo-search" value={query} placeholder="Try “files” or “terminal”…" aria-describedby="demo-help" onChange={(event) => {
                setQuery(event.target.value); setSelected(0); setDetail('')
              }} onKeyDown={(event) => {
                if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                  event.preventDefault()
                  if (results.length) setSelected((index) => (index + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length)
                }
                if (event.key === 'Enter' && results[selected]) setDetail(results[selected].detail)
                if (event.key === 'Escape') { setQuery(''); setSelected(0); setDetail('') }
              }} />
              <kbd>⌥ Space</kbd>
            </div>
            <p className="launcher-label" id="demo-help">SAMPLE RESULTS · ↑ ↓ TO EXPLORE, ENTER TO PREVIEW</p>
            <ul className="launcher-results">
              {results.map((item, index) => (
                <li key={item.title}>
                  <button className={selected === index ? 'selected' : ''} onFocus={() => setSelected(index)} onClick={() => {
                    setSelected(index); setDetail(item.detail)
                  }}>
                    <span className="result-icon">{item.kind === 'terminal' ? <Terminal size={22} /> : item.kind === 'file' ? <FileText size={22} /> : <MagnifyingGlass size={22} />}</span>
                    <span><strong>{item.title}</strong><small>{item.subtitle}</small></span>
                    <ArrowBendDownLeft size={18} className="result-arrow" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
            {results.length === 0 && <div className="preview-empty"><MagnifyingGlass size={28} /><strong>No match in this small demo.</strong><p>The app searches your Mac. This page only filters sample commands.</p><button onClick={() => { setQuery(''); setSelected(0) }}>Reset search <ArrowUpRight size={16} /></button></div>}
            <div className="preview-detail" role="status">{detail || 'Your Mac. One place to start.'}</div>
          </>
        )}
        {mode === 'Ask AI' && (
          <div className="ai-preview">
            <div className="ai-prompt"><Sparkle size={22} /><span>AI that works on your terms.</span></div>
            <label htmlFor="demo-provider">Choose a provider setup</label>
            <select id="demo-provider" value={provider} onChange={(event) => setProvider(event.target.value)}>
              {providers.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
            <div className="ai-answer" role="status"><span className="eyebrow">PROVIDER NOTES</span><p>{activeProvider.description}</p></div>
            <div className="preview-detail">Illustration only. No AI requests or API keys on this website.</div>
          </div>
        )}
        {mode === 'Clipboard' && (
          <div className="clipboard-preview">
            <div className="ai-prompt"><ClipboardText size={22} /><span>A little less “where did I copy that?”</span></div>
            {[['Design review notes', 'Text · sample item'], ['https://baral-labs.com', 'Link · sample item'], ['make run', 'Command · sample item']].map(([title, subtitle], index) => (
              <div className="clipboard-row" key={title}><span><strong>{title}</strong><small>{subtitle}</small></span><kbd>⌘{index + 1}</kbd></div>
            ))}
            <div className="preview-detail">Sample items only. This website never reads your clipboard.</div>
          </div>
        )}
        <div className="launcher-footer"><span>Native to your Mac</span><span>Keyboard first <ArrowBendDownLeft size={14} /></span></div>
      </div>
      <div className="preview-caption"><span className="caption-line" /> A web illustration, not a screenshot. Nemo itself is native Swift.</div>
    </div>
  )
}
