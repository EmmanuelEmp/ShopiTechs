/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NewsLetter from './components/NewsLetter';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='container py-3 mx-auto flex-grow'>
        <Outlet />
        <ToastContainer />
      </main>
      <NewsLetter/>
      <Footer />
    </div>
  )
}
