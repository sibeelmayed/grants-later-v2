import { createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { HomePage } from './pages/HomePage'

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })