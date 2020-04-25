import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <NavLink to={`/greet/gosho`} >
                <div>
                    <h1>Greetings gosho!</h1>
                </div>
            </NavLink>
            Welcome to the homepage!
        </div>
    )
}
