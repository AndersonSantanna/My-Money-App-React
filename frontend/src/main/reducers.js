import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducers from '../dashboard/dashboardReducers'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducers'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer