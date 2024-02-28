import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TokenAuth from './Context API/TokenAuth.jsx'
import Context from './Context API/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TokenAuth>
     <Context>
        <BrowserRouter>
        <App />
        </BrowserRouter>
     </Context>
  </TokenAuth>
  </React.StrictMode>,
)
