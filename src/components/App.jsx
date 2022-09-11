import Gallery from './Gallery';
import Header from './Header/Header';
import Main from './Main/Main';
import { useState } from 'react';
import { createContext } from 'react';

export const Context = createContext();

export const App = () => {
  const [openGallery, setOpenGallery] = useState(false);

  const onLogoClick = () => {
    // setOpenGallery(prev => !prev);
    setOpenGallery(false);
  };

  const onGalleryIconClick = () => {
    // setOpenGallery(prev => !prev);
    console.log('click');
    setOpenGallery(true);
  };

  return (
    <Context.Provider value={{ onLogoClick, onGalleryIconClick, openGallery }}>
      <div>
        <Header />
        {openGallery ? <Gallery /> : <Main />}
      </div>
    </Context.Provider>
  );
};
