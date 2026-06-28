import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App.tsx';
import Home from './Home/Home.tsx';
import About from './About/About.tsx';
import Experience from './Experience/Experience.tsx';
import Projects from './Projects/Projects.tsx';
import Skills from './Skills/Skills.tsx';
import Contact from './Contact/Contact.tsx';
import Resume from './Resume/Resume.tsx';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        { index: true, Component: Home },
        { path: 'about', Component: About },
        { path: 'experience', Component: Experience },
        { path: 'projects', Component: Projects },
        { path: 'skills', Component: Skills },
        { path: 'resume', Component: Resume },
        { path: 'contact', Component: Contact },
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
