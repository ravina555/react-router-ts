import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MoreImages = (props) => {
  const [newGallery, setNewGallery] = useState([]);
  const params = useParams();
  const gallery = Array(Number(params.print)).fill(
    'https://placem.at/things?w=100&h=100&random='
  );

  useEffect(() => {
    setNewGallery(gallery);
  }, [props.showItems]);
  //  const location = useLocation();

  //useLocation hook
  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const print = Number(searchParams.getAll('print')[0] || 5);
  //   setNewGallery(
  //     new Array(print).fill('https://placem.at/things?w=100&h=100&random=')
  //   );
  // }, [location, setNewGallery]);

  return (
    <React.Fragment>
      <h1>More Images</h1>
      {newGallery.map((item, i) => {
        return <img src={item + i} key={i} />;
      })}
    </React.Fragment>
  );
};

export default MoreImages;
