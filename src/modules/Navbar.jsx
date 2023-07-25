import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({setActiveModule}) => {
  return (
    <div className="fixed z-5 w-96 sm:w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-8 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full grid-cols-5 mx-auto">
            <Link to={"/"}>
              <button data-tooltip-target="tooltip-home" onClick={() => {setActiveModule('Home')}} type="button" className="inline-flex flex-col items-center justify-center w-full h-full rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" strokeWidth="1.5" stroke="currentColor" className="w-8 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>

                  <span className="inline-flex flex-col items-center justify-center h-4 text-slate-400 group-hover:text-sky-600 text-sm">Inicio</span>
              </button>
            </Link>

            <Link to={"/orders"}>
              <button data-tooltip-target="tooltip-orders" onClick={() => {setActiveModule('Orders')}} type="button" className="inline-flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" strokeWidth="1.5" stroke="currentColor" className="w-8 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                  <span className="inline-flex flex-col items-center justify-center h-4 text-slate-400 group-hover:text-sky-600 text-sm">Órdenes</span>
              </button>
            </Link>

            <div className="flex items-center justify-center">
                <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span className="sr-only">New item</span>
                </button>
            </div>
            <Link to={'/commercial'}>
              <button data-tooltip-target="tooltip-commercial" onClick={() => {setActiveModule('Commercial')}} type="button" className="inline-flex flex-col items-center justify-center w-full h-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" strokeWidth="1.5" stroke="currentColor" className="w-8 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                  <span className="inline-flex flex-col items-center justify-center h-4 text-slate-400 group-hover:text-sky-600 text-sm">Anuncios</span>
              </button>
            </Link>

            <Link to={'/profile'}>
              <button data-tooltip-target="tooltip-profile" onClick={() => {setActiveModule('Profile')}} type="button" className="inline-flex flex-col items-center justify-center w-full h-full rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" strokeWidth="1.5" stroke="currentColor" className="w-8 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                  </svg>
                  <span className="inline-flex flex-col items-center justify-center h-4 text-slate-400 group-hover:text-sky-600 text-sm">Perfil</span>
              </button>
            </Link>
        </div>
    </div>
  );
};

Navbar.propTypes = {
  setActiveModule: PropTypes.func.isRequired,
};

export default Navbar;
