import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardBuyApp from '../components/Pay'

const RouterPrimary = () => {
  return (
    <Routes>
        <Route path="../components/Pay.jsx" element={<CardBuyApp/>}/>
    </Routes>
  )
}

export default RouterPrimary