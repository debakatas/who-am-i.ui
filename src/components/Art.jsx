import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MouseContext } from './MouseContext';
import { doGet } from '../fetch';

const StyledFigure = styled.figure`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    transform: translateY(-10%);
`;

const StyledDiv = styled.div`
    position: relative;
    overflow: hidden;
`;

const StyledImg = styled.img`
    object-fit: contain;
    max-width: 50vw;
    max-height: 50vh;
    margin-left: 10vh;
`;

const StyledH1 = styled.h1`
    font-size: 10vmin;
    position: absolute;
    top: 50%;

    ${({ secondary, img }) => secondary ? css`
        color: white;
        right: 0;
        transform: translate(60%, -50%);
        z-index: 10;
    ` : css`
        transform: translate(-40%, -50%);
        z-index: -10;
        background-color: black;
        background-image: url(${img});
        background-size: cover;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `}

`;

const Art = () => {
    const getMovement = useContext(MouseContext);
    const { y, yNeg } = getMovement(100);
    const [artist, setArtist] = useState(null);

    const getArtist = async () => {
        setArtist(
            await doGet('art')
        );
    };

    useEffect(() => {
        getArtist();
    }, []);

    if (!artist) return null;

    return (
        <StyledFigure>
            <StyledDiv style={{ transform: `translateY(${yNeg}px)` }}>
                <StyledImg src={artist.url} alt={artist.name} />
                <StyledH1 secondary>{artist.name}</StyledH1>
            </StyledDiv>
            <figcaption style={{ transform: `translateY(${y}px)`, zIndex: -1 }}>
                <StyledH1 img={artist.url} >{artist.name}</StyledH1>
            </figcaption>
        </StyledFigure>
    );
};

export default Art;