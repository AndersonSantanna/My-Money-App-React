import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import labelAndInput  from '../common/form/labelAndInput'
import {init} from './billingCycleActions'

class BillingCycleForm extends Component{

    render(){
        const {handleSubmit} = this.props        
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mes' />
                    <Field name='year' component={labelAndInput} type='number' 
                        label='Ano' cols='12 4' placeholder='Informe o Ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                    <button type='button' className='btn btn-danger' onClick={this.props.init}>Cancel</button>
                </div>    
            </form>
        )
    }
}
BillingCycleForm = reduxForm({form: 'BillingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)