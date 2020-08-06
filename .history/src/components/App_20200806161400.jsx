import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>

)
export default App;
