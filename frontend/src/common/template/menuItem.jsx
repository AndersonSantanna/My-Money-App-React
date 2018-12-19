import React from 'react'

export default props =>(
    <li>
        <a href={props.path} target={props.target}>
            <i className={`fa fa-${props.icon}`}></i>{props.label}
        </a>
    </li>
)