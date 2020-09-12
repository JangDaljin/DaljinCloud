//Default Component
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//My Component
import AppBody from './AppBody'
import AppHeader from './AppHeader'
import AppTailer from './AppTailer'

//Style Component
import { Theme } from './Styles/theme'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'




const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
`


const App : React.FC<{}> = props => {


    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <StyledApp>
                
                <BrowserRouter>
                    <AppHeader />

                    <AppBody />
                    
                    <AppTailer />
                </BrowserRouter>
                
            </StyledApp>
        </ThemeProvider>
    )
}


export default App;