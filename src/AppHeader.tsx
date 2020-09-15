import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from './Assets/Images/daljin_logo_horizon.png'

import RouteTable from './RouteTable'

import { Link } from 'react-router-dom'

const StyledAppHeader = styled.div<{height: number}>`
    height: ${props => props.height}px;
    display: flex;
    flex-direction: column;

    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.color.gray};
`

const StyledAppHeaderContainer = styled.div`
    flex: 1;

    display: flex;
    align-items: stretch;
    flex-direction: row;

    background-color: ${props => props.theme.color.black};

`

const StyledAppHeaderLeft = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
`

const StyledAppHeaderCenter = styled.div`
    flex: 1;
`

const StyledAppHeaderRight = styled.div`
    flex: 1;
`

const StyledLogoImage = styled(Link)`
    width: 160px;
    height: 60px;
    background-image: url('${Logo}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    cursor: pointer;
`

const StyledMenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.color.black };
    border-top: 2px dashed ${props => props.theme.color.white };
`

const StyledMenuContainer = styled(Link)`
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.color.white};

    justify-content: center;
    position: relative;

    &:hover {
        background-color: ${props => props.theme.color.deepgray};
    };


`

const StyledMenuIcon = styled(FontAwesomeIcon)`
    
`

const StyledMenuName = styled.div`
    margin-left: 5px;
    font-family: 'jua';
    font-weight: 800;
    @media (max-width: 768px) {
        display: none;
    };
`


const AppHeader : React.FC<{height: number}> = props => {

    return (
        <StyledAppHeader height={props.height}>
            <StyledAppHeaderContainer>
                <StyledAppHeaderLeft>
                    <StyledLogoImage to="/" />
                </StyledAppHeaderLeft>

                <StyledAppHeaderCenter />

                <StyledAppHeaderRight />
            </StyledAppHeaderContainer>

            <StyledMenuBarContainer>
                {
                    RouteTable.map((item , index) => (
                        <StyledMenuContainer key={index} to={item.path}>
                            <StyledMenuIcon icon={item.icon} size="1x" />
                            <StyledMenuName>
                                {item.name}
                            </StyledMenuName>
                        </StyledMenuContainer>
                    ))
                }
            </StyledMenuBarContainer>
        </StyledAppHeader>
    )

}

export default AppHeader