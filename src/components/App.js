import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import 'react-confirm-alert/src/react-confirm-alert.css';

import Home from './Home';

import SiteHeader from '../library/common/components/SiteHeader';
import SiteFooter from '../library/common/components/SiteFooter';


const App = () => {

  return (
    <Router>
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <SiteFooter />
    </Router>
  );
};

export default App;