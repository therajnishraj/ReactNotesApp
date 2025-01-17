import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the styles

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
