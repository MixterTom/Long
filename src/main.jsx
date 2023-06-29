import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import Backdot from './components/Backdot/Backdot.jsx';
import Header from './components/Header/Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
     
    <Header>
      
    </Header>
    <Backdot>
      </Backdot>
      <App />
    <Footer>
      
      </Footer>
   
     
   
  </React.StrictMode>,
)
