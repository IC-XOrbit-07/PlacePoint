import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './component/Navbar';
import Homeherosection from './component/Homeherosection';
import ContactUs from './component/ContactUs';
// import Card from './component/Card'; // Ensure Card component is imported
import Dashboard from './component/Dashboard'

function App() {
  return (
    <Router>
        <Routes>
        <Route path="*" element={<div style={{display:'grid',placeItems:'center',marginTop:'100px',fontWeight:'bold',fontSize:'50px'}}>Page Not Found</div>} />
          
          {/* Landing Page */}
          <Route exact path="/" element={<>
            <div className="bg-gradient-dark">
              <Navbar first_heading='Home' second_heading='Features' third_heading='Pricing' fourth_heading='Contact Us' showbutton={true}/>
              <Homeherosection />
              <ContactUs />
            </div>
          </>}/>

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default App;
