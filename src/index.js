import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* //! Додає додаткове значення в URL */}
    <BrowserRouter basename="/MoviesApp">
      {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
