import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Contacts() {
    //console.log(list)
  return (
    <>
        <Navbar />
        <div className=" min-h-screen">
         <Contact />
        </div>
        <Footer />
    </>
  )
}

export default Contacts
