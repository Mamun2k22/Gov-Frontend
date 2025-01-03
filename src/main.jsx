import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App.jsx'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-container bg-[url('https://file-khulna.portal.gov.bd/media/central/themes/theme-default/img/bg_main.gif')] bg-cover bg-center">
      <RouterProvider router={router} />
      {/* <App /> */}
    </div>
  </React.StrictMode>
);
