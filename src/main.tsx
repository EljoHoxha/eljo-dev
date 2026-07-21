import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, RouterProvider, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './routes/App';
import ProjectDetail from './routes/ProjectDetail';
import './styles.css';

const rootRoute = createRootRoute({
  component: Outlet,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$slug',
  component: ProjectDetail,
});

const routeTree = rootRoute.addChildren([indexRoute, projectRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
