import { ArrowUpRight } from '@phosphor-icons/react'
import { Page, PageHero } from '../components/Layout'
import { articles, contactEmail, formatDate } from '../content'

const categories = [...new Set(articles.map((article) => article.category))]

export function NewsPage() {
  const [featured, ...rest] = articles
  return (
    <Page page="news">
      <PageHero eyebrow="NEWS & NOTES" title={<>Signals from<br /><span className="muted">the factory floor.</span></>}>
        <p className="body-copy">Announcements, milestones, and perspectives on building physical AI that works in the real world.</p>
        <p className="news-categories">{categories.map((category) => <span className="pill" key={category}>{category.toUpperCase()}</span>)}</p>
      </PageHero>

      <section className="container">
        <a href={`#${featured.slug}`} className="featured-article">
          <span className="eyebrow"><span className="status-dot live" /> FEATURED · {featured.category.toUpperCase()}{featured.date ? ` · ${formatDate(featured.date)}` : ''}</span>
          <h2>{featured.title}</h2>
          <p>{featured.dek}</p>
          <span className="text-link">Read <ArrowUpRight size={18} /></span>
        </a>
        <div className="article-index grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((article) => <a href={`#${article.slug}`} key={article.slug} className="article-card"><span className="eyebrow">{article.category.toUpperCase()}{article.date ? ` · ${formatDate(article.date)}` : ''}</span><h3>{article.title}</h3><p>{article.dek}</p></a>)}
        </div>
      </section>

      <section className="section-pad container articles">
        {articles.map((article) => (
          <article id={article.slug} key={article.slug} className="article grid md:grid-cols-[.6fr_1.4fr] gap-10">
            <header>
              <p className="eyebrow">{article.category.toUpperCase()}</p>
              {article.date && <time dateTime={article.date}>{formatDate(article.date)}</time>}
              {article.source && <a href={article.source.href} className="text-link">{article.source.label} <ArrowUpRight size={15} /></a>}
            </header>
            <div className="article-body">
              <h2>{article.title}</h2>
              <p className="article-dek">{article.dek}</p>
              {article.body.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </section>

      <section className="closing container"><p className="eyebrow">PRESS &amp; MEDIA</p><h2>Telling a story<br />about physical AI?</h2><p className="closing-copy">We’re happy to talk about the road from lab to line. Reach us at <a className="inline-link" href={`mailto:${contactEmail}?subject=${encodeURIComponent('Press inquiry')}`}>{contactEmail}</a>.</p></section>
    </Page>
  )
}
