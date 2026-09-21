import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { EquipmentList } from '@/pages/EquipmentList'
import { EquipmentDetail } from '@/pages/EquipmentDetail'
import { StoneSector } from '@/pages/StoneSector'
import { StoneDetail } from '@/pages/StoneDetail'
import { MarbleSector } from '@/pages/MarbleSector'
import { MarbleDetail } from '@/pages/MarbleDetail'
import { ContractingSector } from '@/pages/ContractingSector'
import { ProjectsList } from '@/pages/ProjectsList'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { ArticlesList } from '@/pages/ArticlesList'
import { ArticleDetail } from '@/pages/ArticleDetail'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            {/* Equipment Sector */}
            <Route path="/equipment" element={<EquipmentList />} />
            <Route path="/equipment/:slug" element={<EquipmentDetail />} />

            {/* Stone Sector */}
            <Route path="/stone" element={<StoneSector />} />
            <Route path="/stone/:slug" element={<StoneDetail />} />

            {/* Marble Sector */}
            <Route path="/marble" element={<MarbleSector />} />
            <Route path="/marble/:slug" element={<MarbleDetail />} />

            {/* Contracting Sector */}
            <Route path="/contracting" element={<ContractingSector />} />

            {/* Projects */}
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            {/* Articles */}
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
