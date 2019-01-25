import {toastr} from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export function login(values) {
    return submit(values, `${consts.OAPI_URI}/login`)
}

export function signup(values) {
    return submit(values, `${consts.OAPI_URI}/signup`)
}

function submit(values, url){
    return disptch =>{
        axios.post(url, values).then(resp =>{
            disptch([
                {type: 'USER_FETCHED', payload: resp.data}
            ])
        })
        .catch(e =>{
            e.response.data.errors.forEach(error => 
                toastr.error('Erro', console.error))
        })
    }
}

export function logout() {
    return { type:'TOKEN_VALIDATED', payload: false}
}

export function validateToke(token) {
    return disptch =>{
        if(token){
            axios.post(`${consts.OAPI_URI}/validateToken`, {token})
            .then(resp =>{
                disptch({type: 'TOKEN_VALIDATED', payload: resp.data.valid})
            })
            .catch(e => disptch({type: 'TOKEN_VALIDATED', payload: false}))
        }else{
            disptch({type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}