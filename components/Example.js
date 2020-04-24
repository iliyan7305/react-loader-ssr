import React, {useState} from 'react'
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableNested = Loadable({
    loader: () => import('./ExampleNested'),
    loading: Loading,
})

export default function Example() {
    const [name, setName] = useState('gosho');

    return (
        <div>
            <h1>Hello {name}!</h1>
            <input onChange={(e) => setName(e.target.value)} />
            <LoadableNested/>
        </div>
    )
}
