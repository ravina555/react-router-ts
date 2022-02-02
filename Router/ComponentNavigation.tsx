import React from 'react';
import { BrowserRouter as Router, Link, Routes , Route } from 'react-router-dom';
import HomePage from '../Components/HomePage';

const ComponentNavigation = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
        </ul>
        </div>
        <Routes>
          <Route path='/Home' element={<HomePage/>}/>
          
      </Routes>
      </Router>
    </React.Fragment>
  );
};

export default ComponentNavigation;
