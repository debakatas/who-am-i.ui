
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ResponsivePlayer = styled.figure`
    position: relative;
    padding-top: 56.25%;
    width: 100%;

    > * {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const Player = ({ url, style = {}, ...props }) =>
    <ResponsivePlayer style={style}>
        <ReactPlayer url={url} width="100%" height="100%"
            {...props}
            config={{
                youtube: {
                    playerVars: {
                        showinfo: 0,
                        controls: 0,
                        modestbranding: 0,
                        loop: true,
                    },
                }
            }}
        ></ReactPlayer>
    </ResponsivePlayer>
    ;

export default Player;