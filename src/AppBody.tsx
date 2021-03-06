import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import RouteTable from './RouteTable'
import NotFound from './NotFound'

const StyledAppBody = styled.div<{offset: number}>`

    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    min-height: calc(100vh - ${props => props.offset}px);
`
const AppBody : React.FC<{offset : number}> = props => {

    

    return (
        <StyledAppBody offset={props.offset}>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                {
                    RouteTable.map((item , index) => (
                        <Route path={item.path} key={index}>
                            <item.component offset={props.offset} />
                        </Route>
                    ))
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </StyledAppBody>
    )

}


export default AppBody;