import React, { ReactNode } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layout:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
