import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import 'animate.css'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withCSSVariables
      theme={{
        colors: {
          brand: [
            '#ffffff',
            '#cbd6ff',
            '#96adff',
            '#6184ff',
            '#2c5aff',
            '#254ac8',
            '#1e3a91',
            '#172a5a',
            '#0f1923',
          ],
        },
        fontFamily: 'var(--font-family)',
        components: {
          Button: {
            defaultProps: {
              size: 'lg',
            },
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
