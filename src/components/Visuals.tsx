import { useEffect, useState, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { photoUrl } from '../content'

const phases = [
  { id: 'PERCEIVE', detail: 'Scene graph updated · 3 objects, 2 relations' },
  { id: 'REASON', detail: 'Plan: align → insert → seat → verify' },
  { id: 'ACT', detail: 'Bimanual insert in progress · within tolerance' },
]

function Arm({ side }: { side: 'left' | 'right' }) {
  const m = side === 'left' ? 1 : -1
  const x = (v: number) => (side === 'left' ? v : 520 - v)
  return (
    <g className={`arm arm-${side}`}>
      <rect x={x(150) - 32} y="0" width="64" height="12" rx="2" className="arm-mount" />
      <path d={`M${x(150)} 22 L${x(108)} 128 L${x(196)} 214`} className="arm-link" />
      <path d={`M${x(150)} 22 L${x(108)} 128 L${x(196)} 214`} className="arm-core" />
      <circle cx={x(150)} cy="22" r="11" className="arm-joint" />
      <circle cx={x(108)} cy="128" r="10" className="arm-joint" />
      <circle cx={x(196)} cy="214" r="8" className="arm-joint" />
      <path d={`M${x(196) - 10 * m} 222 l${-2 * m} 22 M${x(196) + 10 * m} 222 l${2 * m} 22`} className="arm-finger" />
    </g>
  )
}

export function SceneConsole() {
  const reducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => setPhase((current) => (current + 1) % phases.length), 2600)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  return (
    <figure className="console" aria-label="Illustration: a bimanual robot cell with a live scene graph labelling parts and the relations between them" role="img">
      <div className="console-top"><span className="eyebrow"><span className="status-dot live" /> SCENE GRAPH · LIVE</span><span className="console-coordinate">CELL 03 / EDGE</span></div>
      <svg className="console-graphic" viewBox="0 0 520 360" fill="none" aria-hidden="true">
        <defs>
          <pattern id="console-grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" stroke="currentColor" strokeOpacity=".07" /></pattern>
          <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c5d798" stopOpacity="0" /><stop offset="1" stopColor="#c5d798" stopOpacity=".18" /></linearGradient>
        </defs>
        <rect width="520" height="360" fill="url(#console-grid)" />
        <Arm side="left" />
        <Arm side="right" />
        <rect x="140" y="296" width="240" height="44" rx="4" className="fixture" />
        <path d="M152 318h216" stroke="currentColor" strokeOpacity=".15" strokeDasharray="3 6" />
        <rect x="190" y="268" width="56" height="28" rx="3" className="part" />
        <circle cx="218" cy="282" r="6" className="part-hole" />
        <circle cx="300" cy="280" r="12" className="part" />
        <circle cx="300" cy="280" r="5" className="part-hole" />
        <g className="detections">
          <path d="M180 260v-6h8M248 254h8v6M256 300v6h-8M188 306h-8v-6" />
          <path d="M282 258v-6h8M310 252h8v6M318 302v6h-8M290 308h-8v-6" />
        </g>
        <g className="relations">
          <path d="M218 268 C 230 230, 280 230, 300 268" />
          <path d="M218 296 L 260 330" />
        </g>
        <g className="graph-nodes">
          <circle cx="218" cy="282" r="3.5" /><circle cx="300" cy="280" r="3.5" /><circle cx="260" cy="330" r="3.5" />
        </g>
        <text x="174" y="262" textAnchor="end" className="console-text">BRACKET · 0.997</text>
        <text x="326" y="262" className="console-text">BUSHING · 0.994</text>
        <text x="236" y="232" className="console-text console-relation">INSERT_INTO</text>
        <text x="268" y="352" className="console-text console-relation">ALIGNED_TO · FIXTURE_02</text>
        <rect className="scanline" x="0" y="0" width="520" height="70" fill="url(#scan)" />
      </svg>
      <div className="console-phases" aria-hidden="true">{phases.map((item, index) => <span key={item.id} className={index === phase ? 'active' : ''}>{item.id}</span>)}</div>
      <div className="console-bottom"><span className="status-dot live" /><span aria-live="off">{phases[phase].detail}</span></div>
    </figure>
  )
}

export function PerceiveGlyph() {
  return (
    <svg viewBox="0 0 300 160" className="glyph" aria-hidden="true" fill="none">
      <path d="M60 50 150 30 240 60M60 50l40 70 50-90M100 120h110l30-60M150 30l60 90" className="glyph-edge" />
      {[[60, 50], [150, 30], [240, 60], [100, 120], [210, 120]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index === 1 ? 9 : 6} className={index === 1 ? 'glyph-node-strong' : 'glyph-node'} />)}
      <text x="162" y="22" className="glyph-text">PART</text><text x="216" y="140" className="glyph-text">FIXTURE</text><text x="30" y="40" className="glyph-text">TOOL</text>
    </svg>
  )
}

export function ReasonGlyph() {
  return (
    <div className="skill-glyph" aria-hidden="true">
      <span className="skill-goal">GOAL · seat part in fixture</span>
      <div className="skill-row">{['locate', 'grasp', 'align', 'insert', 'verify'].map((skill, index) => <span key={skill} className={index === 3 ? 'skill-chip active' : 'skill-chip'}>{skill}</span>)}</div>
      <span className="skill-caption">LEARNED + DETERMINISTIC SKILLS</span>
    </div>
  )
}

export function ActGlyph() {
  return (
    <svg viewBox="0 0 300 160" className="glyph" aria-hidden="true" fill="none">
      <path d="M10 112 C 70 112, 90 46, 150 46 S 230 98, 290 70" className="glyph-band" />
      <path d="M10 112 C 70 112, 90 46, 150 46 S 230 98, 290 70" className="glyph-path" />
      <circle cx="150" cy="46" r="6" className="glyph-node-strong" />
      <path d="M10 140h280" className="glyph-edge" />
      <text x="10" y="155" className="glyph-text">TRAJECTORY</text><text x="214" y="155" className="glyph-text">TOLERANCE BAND</text>
    </svg>
  )
}

export function DeploymentArt() {
  return (
    <svg viewBox="0 0 560 360" className="art-svg" fill="none" role="img" aria-label="Illustration: a wheeled, two-armed robot working at an assembly line">
      <defs><pattern id="deploy-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="currentColor" strokeOpacity=".08" /></pattern></defs>
      <rect width="560" height="360" fill="url(#deploy-grid)" />
      <path d="M0 296h560" stroke="currentColor" strokeOpacity=".35" />
      <rect x="300" y="196" width="240" height="18" rx="3" className="art-solid" />
      <path d="M318 214v82M522 214v82" stroke="currentColor" strokeOpacity=".4" strokeWidth="3" />
      {[340, 400, 460].map((x) => <rect key={x} x={x} y="176" width="36" height="20" rx="2" className="art-part" />)}
      <rect x="120" y="256" width="120" height="30" rx="8" className="art-solid" />
      <circle cx="146" cy="292" r="10" className="art-wheel" /><circle cx="214" cy="292" r="10" className="art-wheel" />
      <rect x="160" y="150" width="40" height="106" rx="6" className="art-solid" />
      <rect x="146" y="102" width="68" height="52" rx="10" className="art-solid" />
      <rect x="160" y="118" width="40" height="10" rx="5" className="art-eye" />
      <path d="M210 168 L262 150 L330 182" className="art-arm" />
      <path d="M210 190 L268 206 L338 196" className="art-arm" />
      <circle cx="262" cy="150" r="6" className="art-joint" /><circle cx="268" cy="206" r="6" className="art-joint" />
      <path d="M342 176h18M342 188h18" className="art-detect" />
      <text x="24" y="40" className="art-text">LINE 04 · CHASSIS &amp; SUSPENSION</text>
      <text x="24" y="58" className="art-text muted-text">MULTI-PART ASSEMBLY · PRODUCTION</text>
    </svg>
  )
}

export function TeleopArt() {
  return (
    <svg viewBox="0 0 560 300" className="art-svg" fill="none" role="img" aria-label="Illustration: a remote operator station linked to a robot cell">
      <rect x="40" y="70" width="170" height="110" rx="10" className="art-solid" />
      <rect x="54" y="84" width="142" height="82" rx="4" className="art-screen" />
      <path d="M90 196h70M125 180v16" stroke="currentColor" strokeOpacity=".5" strokeWidth="3" />
      <path d="M215 126 C 280 60, 300 190, 360 126" className="art-link" />
      <circle cx="288" cy="126" r="5" className="art-joint" />
      <rect x="360" y="70" width="160" height="150" rx="10" className="art-cell" />
      <path d="M440 82v40l-30 34M440 122l30 34" className="art-arm" />
      <circle cx="440" cy="122" r="6" className="art-joint" />
      <rect x="398" y="186" width="84" height="16" rx="3" className="art-part" />
      <text x="40" y="232" className="art-text">REMOTE EXPERT</text>
      <text x="360" y="244" className="art-text">ROBOT CELL · ANYWHERE</text>
      <text x="236" y="40" className="art-text muted-text">LOW-LATENCY LINK</text>
    </svg>
  )
}

export function LocationsArt() {
  return (
    <svg viewBox="0 0 560 300" className="art-svg" fill="none" role="img" aria-label="Illustration: Autonomique locations in Menlo Park and Montréal">
      <defs><pattern id="loc-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="currentColor" fillOpacity=".14" /></pattern></defs>
      <rect width="560" height="300" fill="url(#loc-dots)" />
      <path d="M110 200 C 220 40, 360 40, 450 120" className="art-link" />
      <circle cx="110" cy="200" r="8" className="art-joint" /><circle cx="450" cy="120" r="8" className="art-joint" />
      <text x="70" y="232" className="art-text">MENLO PARK, CA</text>
      <text x="408" y="152" className="art-text">MONTRÉAL, QC</text>
    </svg>
  )
}

export function MediaFrame({ photo, alt, label, children }: { photo?: string, alt: string, label: string, children: ReactNode }) {
  return (
    <figure className="media-frame">
      {photo ? <img src={photoUrl(photo)} alt={alt} loading="lazy" /> : children}
      <figcaption>{label}</figcaption>
    </figure>
  )
}
