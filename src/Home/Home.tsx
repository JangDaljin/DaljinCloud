import React from 'react'
import styled from 'styled-components'

import MenuBar from './MenuBar'
import HomeContents from './HomeContents'
const StyledHomeContainer = styled.div`
    flex: 1;    
    display: flex;
    flex-direction: column;

    width: 1000px;
    margin: auto;
    padding: 20px;

    @media (max-width: 1000px) {
        width: auto;
        margin: 0px;
    };
`





const Home : React.FC = () => {

    return (
        <StyledHomeContainer>

            <MenuBar />

            <HomeContents />


        </StyledHomeContainer>
 
    );
}

export default Home;