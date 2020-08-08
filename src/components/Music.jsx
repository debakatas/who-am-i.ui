import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { doGet } from '../fetch';
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
    const [music, setMusic] = useState(null);

    const getMovement = useContext(MouseContext);
    const { x } = getMovement(30);
    const { yNeg, xNeg } = getMovement(100);

    const getMusic = async () => {
        const song = await doGet('music');
        setMusic(
            song.url
        );
    };

    useEffect(() => {
        getMusic();
    }, []);

    if (!music) return null;


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