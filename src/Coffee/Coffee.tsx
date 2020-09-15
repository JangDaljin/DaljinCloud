import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import LeftMenu , { Menus } from './Leftmenu'
const StyledCoffeeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowwrap;
`

const StyledContentContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`

const Coffee : React.FC<{offset: number}> = props => {

    const { path } = useRouteMatch();

    return (
        <StyledCoffeeContainer>

            <LeftMenu rootpath={path} offsetOfHeader={props.offset} />

            <StyledContentContainer>

                <Switch>
                    <Redirect exact path={path} to={`${path}${Menus[0].path}`} />    
                    {
                        Menus.map((item , index) => (
                            <Route key={index} 
                                    path={`${path}${item.path}`}
                                    children={item.children} />
                        ))
                    }
                </Switch>

            </StyledContentContainer>
        </StyledCoffeeContainer>
    )
}

export default Coffee;