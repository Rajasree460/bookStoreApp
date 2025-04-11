import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'


function Abouts() {
    //console.log(list)
  return (
    <>
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center pt-24 px-4">
         <About />
        </div>
        <Footer />
    </>
  )
}

export default Abouts