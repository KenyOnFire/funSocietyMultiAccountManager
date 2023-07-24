import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orderinfo from './pages/OrderInfo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/orders/:num_order" element={<Orderinfo />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
