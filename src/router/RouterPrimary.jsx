import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardBuyApp from '../components/Pay'
import RegistroUsuarioApp from '../components/RegistroUsuario'
import ErrorScreen from '../views/ErrorScreen'
import LandingPage from '../views/LandingPage'
import LoginScreen from '../views/LoginScreen'
import MainScreen from '../views/MainScreen'

const RouterPrimary = () => {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainScreen />} />

        <Route path="/pay" element={<CardBuyApp/>}/>
        <Route path="/register" element={<RegistroUsuarioApp />} />
        <Route path="/login" element={<LoginScreen />} />
        
    </Routes>
  )
}

export default RouterPrimary