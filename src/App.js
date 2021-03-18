import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import About from './components/about-us/about';
import Event from './components/event/Event';
import Core from './components/core/Core';
import Nav from "./components/nav/Nav";
import './App.css';
 import  { FooterContainer }from './containers/footer';




function App() {
  return (
    <div className="App">
      <Nav />

      <Router>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/main' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/event' component={Event} />
          <Route path='/core' component={Core} />
          <Redirect to='/auth' from='*' />
          
        </Switch>
       
      </Router>

      <FooterContainer/>
    </div>
  );
}

export default App;