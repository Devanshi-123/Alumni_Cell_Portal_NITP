import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import About from './components/about-us/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/auth' component={Auth} />
                  <Route path='/main' component={Main} />
                  <Route path='/about' component={About} />
          <Redirect to='/auth' from='*' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
