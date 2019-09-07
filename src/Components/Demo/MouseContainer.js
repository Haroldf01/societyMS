import React from 'react';
import HookMouse from "./HookMouse";

function MouseContainer() {
    const [display, setDisplay] = React.useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
