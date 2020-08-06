import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Publications from './pages/Publications';
import Publication from './pages/Publication';
import Tags from './pages/Tags'
import Tag from './pages/Tag'
import Copywriters from './pages/Copywriters';
import Copywriter from './pages/Copywriter´;
import Contribution from './pages/Contribution';
import Page404 from './pages/Page404'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/publications" component={Publications} />
      <Route path="/publications/:id" component={Publication} />
      <Route path="/Tags" component={Tags} />
      <Route path="/Tags/:id" component={Tag} />
      <Route path="/Team" component={Copywriter} />
      <Route path="/Team/:id" component={Copywriters} />
      <Route path="/Contribution" component={Contribution} />
      <Route path="/Page404" component={Page404} />
    </Switch>
  </Router>

)
export default App;