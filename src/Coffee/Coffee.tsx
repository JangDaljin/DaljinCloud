import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
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

const Coffee : React.FC = () => {

    const { path } = useRouteMatch();

    return (
        <StyledCoffeeContainer>

            <LeftMenu rootpath={path} />

            <StyledContentContainer>

                <Switch>
                    <Route exact path={path}>
                        <div>INDEX</div>
                    </Route>
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