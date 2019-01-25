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
        <MenuTree label='Contacts' icon='envelope'>
            <MenuItem path='https://www.facebook.com/anderson.pereirasantanna' target='_black' label='Facebook' icon='facebook'/>
            <MenuItem path='' target='_black' label='Instagram' icon='instagram'/>
            <MenuItem path='https://www.linkedin.com/in/anderson-sant-anna/' target='_black' label='LinkedIn' icon='linkedin'/>
            <MenuItem path='https://github.com/andersonSantanna' target='_black' label='Github' icon='github'/>
        </MenuTree>
    </ul>
)
