import React from 'react'
import {HashRouter} from 'react-router-dom'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Menssage from '../common/msg/menssage'

import Routes from './routes'

export default props =>(
    <HashRouter>
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <Routes/>
            <Footer/>
            <Menssage/>
        </div>
    </HashRouter>
)