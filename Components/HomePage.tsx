import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGallery = () => {
    navigate('/Gallery/20');
  };

  const handleAboutPage = () => {
    debugger;
    navigate('/About/Ravina');
  };
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <button onClick={handleGallery}>Go to gallery page with 20 Images</button>
      <button style={{ marginLeft: 12 }} onClick={handleAboutPage}>
        Got to About Page
      </button>
    </React.Fragment>
  );
};

export default HomePage;
