import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context_Api/Store_Cotenx.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
  <StoreContextProvider>

  
  <App></App>
  </StoreContextProvider>
  </BrowserRouter>
  
</>
)
