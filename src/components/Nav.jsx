import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-weight: var(--font-weight-bld);
    font-size: 1.2rem;


    &::after{
        content: "";
        height: 100vh;
        position: fixed;
        width: 200px;
        background: black;
        left: 0;
        top: 0;
        z-index: -10;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    position: relative;
    z-index: 10;
`;

const StyledLi = styled.li`
    margin-right: 2rem;

    &:last-child {
        margin-right: 0;
    }

    a {
        text-decoration: none;

        &:hover{
            text-decoration:underline;
        }
    }
`;

const Nav = () => {
    return (<StyledNav>
        <StyledUl>
            <StyledLi>
                <Link to="/art">Art</Link>
            </StyledLi>

            <StyledLi>
                <Link to="/">X</Link>
            </StyledLi>

            <StyledLi>
                <Link to="/music">Music</Link>
            </StyledLi>
        </StyledUl>
    </StyledNav>);
};

export default Nav;