import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage>
    </HomePage>
   
    <Footer>
      
      </Footer>
    <App />
  </React.StrictMode>,
)
