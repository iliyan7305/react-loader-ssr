import React, {useState} from 'react'

export default function Example(props) {
    const [name, setName] = useState(props.name);

    return (
        <div>
            <h1>Hello {name}!</h1>
            <input onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
