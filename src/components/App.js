import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import 'react-confirm-alert/src/react-confirm-alert.css';

import Home from './Home';

import SiteHeader from '../library/common/components/SiteHeader';
import SiteFooter from '../library/common/components/SiteFooter';


const App = () => {

  const APP_MODE = process.env.APP_MODE;
  const SITE_URI = APP_MODE==='dev' ? '/' : '/react-webpack/';

  return (
    <Router basename={SITE_URI}> {/* to run in subfolder and in htdocs */}
        <SiteHeader/>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <SiteFooter />
    </Router>
  );
};

export default App;