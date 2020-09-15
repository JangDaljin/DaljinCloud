import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faInternetExplorer, faFirefoxBrowser, faSafari } from '@fortawesome/free-brands-svg-icons'

const StyledAppTailer = styled.div<{height: number}>`
    display: flex;
    box-sizing: border-box;
    background-color: #EFEFEF;

    padding: 20px;

    height: ${props => props.height}px;
`

const StyledBottomContainer = styled.div`
    display: flex;
    justify-content: space-around;


    padding: 5px;  

    width: 1000px;
    margin: auto;

    @media (max-width: 1000px) {
        width: auto;
        margin: 0px;  
    };

`

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledContentSubject = styled.div`
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 10px;
`

const StyledContentExample = styled.div`
    font-size: 12px;
    font-weight: 600;
`

const StyledContentIcons = styled.div`

`

const StyledContentIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`



const BottomContent : React.FC = () => {

    return (
        <StyledBottomContainer>
            <StyledContentContainer>
                <StyledContentSubject>
                    WEBPACK
                </StyledContentSubject>
                <StyledContentExample>
                    LOADERS: HTML, CSS, STYLE, FILE, URL, TS , BABEL
                </StyledContentExample>
            </StyledContentContainer>

            <StyledContentContainer>
                <StyledContentSubject>
                    SUPPORTED WEB BROWSER
                </StyledContentSubject>
                <StyledContentIcons>
                    <StyledContentIcon icon={faChrome} size="2x" />
                    <StyledContentIcon icon={faInternetExplorer} size="2x" />
                    <StyledContentIcon icon={faFirefoxBrowser} size="2x" />
                    <StyledContentIcon icon={faSafari} size="2x" />

                </StyledContentIcons>
            </StyledContentContainer>
        </StyledBottomContainer>
    )
}

const AppTailer : React.FC<{height: number}> = props => {

    return (
        <StyledAppTailer height={props.height}>
            <BottomContent />
        </StyledAppTailer>
    )

}
export default AppTailer