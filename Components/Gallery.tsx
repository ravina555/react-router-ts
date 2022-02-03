import React, { useState } from 'react';
import MoreImages from './MoreImages';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  let navigate = useNavigate();
  const [moreImgs, setMore] = useState(false);
  const [toggleItems, setItemsState] = useState({
    showItems: false,
    msg: 'Click to see More',
  });
  const goToHomePage = () => {
    navigate('/Home');
  };

  const handleMoreImgs = () => {
    navigate('/Gallery?print=20');
    setMore(true);
    setItemsState({
      showItems: !toggleItems.showItems,
      msg: !toggleItems.showItems ? 'Click to see less' : 'Click to see More',
    });
  };
  return (
    <div>
      <h1>Gallery Page</h1>
      <div>
        <img src="https://placem.at/things?w=100&h=100&random=0" alt="image0" />
        <img src="https://placem.at/things?w=100&h=100&random=1" alt="image1" />
        <img src="https://placem.at/things?w=100&h=100&random=2" alt="image2" />
        <img src="https://placem.at/things?w=100&h=100&random=3" alt="image3" />
        <img src="https://placem.at/things?w=100&h=100&random=4" alt="image4" />
      </div>
      <br />
      <div>
        <button onClick={() => handleMoreImgs()}>{toggleItems.msg}</button>
        {toggleItems.showItems && <MoreImages showItems={true} />}
      </div>
      <br />
      <div>
        <button onClick={() => goToHomePage()}>Back to Home Page</button>
      </div>
      <br />
    </div>
  );
};

export default GalleryPage;
