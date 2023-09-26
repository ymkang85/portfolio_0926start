import React from 'react'
import { Routes as RRoutes, Route, useLocation } from 'react-router-dom'
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Location from './location/Location';


type Props = {}

const Routes = (props : Props) => {
  const location = useLocation();
  return (
    <main>
      <RRoutes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </RRoutes>
    </main>
  )
}

export default Routes