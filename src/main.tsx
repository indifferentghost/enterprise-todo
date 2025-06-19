import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('Unable to find `root` node.');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
  },
]);

createRoot(root).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
