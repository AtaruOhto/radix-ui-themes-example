import '@radix-ui/themes/styles.css';

import { Theme, ThemePanel } from '@radix-ui/themes';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme   
      accentColor="indigo"
      appearance='dark'
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full">
      <App />
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
)
