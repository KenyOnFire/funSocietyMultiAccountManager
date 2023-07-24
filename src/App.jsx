import { useState, useEffect } from 'react';


import Navbar from './modules/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Commercial from './pages/Commercial';
import Profile from './pages/Profile';


function App() {
  const [activeModule, setActiveModule] = useState(localStorage.getItem('activeModule') || 'Home');

  // Save the activeModule value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeModule', activeModule);
  }, [activeModule]);

  return (
    <>
      <div className='h-screen bg-gradient-to-br from-blue-400 via-green-300 to-green-400'>
        <div className="flex items-center justify-center py-8">
          <div className="p-8 bg-white shadow-xl rounded-lg space-y-4 ">
            {activeModule === 'Home' && <Home/>}
            {activeModule === 'Orders' && <Orders/>}
            {activeModule === 'Commercial' && <Commercial/>}
            {activeModule === 'Profile' && <Profile/>}
          </div>
        </div>
        <Navbar setActiveModule={setActiveModule}/>
      </div>

    </>
  );
}

export default App;
