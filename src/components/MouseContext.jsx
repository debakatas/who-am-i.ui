import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import throttle from 'lodash.throttle';

export const MouseContext = createContext();

const MouseProvider = ({ children }) => {
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0,
    });

    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    const moveAround = ({ clientX, clientY }) => {
        setMousePos({
            x: clientX,
            y: clientY,
        });
    };
    const throttledMoveAround = throttle(moveAround, 500);

    const changeScreenSize = () => {
        const { clientWidth: width, clientHeight: height } = document.body;

        setScreenSize({
            width,
            height
        });
    };

    const getMovement = useCallback(
        (movement) => {
            const { x: xMovement = movement, y: yMovement = movement } = movement;
            const { width, height } = screenSize;
            const { x: clientX, y: clientY } = mousePos;

            const xSpace = (clientX / width) * xMovement - xMovement / 2;
            const ySpace = (clientY / height) * yMovement - yMovement / 2;

            return {
                x: xSpace,
                xNeg: xSpace * -1,
                y: ySpace,
                yNeg: ySpace * -1,
            };
        },
        [mousePos, screenSize]
    );

    useEffect(() => {
        document.documentElement.addEventListener(
            'mousemove',
            throttledMoveAround
        );

        return () => {
            document.documentElement.removeEventListener(
                'mousemove',
                throttledMoveAround
            );
        };
    }, [throttledMoveAround]);

    useEffect(() => {
        changeScreenSize();
        window.addEventListener('resize', changeScreenSize);

        return () => {
            window.removeEventListener('resize', changeScreenSize);
        };
    }, []);

    return (
        <MouseContext.Provider value={getMovement}>
            {children}
        </MouseContext.Provider>
    );
};

export const useMovement = () => useContext(MouseContext);

export default MouseProvider;