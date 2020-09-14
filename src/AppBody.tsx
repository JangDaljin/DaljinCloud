import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import RouteTable from './RouteTable'
import NotFound from './NotFound'

const StyledAppBody = styled.div`

    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
`
const AppBody : React.FC = props => {


    return (
        <StyledAppBody>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                {
                    RouteTable.map((item , index) => (
                        <Route path={item.path} key={index}>
                            <item.component />
                        </Route>
                    ))
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </StyledAppBody>
    )

}


export default AppBody;