import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
export default props =>(
    <ul className='sidebar-menu'>
        <MenuItem path='#/dashboard' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#/billingCycle' label='Ciclo de Pagemento' icon='usd'/>
        </MenuTree>
        <MenuItem path='#/about' label='About' icon='info'/>
        <MenuTree label='Contats' icon='envelope'>
            <MenuItem path='#/billingCycle' label='Facebook' icon='facebook'/>
            <MenuItem path='#/billingCycle' label='Instagram' icon='instagram'/>
            <MenuItem path='#/billingCycle' label='LinkedIn' icon='linkedin'/>
            <MenuItem path='https://github.com/andersonSantanna' target='_black' label='Github' icon='github'/>
        </MenuTree>
    </ul>
)
