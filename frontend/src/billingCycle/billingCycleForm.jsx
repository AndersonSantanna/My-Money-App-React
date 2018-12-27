import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import labelAndInput  from '../common/form/labelAndInput'
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
                </div>    
            </form>
        )
    }
}

export default reduxForm({form: 'BillingCycleForm'})(BillingCycleForm)