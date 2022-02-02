import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <div>
        <Link to="/">Main Page </Link> | <Link to="page1">Page 1 </Link>|{' '}
        <Link to="page2">Page 2 </Link>
      </div>
      <Routes>
        <Route
          path="/page2"
          element={<h3>Hi ! You are navigated on Page 2</h3>}
        />
        <Route
          path="/page1"
          element={<h3>Hi ! You are navigated on Page 1</h3>}
        />
        <Route path="/" element={<h3>Hi! You are on Main Page</h3>} />
      </Routes>
    </Router>
  );
};

export default Navigation;
