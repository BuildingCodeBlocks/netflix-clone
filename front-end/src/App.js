import './components/styles/global.scss';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Navbar from './components/global/Navbar';
import Catalog from './components/global/Catalog';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>            
            <Route path="/browse">
              <Navbar />
              <div className="content">
                <Catalog></Catalog>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;