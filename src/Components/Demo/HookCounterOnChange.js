import React from 'react';

function HookCounter() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        console.log('Use Effect - Updating Document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type={'text'} value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounter
