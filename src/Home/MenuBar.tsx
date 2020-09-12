import React from 'react'
import styled from 'styled-components'

import MenuContainer from './MenuContainer'

import RouteTable from '../RouteTable'

import { faCoffee, faCloud, faGamepad, faPlay, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faComments, faBookmark  } from '@fortawesome/free-regular-svg-icons'

const StyledMenuBar = styled.div`
    display: flex;
    flex-direction: column;

    border-color: ${props => props.theme.color.gray};
    border-style: solid;
    border-width: 2px;
    
    box-shadow: 0px 0px 4px 2px ${props => props.theme.color.gray}
`



const Menus = [
    { icon: faCoffee,   name : "Coffee" },
    { icon: faComments, name: "Comments" },
    { icon: faCloud,    name: "Cloud" },
    { icon: faGamepad,  name: "Game"},
    { icon: faBookmark, name: "Bookmark"},
    { icon: faHeadphones, name: "Music"},

]

const StyledName = styled.div`
    color: ${props => props.theme.color.gray};
    font-family: 'jua';    
    font-weight: 800;
    font-size: 20px;
    padding: 10px;

    background-color: ${props => props.theme.color.black};

    border-bottom: 2px solid ${props => props.theme.color.gray};
`

const StyledMenuLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    padding: 5px;
`


const MenuBar : React.FC = () => {

    return (
        <StyledMenuBar>
            <StyledName>
                MENU
            </StyledName>

            <StyledMenuLine>
                {
                    RouteTable.map((item , index) => (
                        <MenuContainer seq={index} icon={item.icon} name={item.name} key={index} />
                    ))
                }
            </StyledMenuLine>

        </StyledMenuBar>
 
    );
}

export default MenuBar;