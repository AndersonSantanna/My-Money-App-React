import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import labelAndInput  from '../common/form/labelAndInput'
import {init} from './billingCycleActions'
import ItemList from './itemtList'
import Summary from './summary'
class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredts: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
            
        }
    }

    render(){
        const {handleSubmit, readOnly, credits, debts} = this.props        
        const {sumOfCredts, sumOfDebts} = this.calculateSummary()
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mes' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly} type='number' 
                        label='Ano' cols='12 4' placeholder='Informe o Ano'/>
                    <Summary credit={sumOfCredts} debt={sumOfDebts}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Credits'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Debts' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.colorButton}`}>{this.props.button}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>    
            </form>
        )
    }
}
BillingCycleForm = reduxForm({form: 'BillingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('BillingCycleForm')

const mapStateToProps = state =>({
    credits: selector(state,'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)