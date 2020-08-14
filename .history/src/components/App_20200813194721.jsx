import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Publications from './pages/Publications';
import Publication from './pages/Publication';
import Tags from './pages/Tags'
import Tag from './pages/Tag'
import Copywriters from './pages/Copywriters';
import Copywriter from './pages/Copywriter';
import Contribution from './pages/Contribution';
import Page404 from './pages/Page404'
import Header from './organisms/Header'
import Banner from './organisms/Banner'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Publications} />

      <Route path="/publications/:id" component={Publication} />
      <Route path="/Tags" component={Tags} />
      <Route path="/Tags/:id" component={Tag} />
      <Route path="/Team" component={Copywriters} />
      <Route path="/Team/:id" component={Copywriter} />
      <Route path="/Contribution" component={Contribution} />
      <Route component={Page404} />
    </Switch>
  </Router>

)
export default App;
