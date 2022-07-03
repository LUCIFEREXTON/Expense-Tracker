import "./style.css";
import { useState, useRef, useEffect } from 'react';


const UsedelayEffect = ({ show, setshow, component: Component, delay, showClass, hideClass }) => {
    const [realshow, setrealshow] = useState(show);
    const lock = useRef(false);
    useEffect(() => {
        if (!(lock.current)) {
            lock.current = true;
            setTimeout(() => {
                setrealshow(show);
                lock.current = false;
            }, delay);
        } else {
            setshow(false);
        }
    }, [show, setshow, delay])
    return (realshow &&
        <div className = { show ? showClass : hideClass }>{Component}</div>
    );
}

export default UsedelayEffect;