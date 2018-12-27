import '../common/template/dependecies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Menssage from '../common/msg/menssage'

export default props =>(
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer/>
        <Menssage/>
    </div>
)