import React, { useEffect, useState } from 'react';

const Timer = (props) => {
    const [ms, setMS] = useState(0);
    const [s, setS] = useState(0);
    const [m, setM] = useState(0);
    const [h, setH] = useState(0);

    useEffect(() => {
        if(props.start) {
            setMS(ms + 1);
            if(ms == 1000) {
                setS(s + 1);
                setMS(0);
            }
            if(s == 60) {
                setM(m + 1);
                setS(0);
            }
            if(m == 60) {
                setH(h + 1);
                setM(0);
            }
        }
        if(props.reset) {
            setMS(0);
            setS(0);
            setM(0);
            setH(0);
        }
    }, [ms, props.start, props.reset])

    return (
        <div style={{ position: 'absolute', right: '50%', top: '50%' }}>
            <h1>
            {`${h}:${m}:${s}:${ms}`} 
            </h1>
        </div>
    )
}

export default Timer