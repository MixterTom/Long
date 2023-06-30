import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import Backdot from "./components/Backdot/Backdot.jsx";
import Header from "./components/Header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import { ScroolProvider } from "../utils/ScroolContext.jsx";
import { BodyProvider } from "../utils/BodyContext.jsx";
import { LanguageProvider } from "../utils/LanguageContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScroolProvider>
      <BodyProvider>
        <LanguageProvider>
          <Header></Header>
          <Backdot></Backdot>
          <App />
          <Footer></Footer>
        </LanguageProvider>
      </BodyProvider>
    </ScroolProvider>
  </React.StrictMode>
);
