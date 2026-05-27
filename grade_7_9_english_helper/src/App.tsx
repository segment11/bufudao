import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { HomePage } from '@/pages/HomePage'
import { GradePage } from '@/pages/GradePage'
import { UnitPage } from '@/pages/UnitPage'
import { ExamPage } from '@/pages/ExamPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grade/:gradeId" element={<GradePage />} />
        <Route path="/unit/:unitId" element={<UnitPage />} />
        <Route path="/exam" element={<ExamPage />} />
      </Routes>
    </Layout>
  )
}
