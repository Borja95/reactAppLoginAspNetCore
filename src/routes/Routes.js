import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
