import React from 'react';

const Timer = (props) => {

    return (
        <div style={{ position: 'absolute', right: '50%', top: '50%' }}>
            {
                props.start ? <h1>Hello</h1> : <h1>Nothing</h1>
            }
        </div>
    )
}

export default Timer