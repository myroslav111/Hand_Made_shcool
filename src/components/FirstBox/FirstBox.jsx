import React from 'react';
import './FirstBox.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useContext } from 'react';
import { Context } from 'components/App';

const FirstBox = () => {
  const context = useContext(Context);

  return (
    <div className="container">
      <div className="content">
        <h1>Перший блок</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          reprehenderit deserunt minus error, veniam temporibus repellat
          doloribus obcaecati sint nam. Corporis enim alias aperiam repudiandae
          accusantium sequi doloribus qui magni!
        </p>
        <ul style={{ width: '100%' }}>
          <li>info</li>
          <li>info</li>
          <li>info</li>
        </ul>
        <div className="image-wrap">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
          <div className="wrap-icon" onClick={context.onGalleryIconClick}>
            <CollectionsIcon color="secondary" fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
