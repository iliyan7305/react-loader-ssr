import React from 'react'
import { Example } from '../components'
import { NavLink } from 'react-router-dom';

export default function Greeting(props) {
    return (
        <div>
            <NavLink to={`/`}>
                <h2>
                    Home
                </h2>
            </NavLink>
            <Example name={props.match.params.name}/>
        </div>
    )
}
