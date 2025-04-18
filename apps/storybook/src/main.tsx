import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import App from './App.tsx';
import './index.css';
import { vars } from '@packages/themes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={vars}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
