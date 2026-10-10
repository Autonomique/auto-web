import { CompanyPage } from './pages/Company'
import { HomePage } from './pages/Home'
import { IndustriesPage } from './pages/Industries'
import { NewsPage } from './pages/News'

const routes = { industries: IndustriesPage, news: NewsPage, company: CompanyPage }

export default function App() {
  const match = window.location.pathname.match(/\/(industries|news|company)(?:\/|\/index\.html)?$/)
  const Route = match ? routes[match[1] as keyof typeof routes] : HomePage
  return <Route />
}
