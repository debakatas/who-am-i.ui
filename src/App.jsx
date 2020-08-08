import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Nav from './components/Nav';
import styled from 'styled-components';
import MouseProvider from './components/MouseContext';
import Art from './components/Art';
import Music from './components/Music';
import Mix from './components/Mix';

const StyledMain = styled.main`
    height: 100%;
`;

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <MouseProvider>
                    <StyledMain>
                        <Switch>
                            <Route path="/music">
                                <Music></Music>
                            </Route>
                            <Route path="/art">
                                <Art></Art>
                            </Route>
                            <Route>
                                <Mix></Mix>
                            </Route>
                        </Switch>
                    </StyledMain>
                </MouseProvider>
            </Router>
        </>
    );
};

export default App;
