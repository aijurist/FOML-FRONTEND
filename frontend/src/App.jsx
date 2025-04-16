import React from "react"
import {Routes, Route, Navigate } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import "./index.css"
function App() {

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  )
}

export default App
