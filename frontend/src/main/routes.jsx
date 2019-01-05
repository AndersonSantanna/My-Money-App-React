import React from 'react'
import {Router, Route, IndexRoute , Redirect, hashHistory} from 'react-router'

import BillingCycle from '../billingCycle/billingCycle'
import Dashboard from '../dashboard/dashboard'
import About from '../about/about'
import AuthOrApp from './authOrApp'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='/billingCycle' component={BillingCycle} />
            <Route path='/about' component={About} />
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)