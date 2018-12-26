import React from 'react'

export default props =>{
    if(props.test){
        console.log('chegou aqui')
        return props.children
    }else{
        return false
    }
}
