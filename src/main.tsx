import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App.tsx';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        { index: true, lazy: () => import('./Home/Home.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'about', lazy: () => import('./About/About.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'experience', lazy: () => import('./Experience/Experience.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'projects', lazy: () => import('./Projects/Projects.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'skills', lazy: () => import('./Skills/Skills.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'resume', lazy: () => import('./Resume/Resume.tsx').then(({ default: Component }) => ({ Component })) },
        { path: 'contact', lazy: () => import('./Contact/Contact.tsx').then(({ default: Component }) => ({ Component })) },
      ],
    },
  ],
  { basename },
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
