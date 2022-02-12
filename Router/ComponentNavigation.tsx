import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import GalleryPage from '../Components/Gallery';
import AboutPage from '../Components/About';

const ComponentNavigation = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            {/* <li>
              when using navigation hook
              <Link to="/Gallery">Gallery</Link>
            </li> */}
            {/* when using params hook} */}
            <li>
              <Link to="/Gallery/1">Gallery</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          {/* using navigation link */}
          {/* <Route path="/Gallery" element={<GalleryPage />} /> */}
          {/* using params */}
          <Route path="/Gallery/:print" element={<GalleryPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/About/:name" element={<AboutPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default ComponentNavigation;
