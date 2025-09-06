
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManCart from './ManCart'
import WomenCart from './WomenCart'
import VintageCart from './VintageCart'
import AddtoCart from './AddtoCart'
import Payment from './Payment'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import ChatBot from './Chatbot'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/parismystery">
   <ToastContainer position="top-center" autoClose={3000} />
  <Navbar/>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/man-scent" element={<ManCart/>}></Route>
    <Route path="/women-scent" element={<WomenCart/>}/>
    <Route path="/vintage-scent" element={<VintageCart/>}/>
    <Route path="/add-to-cart" element={<AddtoCart/>}/>
    <Route path="/placeholder" element={<Payment/>}/>
  </Routes>
  <ChatBot/>
  </BrowserRouter>
  
)
