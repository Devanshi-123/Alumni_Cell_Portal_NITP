import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import Nav from "./components/nav/Nav";

import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    
      <Router>
        <Switch>
        
          <Route path='/auth' component={Auth} />
          <Route path='/main' component={Main} />
          <Redirect to='/auth' from='*' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
