import FirstBox from 'components/FirstBox/FirstBox';
import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div id="content-block">
      <div className="content-push">
        <div className="parallax-slide">
          <div className="parallax-clip">
            <div
              className="fixed-parallax"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080/?image=507')",
              }}
            >
              <h1>ТВІЙ КОНТЕНТ</h1>

              <p>твоя картинка</p>
            </div>
          </div>
        </div>

        <div className="parallax-slide-content">
          <div className="parallax-clip">
            <div
              className="fixed-parallax-content"
              style={{
                background: '#ffffff',
              }}
            >
              <FirstBox />
            </div>
          </div>
        </div>

        <div className="parallax-slide">
          <div className="parallax-clip">
            <div
              className="fixed-parallax"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080/?image=569')",
              }}
            >
              <h1>ТВІЙ КОНТЕНТ</h1>
            </div>
          </div>
        </div>

        <div className="parallax-slide-content">
          <div className="parallax-clip">
            <div
              className="fixed-parallax-content"
              style={{
                background: '#ffffff',
              }}
            >
              <FirstBox />
            </div>
          </div>
        </div>

        <div className="parallax-slide">
          <div className="parallax-clip">
            <div
              className="fixed-parallax"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080/?image=119')",
              }}
            >
              <h1>ТВІЙ КОНТЕНТ</h1>
            </div>
          </div>
        </div>

        <div className="parallax-slide-content">
          <div className="parallax-clip">
            <div
              className="fixed-parallax-content"
              style={{
                background: '#ffffff',
              }}
            >
              <FirstBox />
            </div>
          </div>
        </div>

        <div className="parallax-slide">
          <div className="parallax-clip">
            <div
              className="fixed-parallax"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080/?image=507')",
              }}
            >
              <h1>ТВІЙ КОНТЕНТ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
