import React from 'react'
import styled from 'styled-components'

import Coffeepot from '../../Assets/Images/coffee/coffeepot.svg'
import Coldbrew from '../../Assets/Images/coffee/Coldbrew.svg'
import Espresso from '../../Assets/Images/coffee/Espresso.svg'
import Frechpress from '../../Assets/Images/coffee/frenchpress.svg'
import Handdrip from '../../Assets/Images/coffee/handdrip.svg'
import CupOfCoffee from '../../Assets/Images/coffee/cupofcoffee.svg'
import QuestionMark from '../../Assets/Images/coffee/questionmark.svg'

const StyledExtractContainer = styled.div`
    padding: 20px;

    margin: auto;
`

const StyledTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 2px solid ${props => props.theme.color.gray};
    box-shadow: 0px 0px 4px 4px ${props => props.theme.color.gray};
`

const StyledRowContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
`

const StyledCellContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    border: 2px solid ${props => props.theme.color.gray};
    border-radius: 10px;
    box-shadow: 0px 0px 4px 4px ${props => props.theme.color.gray};

    margin: 10px;
`

const StyledSVGImage = styled.img`
    width: 100%;
    max-width: 240px;
    margin-bottom: 20px;
`

const StyledSVGImageOnly = styled.img`
    width: 100%;
    max-width: 240px;
    margin: 10px 0px;
`

const StyledTextContainer = styled.div`
    width 240px;
    display: flex;
`

const StyledTextSubject = styled.div`
    flex: 0 0 80px;

    display: flex;
    align-items: center;

    font-family: 'jua';
    font-size: 18px;
    font-weight: 800;

    padding: 5px 10px;
`

const StyledText = styled.div`
    flex: 1;
    font-family: 'jua';
    font-size: 18px;
    font-weight: 400;

    display: flex;
    justify-content: center;
    align-items: center;

`

const ExtractList : ({name?: string, level?: string, image: any}[])[] = [
    [{ name: "MOCA POT" , level: "MIDDLE" , image: <StyledSVGImage src={Coffeepot} />},
    { name: "COLD BREW" , level: "BOLD" , image: <StyledSVGImage src={Coldbrew} /> },
    { name: "ESPRESSO" , level: "FINE" , image: <StyledSVGImage src={Espresso} /> }],
    [{ name: "FRENCH PRESS" , level: "BOLD" , image: <StyledSVGImage src={Frechpress} /> },
    { name: undefined , level: undefined , image: <StyledSVGImageOnly src={CupOfCoffee} /> },
    { name: "HAND DRIP" , level: "MIDDLE" , image: <StyledSVGImage src={Handdrip} /> }],
    [{ name: undefined , level: undefined , image: <StyledSVGImageOnly src={QuestionMark} /> },
    { name: undefined , level: undefined , image: <StyledSVGImageOnly src={QuestionMark} />},
    { name: undefined , level: undefined , image: <StyledSVGImageOnly src={QuestionMark} />}],
]


const Extract : React.FC = () => {



    return (
        <StyledExtractContainer>
            <StyledTableContainer>

                {
                    ExtractList.map((item , index) => (
                        <StyledRowContainer key={index}>
                            {
                                item.map((item2, index2) => (
                                    <StyledCellContainer key={index2}>
                                        {item2.image}
                                        
                                        {item2.name !== undefined &&
                                            <StyledTextContainer>
                                                <StyledTextSubject>{"NAME"}</StyledTextSubject>
                                                <StyledText>{item2.name}</StyledText>
                                            </StyledTextContainer>
                                        }

                                        {item2.level !== undefined &&
                                            <StyledTextContainer>
                                                <StyledTextSubject>{"GRIND"}</StyledTextSubject>
                                                <StyledText>{item2.level}</StyledText>
                                            </StyledTextContainer>
                                        }

                                    </StyledCellContainer>
                                ))
                            }
                        </StyledRowContainer>
                    ))
                }
            </StyledTableContainer>
        </StyledExtractContainer>
    )
}

export default Extract;