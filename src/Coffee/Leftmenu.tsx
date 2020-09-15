import React from 'react'
import { Link  } from 'react-router-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faTint, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Beans from './sub/Beans'
import Extract from './sub/Extract'


const Menus : { name: string , path: string , icon: IconDefinition , children: React.FC}[] =  [
    { name: "BEANS" , path: "/beans" , icon: faLeaf , children: Beans},
    { name: "EXTRACT" , path: "/extract" , icon: faTint, children: Extract },
] 

const StyledLeftMenuContainer = styled.div<{offset: number}>`

    flex-wrap: nowrap;
    background-color: ${props => props.theme.color.black};

    border-right: 2px solid ${props => props.theme.color.gray};
`

const StyledStickyContainer = styled.div`
    position: sticky;
    top: 0px;

    display: flex;
    flex-direction: column;
`

const StyledMenuContainer = styled(Link)`
    display: flex;
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme.color.gray};

    padding: 10px 20px;

    &:hover {
        background-color: ${props => props.theme.color.gray};
        color: ${props => props.theme.color.black};
    };

`

const StyledMenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
`

const StyledMenuIcon = styled(FontAwesomeIcon)`
    flex: 1;
`

const StyledMenuName = styled.div`
    @media (max-width: 600px) {
      display: none;  
    };
    margin-left: 5px;
    font-family: 'jua';
    font-weight: 800;

`

const Leftmenu : React.FC<{rootpath: string, offsetOfHeader: number}> = props => {

    return (
        <StyledLeftMenuContainer offset={props.offsetOfHeader}>
            <StyledStickyContainer>

            {
                Menus.map((item , index) => (
                    <StyledMenuContainer to={`${props.rootpath}${item.path}`} key={index}>
                        <StyledMenuIconContainer>
                            <StyledMenuIcon icon={item.icon} />
                        </StyledMenuIconContainer>

                        <StyledMenuName>
                            {item.name}
                        </StyledMenuName>
                    </StyledMenuContainer>
                ))
            }
            </StyledStickyContainer>

        </StyledLeftMenuContainer>
    )
}


export default Leftmenu;
export { Menus };