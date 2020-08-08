import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Player from './Player';
import { useMovement } from './MouseContext';
import { doGet } from '../fetch';

const StyledSection = styled.section`
    padding-inline: 20% 10%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -5%;
`;

const StyledTitle = styled.h1`
    font-size: 80px;
    transform: translate(20%, -50%);
    z-index: -1;
    font-weight: var(--font-weight-bld);
`;

const StyledFigure = styled.figure`
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 10%;
    left: 20%;
    max-width: 50vw;

    > img {
        object-fit: contain;
        max-height: 50vh;
    }
`;

const PlayerWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    > *{
        width: 80%;
        margin: auto;
    }
`;

const StyledCopy = styled.span`
    font-size: 80px;
    font-family: var(--font-family-title);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-30%, 50%);
    z-index: 10;
    color: white;
    display: inline-block;
    width: min-content;
`;

const Mix = () => {
    const [artist, setArtist] = useState(
        null
    );
    const [music, setMusic] = useState(null);

    const getMovement = useMovement();
    const { x, yNeg } = getMovement(100);

    useEffect(() => {
        doGet('music').then(({ url }) => setMusic(url));
        doGet('art').then(a => setArtist(a));
    }, []);

    if (!artist || !music) return null;

    return (
        <StyledSection>
            <StyledFigure >
                <img src={artist.url} alt="" />
            </StyledFigure>

            <PlayerWrapper>
                <Player
                    style={{
                        boxShadow: `${x}px ${yNeg}px 0px #fbe5a4`
                    }}
                    url={music}></Player>
                <StyledCopy img={artist.url}>{artist.name}</StyledCopy>
            </PlayerWrapper>

            <StyledTitle>{artist.name}</StyledTitle>
        </StyledSection>
    );
};

export default Mix;