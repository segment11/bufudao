import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
import { GradePage } from '@/pages/GradePage'
import { TextPage } from '@/pages/TextPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grade/:gradeId" element={<GradePage />} />
        <Route path="/text/:textId" element={<TextPage />} />
      </Routes>
    </Layout>
  )
}
