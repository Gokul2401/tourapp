import React from 'react'
import Home from './RoutingPages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import User from './RoutingPages/Users'
export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="User" element={<User />} />
        </Routes>
    </Router>
  )
}
