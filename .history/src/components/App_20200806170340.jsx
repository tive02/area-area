import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Publications from './pages/Publications';


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/publications" component={Publications} />
      <Route path="/publications/:id" component={Publication} />
      <Route path="/Tags" component={Tags} />
      <Route path="/Tags/:id" component={Tag} />
      <Route path="/Team" component={} />
      <Route path="/Team/:id" component={} />
      <Route path="/Contribution" component={Home} />
      <Route path="/Page404" component={Home} />
    </Switch>
  </Router>

)
export default App;
