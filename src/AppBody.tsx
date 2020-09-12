import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import RouteTable from './RouteTable'
import Coffee from './Coffee/Coffee'

const StyledAppBody = styled.div`

    flex: 1;

    display: flex;
    flex-direction: column;
    padding: 20px;
`
const AppBody : React.FC = props => {


    return (
        <StyledAppBody>
            <Switch>
                <Route path="/" exact component={Home} />
                {
                    RouteTable.map((item , index) => (
                        <Route path={item.path} component={item.component} key={index} />
                    ))
                }
            </Switch>
        </StyledAppBody>
    )

}


export default AppBody;