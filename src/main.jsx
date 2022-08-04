import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { MalagonApp } from './MalagonApp'
import './styles.css'
// Import the functions you need from the SDKs you need


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MalagonApp />
    </BrowserRouter>
  </React.StrictMode>
)
