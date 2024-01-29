import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
