import React from 'react';

function HookMouse() {
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    React.useEffect(() => {
        console.log('Use Effect Called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component UnMounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return(
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
