import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Abouts from './about/Abouts'
import Contacts from './contacts/Contacts'


function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<Abouts />} />
         <Route path="/course" element={<Courses />} />
         <Route path="/contact" element={<Contacts />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  )
}

export default App
