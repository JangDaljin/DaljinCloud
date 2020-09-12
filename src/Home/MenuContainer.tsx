import React from 'react'
import styled from 'styled-components'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const StyledMenuContainer = styled.div<{isOdd: boolean}>`
    flex: 1 1 120px;
    max-width: 120px;
    margin: 10px;
    background-color: ${props => props.isOdd? props.theme.color.white : props.theme.color.black};
    color: ${props => props.isOdd? '#000' : '#FFF'};
    border-style : solid;
    border-color : ${props => props.theme.color.gray};
    border-width : 2px;
    box-sizing: border-box;
    font-family: 'Jua';
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 4px 4px ${props => props.theme.color.gray};
`

const StyledMenuImageWrap = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
`

const StyledMenuImage = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
    flex: 1;
`



const MenuContainer : React.FC<{seq: number , icon: IconProp , name: string}> = props => {


    return (
        <StyledMenuContainer isOdd={props.seq % 2 == 0 ? false : true}>
            <StyledMenuImageWrap>
                <StyledMenuImage>
                    <StyledIcon icon={props.icon} size={"3x"}/>
                </StyledMenuImage>
            </StyledMenuImageWrap>
        </StyledMenuContainer>
    );
}

export default MenuContainer;