import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
import { GradePage } from '@/pages/GradePage'
import { ChapterPage } from '@/pages/ChapterPage'
import { SectionPage } from '@/pages/SectionPage'

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grade/:gradeId" element={<GradePage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/section/:sectionId" element={<SectionPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
