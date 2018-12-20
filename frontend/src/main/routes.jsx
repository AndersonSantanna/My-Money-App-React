import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import {BillingCycle} from '../billingCycle/billingCycle'
import Dashboard from '../dashboard/dashboard'
import About from '../about/about'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/billingCycle' component={BillingCycle} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/dashboard'/>
    </Router>
)