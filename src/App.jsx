import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from "./pages/home/home"
import Courses from "./pages/courses/courses"
import My from "./pages/mylearning/my"
import Sub from "./pages/subscribe/sub"
import Layout from "./components/layout/layout"


function App() {

  return (
    <>
      <BrowserRouter>
           <Routes>
              <Route element={<Layout/>}>
                <Route path='home' element={<Home/>}/>
                <Route path='courses' element={<Courses/>}/>
                <Route path='mylearning' element={<My/>}/>
                <Route path='subscribe' element={<Sub/>}/>
              </Route>
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
