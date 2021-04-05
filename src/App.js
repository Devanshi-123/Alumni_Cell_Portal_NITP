import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import About from './components/about-us/about';
import Story from './components/stories/Story';
import Footer from "./components/footer/Footer";
import Event from './components/event/Event';
import NewEvent from './components/event/newEvent/NewEvent';
import Core from './components/core/Core';
import Home from './components/home/Home';
import Nav from "./components/nav/Nav";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>

        <Nav />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/main' component={Main} />
          <Route path='/stories' component={Story} />
          <Route path='/about' component={About} />
          <Route path='/core' component={Core} />
          <Route path='/event/new' component={NewEvent} />
          <Route path='/event' component={Event} />
          { /* <Redirect to='/auth' from='*' />*/}
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;