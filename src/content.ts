export const base = import.meta.env.BASE_URL

export const links = {
  home: base,
  platform: `${base}#platform`,
  industries: `${base}industries/`,
  news: `${base}news/`,
  company: `${base}company/`,
  careers: `${base}company/#careers`,
}

export const contactEmail = 'info@autonomique.ai'
export const partnerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent('Strategic Partnership Program')}`
export const careersMailto = `mailto:${contactEmail}?subject=${encodeURIComponent('Joining Autonomique')}`
export const originalSite = 'https://www.autonomique.ai'

/**
 * Optional photography. Drop files into `public/images/` and set the file name
 * here (for example `deployment: 'fnp-line.jpg'`). Until a photo is set, the
 * page shows an original illustration in its place.
 */
export const photos: Record<'deployment' | 'teleop' | 'team', string | undefined> = {
  deployment: undefined,
  teleop: undefined,
  team: undefined,
}

export const photoUrl = (name: string) => `${base}images/${name}`

export type Industry = {
  id: string
  code: string
  name: string
  status: 'In production' | 'Engaging partners'
  headline: string
  summary: string
  tasks: string[]
}

export const industries: Industry[] = [
  {
    id: 'automotive',
    code: 'AUT',
    name: 'Automotive',
    status: 'In production',
    headline: 'Multi-part assembly at line speed.',
    summary: 'Precision-critical assembly on live Tier-1 production lines, where every part varies a little and every cycle has to land.',
    tasks: ['Multi-part assembly', 'Kitting', 'In-line checks'],
  },
  {
    id: 'electronics',
    code: 'ELX',
    name: 'Electronics',
    status: 'Engaging partners',
    headline: 'Fine manipulation, high mix.',
    summary: 'Small parts, tight tolerances, and product changes that would stall fixed automation for weeks.',
    tasks: ['PCB assembly', 'Connector insertion', 'High-mix kitting'],
  },
  {
    id: 'aerospace',
    code: 'AER',
    name: 'Aerospace',
    status: 'Engaging partners',
    headline: 'Precision with a paper trail.',
    summary: 'Low-volume, high-consequence work where traceability matters as much as the motion itself.',
    tasks: ['Precision assembly', 'Test preparation', 'Traceable workflows'],
  },
  {
    id: 'regulated',
    code: 'REG',
    name: 'Pharma & regulated',
    status: 'Engaging partners',
    headline: 'Hands in places people shouldn’t be.',
    summary: 'Our tele-operation roots come from sterile and hazardous environments. Remote expertise, without stepping into the cleanroom.',
    tasks: ['Cleanroom handling', 'Remote operation', 'Compliance-ready logs'],
  },
]

export const team = [
  { name: 'Vikrant Tomar', role: 'Co-founder & CEO', note: 'PhD in AI. Previously co-founded Fluent.ai.' },
  { name: 'Arash Radmoghadam', role: 'Co-founder & CTO' },
  { name: 'Sean Xu', role: 'Co-founder' },
  { name: 'Robin Zheng', role: 'Head of North American Sales', note: 'Robotics market development and commercialization.' },
]

export const backers = ['Inovia Capital', 'Innovobot', 'Garage Capital', 'Robotics founders & operators']

export const hiringAreas = [
  ['Manipulation & physical AI', 'Bimanual manipulation, learned policies, and end-to-end autonomy on real hardware.'],
  ['Perception & autonomy', 'Production-grade perception, scene understanding, and the bridge to planning.'],
  ['Robotics systems software', 'Core runtime, data pipelines, and sim-to-real on the factory floor.'],
  ['Product & go-to-market', 'Turning hard deployments into a repeatable platform.'],
]

export type Article = {
  slug: string
  category: 'Announcement' | 'Perspective' | 'Company' | 'Research' | 'Team'
  date?: string
  title: string
  dek: string
  body: string[]
  source?: { label: string, href: string }
}

export const articles: Article[] = [
  {
    slug: 'autonomique-fnp-strategic-partnership',
    category: 'Announcement',
    date: '2026-06-17',
    title: 'Announcing Autonomique and F&P Mfg. partnership',
    dek: 'Our AI-powered robots are graduating from a paid pilot to live production at a Tier-1 automotive supplier.',
    body: [
      'Autonomique and F&P Mfg., a Tier-1 automotive supplier and subsidiary of F.tech Inc. (TYO: 7212), have entered a strategic partnership. After a paid pilot that began in fall 2025, Autonomique-powered robots are moving into live production inside F&P’s manufacturing operations.',
      'The program started with a bi-manual, wheeled robot performing precision-critical, multi-part assembly of chassis and suspension components. Consistent results in the pilot led to an expanded scope and additional tasks on real production lines.',
      'Manufacturers are facing labor shortages, rising costs, and growing product complexity: gaps that fixed-function automation struggles to fill. Our Generalist–Specialist architecture lets robots take on new tasks without major retraining, pairing human-like adaptability with industrial reliability and precision.',
      'Because the platform is hardware-agnostic, each deployment becomes a stepping stone to the next task, line, and site. Together with F&P, we are building toward a broader rollout across F.tech’s global network of factories.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/autonomique-fnp-strategic-partnership` },
  },
  {
    slug: 'bringing-physical-ai-to-the-factory-floor-why-we-invested-in-autonomique',
    category: 'Perspective',
    date: '2026-06-16',
    title: 'Bringing physical AI to the factory floor: why we invested in Autonomique',
    dek: 'An investor’s view from Innovobot on why “85% right” is not enough, and what it takes to close the reliability gap.',
    body: [
      'Factories are short on skilled people. That means lost contracts, slower lines, and stalled investment in new technology. Classic automation offers two imperfect options: rigid, kinematics-based robots that are precise but brittle, or flexible, vision-heavy AI systems that are adaptable but slow, data-hungry, and hard to trust.',
      'Physical AI must perceive, reason, and act in the real world, with real parts, real uncertainty, and real safety requirements. In manufacturing, being right 85% of the time is a demo. Production needs reliability that approaches 99.99%.',
      'Autonomique brings perception, reasoning, and action together in a single platform designed for that bar, and it needs far less training data and compute than purely learned approaches. Moving from pilot to live production at a Tier-1 automotive supplier is the step where most robotics projects stall. This team crossed it.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/bringing-physical-ai-to-the-factory-floor-why-we-invested-in-autonomique` },
  },
  {
    slug: 'autonomique-welcomes-robin-zheng-as-head-of-north-american-sales',
    category: 'Team',
    title: 'Autonomique welcomes Robin Zheng as Head of North American Sales',
    dek: 'Robin joins to lead our commercial work with manufacturers across North America.',
    body: [
      'We are pleased to welcome Robin Zheng as Head of North American Sales. Robin brings deep experience in international business, market development, robotics, and bringing emerging technologies to market.',
      'Robin will lead our work with North American manufacturers who are ready to move hard, variable tasks from manual stations to robots that can reason, plan, and adapt on the line.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/autonomique-welcomes-robin-zheng-as-head-of-north-american-sales` },
  },
  {
    slug: 'from-avsr-ai-to-autonomique',
    category: 'Company',
    title: 'From Avsr AI to Autonomique',
    dek: 'A new name for the next step in our mission: truly autonomous robots for the real world.',
    body: [
      'Today we are announcing our evolution from Avsr AI to Autonomique. The new name says what we are here to do: bring autonomy to robots at scale, in the places where work actually happens.',
      'We were incubated at and spun out of SRI International, building on research in telemanipulation, dexterous manipulation, spatial intelligence, and generative-AI planning for robots. That foundation now powers a platform for perception, reasoning, and dexterous action, built for the reliability that industry demands.',
      'Same team, same mission, sharper focus.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/from-avsr-ai-to-autonomique` },
  },
  {
    slug: 'teaching-robots-to-follow-human-instructions',
    category: 'Research',
    title: 'Teaching robots to follow human instructions',
    dek: 'Why human demonstrations, captured through precise tele-operation, are a shortcut to useful autonomy.',
    body: [
      'A robot that can follow a plain instruction, like “seat the bushing, then torque the bracket”, has to connect language to perception and perception to motion. Human demonstrations are one of the most direct ways to build that bridge.',
      'Responsive, precise tele-operation turns an expert’s skill into high-quality training data. Every guided run shows what to do and how to do it on the hardware that will actually perform the task.',
      'The challenge is that paired data is scarce and often specific to one robot. Our approach keeps humans in the loop where they add the most value, and structures what the robot learns so it carries across tasks, not just repeats a single motion.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/teaching-robots-to-follow-human-instructions` },
  },
  {
    slug: 'key-challenges-in-robotics',
    category: 'Perspective',
    title: 'Key challenges in robotics',
    dek: 'Dexterity, perception, generalization, and trust: what still stands between robots and the real world.',
    body: [
      'Robotics is moving quickly, but a few hard problems still separate impressive demos from dependable deployments.',
      'Dexterity: handling delicate, variable parts with human-like control. Perception: making sense of cluttered, changing scenes under imperfect conditions. Generalization: teaching a skill once and having it carry across tasks and hardware. Data: building high-quality datasets that pair what a robot sees with what it should do.',
      'Underneath all of them is trust. In production, safety and repeatability are not features; they are the entry ticket. We design for that first, keeping human oversight as part of the system rather than an afterthought.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/news/key-challenges-in-robotics` },
  },
  {
    slug: 'teleoperation-in-modern-robotics',
    category: 'Perspective',
    title: 'Teleoperation in modern robotics',
    dek: 'Tele-op is not a crutch. Done right, it is a safety net, a teacher, and a path to autonomy.',
    body: [
      'Modern teleoperation lets an expert operate a robot remotely with the precision of being there in person. In industry, that means expertise can reach any line, anywhere, without travel.',
      'Its bigger value is what it produces. Every session can become training data. Tasks start teleoperated, become semi-autonomous, and graduate to full autonomy as confidence grows, while tele-op stays available for the rare edge case.',
      'That is how we think about the human in the loop: not as a fallback for a system that doesn’t work, but as part of the system that makes it work better every day.',
    ],
    source: { label: 'Read on autonomique.ai', href: `${originalSite}/blog-details/teleoperation-in-modern-robotics` },
  },
]

export function formatDate(date?: string) {
  if (!date) return undefined
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
