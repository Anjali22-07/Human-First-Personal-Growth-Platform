import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './pages/RootLayout.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
 
 <Routes>
    <Route path="/" element={<RootLayout/>}></Route>
    <Route index element={<App/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
 </Routes>

 </BrowserRouter>
)
