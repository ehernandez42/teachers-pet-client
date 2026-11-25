import { QueryClientProvider } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { queryClient } from './lib/queryClient'
import { AccountPage, LoginPage } from './routes/AuthPages'
import { GeneratePage } from './routes/GeneratePage'
import { LandingPage } from './routes/LandingPage'
import { StylesPage } from './routes/StylesPage'
import { TranslatePage } from './routes/TranslatePage'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/styles" replace />} />
          <Route path="/styles" element={<StylesPage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/translate" element={<TranslatePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}
