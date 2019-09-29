import React from 'react'
import Navbar from './Navbar'
import './layout.css'
// import '../sass/layout.scss'

const layout = ({ children }) => {
  return (
    <>
      <Navbar /> 
      <main>
        { children }
      </main>
    </>
  )
}

export default layout
