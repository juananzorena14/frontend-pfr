import RouterPrimary from "./router/RouterPrimary";
import ProtectedRoutes from "./router/ProtectedRoutes";
import LoginScreen from "./views/LoginScreen";
import RegistroUsuarioApp from "./components/RegistroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBuyApp from "./components/Pay";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element= {<ProtectedRoutes><RouterPrimary/></ProtectedRoutes>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginScreen/>}/> 
        <Route path="/register" element={<RegistroUsuarioApp/>}/> 
        <Route path="/pay" element={<CardBuyApp/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;




