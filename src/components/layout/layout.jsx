import React from 'react'
import Header from '../Header/header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/> 
      </main>
    </>
  )
}

export default layout