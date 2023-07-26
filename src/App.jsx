import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './modules/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Commercial from './pages/Commercial';
import Profile from './pages/Profile';
import OrderInfo from './pages/OrderInfo.jsx';


function App() {
  const [activeModule, setActiveModule] = useState(localStorage.getItem('activeModule') || 'Home');

  // Save the activeModule value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeModule', activeModule);
  }, [activeModule]);

  return (
    <BrowserRouter>
      <div className='h-screen bg-gradient-to-br from-blue-400 via-green-300 to-green-400'>
        <div className="flex items-center justify-center py-8">
          <div className="p-8 bg-white shadow-xl rounded-lg space-y-4 ">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:buy_or_sell/:num_order" element={<OrderInfo />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Navbar setActiveModule={setActiveModule}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
