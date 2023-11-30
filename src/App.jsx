import React from "react";
import RouterPrimary from "./router/RouterPrimary";
import ProtectedRoutes from "./router/ProtectedRoutes";
import LoginScreen from "./views/LoginScreen";
import RegistroUsuarioApp from "./components/RegistroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBuyApp from "./components/Pay";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductosScreen from "./views/ProductosScreen";
import ErrorScreen from "./views/ErrorScreen";
import ModalLogin from "./components/ModalLogin"



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/*" element= {<ProtectedRoutes><RouterPrimary/></ProtectedRoutes>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/login" element={<ModalLogin/>}/> 
        <Route path="/register" element={<RegistroUsuarioApp/>}/> 
        <Route path="/pay" element={<CardBuyApp/>}/>       
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/" element={<ProductosScreen />} />
            

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;




