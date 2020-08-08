import React, { useState } from 'react';
import styled from 'styled-components';

import Player from './Player';
import { useMovement } from './MouseContext';

const StyledSection = styled.section`
    padding-inline: 20% 10%;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    font-size: 80px;
    transform: translate(20%, -50%);
    z-index: -1;
    font-weight: var(--font-weight-bld);
`;

const StyledFigure = styled.figure`
    max-width: 50vw;
    max-height: 50vh;
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 30%;
    left: 40%;
    transform: translate(-50%, -50%);
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
    const [artist, setArtist] = useState({
        name: 'Monet',
        url: "https://media.wsimag.com/attachments/8805d36b3d7fbe2eb26e7736f1925bbc5a45931b/store/fill/1090/613/b0eb32d11faf7605b4d67d56f1a719d68e697996980fc623a50a934e108f/Guernica-detalle-Picasso.jpg"
    });
    const [music, setMusic] = useState("https://www.youtube.com/watch?v=BvYuf4r-8xk");

    const getMovement = useMovement();
    const { xNeg, yNeg } = getMovement(30);

    return (
        <StyledSection>
            <StyledFigure >
                <img src={artist.url} alt="" />
            </StyledFigure>

            <PlayerWrapper>
                <Player url={music}></Player>
                <StyledCopy img={artist.url}>{artist.name}</StyledCopy>
            </PlayerWrapper>

            <StyledTitle>{artist.name}</StyledTitle>
        </StyledSection>
    );
};

export default Mix;