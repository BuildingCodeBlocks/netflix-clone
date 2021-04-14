import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Navbar from './components/global/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
            <Route path="/browse">
              <div className="content">
                <Navbar></Navbar>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;