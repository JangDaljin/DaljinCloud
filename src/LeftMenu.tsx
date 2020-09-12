import React from 'react'
import styled from 'styled-components'






const StyledLeftMenuContainer = styled.div<{headerOffset: number , tailerOffset: number}>`

    position: fixed;

    top: ${props => props.headerOffset}px;

    width: 400px;

    background-color: ${props => props.theme.color.black};

`


const LeftMenu : React.FC<{headerOffset: number , tailerOffset: number}> = props => {


    return (
        <StyledLeftMenuContainer 
            headerOffset={props.headerOffset} 
            tailerOffset={props.tailerOffset}>

                

        </StyledLeftMenuContainer>
    )
}

export default LeftMenu