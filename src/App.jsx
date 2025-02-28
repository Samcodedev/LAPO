import React from 'react'
import Dashboard from './page/Dashboard'
import Login from './auth/Login'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
