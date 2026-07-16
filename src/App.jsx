import { Routes, Route } from 'react-router-dom'
import MainLayout from './app/MainLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Transactions from './pages/Transactions/Transactions'
import Analytics from './pages/Analytics/Analytics'
import SimplePage from './pages/SimplePage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route
          path="/goals"
          element={
            <SimplePage
              title="Goals"
              subtitle="Set targets for membership growth, revenue, and retention."
            />
          }
        />
        <Route
          path="/settings"
          element={<SimplePage title="Settings" subtitle="Manage your account and workspace preferences." />}
        />
        <Route
          path="/appearance"
          element={<SimplePage title="Appearance" subtitle="Customize theme, density, and accent color." />}
        />
        <Route
          path="/support"
          element={<SimplePage title="Support" subtitle="Get help from the PulseFit team." />}
        />
        <Route
          path="*"
          element={<SimplePage title="Page not found" subtitle="The page you're looking for doesn't exist." />}
        />
      </Route>
    </Routes>
  )
}
