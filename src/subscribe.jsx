import React, { useState, useEffect } from 'react';

function SubscribingEvent() {
    
    let [mousePosition, setMousePosition] = useState({x:null, y:null})

    useEffect(() => {
        function handleMouseMove(e){
            setMousePosition({x:e.clientX, y:e.clientY});
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mouseMove", handleMouseMove);
        }
    },[])
    
    return(
        <>
        <h2>Mouse Position</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </>
    )
}

export default SubscribingEvent;
