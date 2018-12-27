import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class BillingCycleForm extends Component{

    render(){
        const {handleSubmit} = this.props        
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>submit</button>
                </div>    
            </form>
        )
    }
}

export default reduxForm({form: 'BillingCycleForm'})(BillingCycleForm)