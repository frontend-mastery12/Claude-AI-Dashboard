import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-canvas bg-glow-radial">
      <Sidebar />
      <div className="flex min-h-screen flex-col lg:pl-[260px]">
        <Topbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
