
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import App from './containers/App';
import ChartsPage from './pages/ChartsPage';
import ScrollTable from './components/ScrollTable';
import WeaknessList from './containers/WeaknessList';
import DataAnalysis from './containers/DataAnalysis';
import EventFacts from './components/EventFacts';

const routes = (
    <HashRouter>
        <Switch className="main">
            <Route path="/view" component={ ChartsPage } exact />
            <Route path="/scroll" component={ ScrollTable } exact />
            <Route path="/analysis" component={ DataAnalysis } exact />
            <Route path="/event" component={ EventFacts } exact />
            <Route path="/" component={ App } />
        </Switch>
    </HashRouter>
);

export default routes;