import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('Unable to find `root` node.');
}

createRoot(root).render(<StrictMode>Test</StrictMode>);
