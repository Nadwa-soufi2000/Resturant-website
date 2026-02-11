import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ChangeStatus from './context/ChangeDropdownStatus.tsx'
import GlobalContext from './context/GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
        <ChangeStatus>
          <GlobalContext>
          <StrictMode>
            <App />
          </StrictMode>
          </GlobalContext>
        </ChangeStatus>
      </BrowserRouter>
  ,
)
