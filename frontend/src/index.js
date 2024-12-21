import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/header.css';
import './styles/cottage.css';
import './styles/room.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/login.css';
import './styles/layout.css';
import './styles/account.css';
import './styles/about.css';
import './styles/service.css';
import './styles/contact.css';
import './styles/booking.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
