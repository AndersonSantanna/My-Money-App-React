import {combineReducers} from 'redux'

import DashboardReducers from '../dashboard/dashboardReducers'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducers'
const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer