import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Menssage from '../common/msg/menssage'

export default props =>(
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer/>
        <Menssage/>
    </div>
)