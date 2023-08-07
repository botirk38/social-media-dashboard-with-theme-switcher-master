import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Dashboard.jsx'
import './output.css'; // import the output.css file here
import { DarkModeProvider } from './hooks/DarkModeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
