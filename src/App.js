import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import './App.css';
 import  { FooterContainer }from './containers/footer';




function App() {
  return (
    <div className="App">
  
      <Router>
        <Switch>

          <Route path='/auth' component={Auth} />
          <Route path='/main' component={Main} />
          <Redirect to='/auth' from='*' />
          
        </Switch>
       
      </Router>

      <FooterContainer/>
    </div>
  );
}

export default App;
