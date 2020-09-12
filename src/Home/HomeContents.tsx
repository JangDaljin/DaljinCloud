import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faLinux , faReact , faGitSquare , faAndroid, faSwift, faJava , faMicrosoft, faApple , faRaspberryPi, faGit, faWindows } from '@fortawesome/free-brands-svg-icons'






const HomeContentsContainer = styled.div`
    display: flex;

    flex: 1;
    flex-direction: column;

    align-items: stetch;
    justify-content: space-between;

    padding: 10px 20px;
    margin-top: 20px;

    border-color: ${props => props.theme.color.gray};
    border-style: solid;
    border-width: 2px;

    box-shadow: 0px 0px 4px 2px ${props => props.theme.color.gray}
`

const Line = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stetch;
    border: 3px solid ${props => props.theme.color.gray};
    border-radius: 10px;
    margin: 10px 0px;
`

const Text = styled.div`
    display: block;
    font-size: 40px;
    font-weight: 800;
    flex: 1;
    text-align: center;
    font-family: 'jua';
`

const Icon = styled(FontAwesomeIcon)<{color? : string}>`
    margin: 0px 20px;
    color: ${props => props.color? props.color : props.theme.color.black};
`

const IconsLine = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`


const HomeContents : React.FC = () => {

    return (
        <HomeContentsContainer>

            <Line>
            <Text>
                - Develope Device -
            </Text>
            <IconsLine>
                <Icon icon={faApple} size="6x" />
                <Icon icon={faRaspberryPi} size="6x" />
                <Icon icon={faWindows} size="6x" />
            </IconsLine>
            </Line>

            <Line>
            <Text>
                - Server -
            </Text>
            <IconsLine>
                <Icon icon={faNode} size="6x"/>
            </IconsLine>
            </Line>

            <Line>
            <Text>
                - Client -
            </Text>
            <IconsLine>
                <Icon icon={faReact} size="5x"/>
            </IconsLine>
            </Line>

            <Line>
            <Text>
                - SVC -
            </Text>
            <IconsLine>
                <Icon icon={faGitSquare} size="5x"/>
            </IconsLine>
            </Line>

            <Line>
            <Text>
                I can do more !!
            </Text>
            <IconsLine>
                <Icon icon={faJava} size="5x"/>
                <Icon icon={faSwift} size="5x" />
                <Icon icon={faAndroid} size="5x" />
            </IconsLine>
            </Line>



        </HomeContentsContainer>
    )
}


export default HomeContents;