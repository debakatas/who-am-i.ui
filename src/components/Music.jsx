import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MouseContext } from './MouseContext';
import Player from './Player';


const StyledDiv = styled.div`
    padding-inline: 20%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Music = () => {
    const [music, setMusic] = useState("https://www.youtube.com/watch?v=BvYuf4r-8xk");

    const getMovement = useContext(MouseContext);
    const { x } = getMovement(30);
    const { yNeg, xNeg } = getMovement(100);

    return (
        <StyledDiv>
            <Player
                url={music}
                style={{
                    boxShadow: `${xNeg}px ${yNeg}px 0px #fbe5a4`
                }}
                volume={((x + 15) / 100)}
            ></Player>
        </StyledDiv >
    );
};

export default Music;