import React from 'react';
import '../components/styles/global.scss';
import Header from './header';
import Footer from './footer';
import Storycards from './storycards';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div id="appMountPoint">
        <div className="basicLayout">
          <div className="netflix-sans-font-loaded">
            <div className="our-story-desktop-framework">
              <div>
                <div className="lang-selector-test our-story-container" dir="ltr">
                  <Header />
                  <Storycards/>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}