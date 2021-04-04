import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import About from './components/about-us/about';
import Story from './components/stories/Story';
import Event from './components/event/Event';
import Core from './components/core/Core';
import Home from './components/home/Home';
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
                  <Route path='/stories' component={Story} />
          <Route path='/main' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/event' component={Event} />
          <Route path='/core' component={Core} />
          <Route path='/home' component={Home} />
          <Redirect to='/auth' from='*' />
          
        </Switch>
       
      </Router>


    </div>
  );
}

export default App;