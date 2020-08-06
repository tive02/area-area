import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/publications" component={Publications} />
      <Route path="/" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/" component={Home} />

    </Switch>
  </Router>

)
export default App;
