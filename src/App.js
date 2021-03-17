import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import About from './components/about-us/about';
import Nav from "./components/nav/Nav";
import './App.css';
 import  { FooterContainer }from './containers/footer';




function App() {
  return (
    <div className="App">
<<<<<<< HEAD
  
      <Router>
        <Switch>

=======
    <Nav />
    
      <Router>
        <Switch>
        
>>>>>>> 425966c7d61d747385f5f3276d8272c87e9ff65d
          <Route path='/auth' component={Auth} />
                  <Route path='/main' component={Main} />
                  <Route path='/about' component={About} />
          <Redirect to='/auth' from='*' />
          
        </Switch>
       
      </Router>

      <FooterContainer/>
    </div>
  );
}

export default App;
