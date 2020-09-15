import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StyledBeanContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const StyledBeanLineContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
`

const StyledBeanLineName = styled.div`
    font-family: 'jua';
    font-weight: 800;
    font-size: 40px;
    text-align: center;
    padding-top: 20px;
`

const StyledBean = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.color.gray};
    box-shadow: 0px 0px 4px 4px ${props => props.theme.color.gray};
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
    width: 340px;

    @media (max-width: 600px) {
        width: auto;
        flex: 1;
    };
`

const StyledBeanName = styled.div`
    font-size: 30px;
    font-family: 'jua';
    font-weight: 800;
    margin-bottom: 10px;
    text-align: center;
`


const StyledTasteContainer = styled.div`
    border: 2px solid ${props => props.theme.color.gray};
    box-shadow: 0px 0px 4px 2px ${props => props.theme.color.gray};
    padding: 10px;
    border-radius: 10px;
`
const StyledTasteRow = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
`

const StyledTasteSubject = styled.div`
    flex:1;
    font-size: 16px;
    font-family: 'jua';
    font-weight: 600;
`

const StyledTasteStars =styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledTasteStar = styled(FontAwesomeIcon)<{isColor: boolean}>`
    color: ${props => props.isColor? props.theme.color.black : props.theme.color.gray};
`

const StyledLine = styled.div`
    border: 2px dashed ${props => props.theme.color.black};
`


const Taste : React.FC<{
    aroma: number,
    acidity: number,
    sweet: number,
    bitter: number,
    body: number}> = props => {

    const subjects: {name: string , value: number}[] = 
    [{ name:"AROMA" , value: props.aroma },
     { name: "ACIDITY" , value: props.acidity },
     { name: "SWEET" , value: props.sweet },
     { name: "BITTER" , value: props.bitter },
     { name: "BODY" , value: props.body }];

    return(

        <StyledTasteContainer>
            {
                subjects.map((item , index) => (
                    <StyledTasteRow key={index}>
                        <StyledTasteSubject>{item.name}</StyledTasteSubject>
                        <StyledTasteStars>
                        {
                            [...Array(item.value)].map((n , index) => (
                                <StyledTasteStar icon={faStar} isColor={true} key={index} />
                            ))
                        }

                        {
                            [...Array(5 - item.value)].map((n , index) => (
                                <StyledTasteStar icon={faStar} isColor={false} key={index}/>
                            ))
                        }
                        </StyledTasteStars>
                    </StyledTasteRow>
                ))
            }


        </StyledTasteContainer>
    )

}

interface BeanType {
    country: string,
    name: string,
    taste: number[]
}

const BeanList : BeanType[]  = [
    { country: "케냐", name: "케냐AA" , taste: [4,4,3,2,3] },
    { country: "에티오피아", name: "시다모 G2" , taste: [4,3,3,3,3] },
    { country: "에티오피아", name: "시다모 G4" , taste: [3,2,3,3,3] },
    { country: "코스타리카", name: "따라주" , taste: [4,3,3,3,3] },
    { country: "콜롬비아", name: "수프리모" , taste: [3,2,3,3,3] },
    { country: "과테말라", name: "안티구아" , taste: [4,3,3,3,4] },
    { country: "인도네시아", name: "만델링 G1" , taste: [3,1,3,3,4] },
    { country: "탄자니아", name: "노스AA" , taste: [3,4,3,3,3] },
    { country: "인도", name: "카피 로얄" , taste: [3,2,3,4,3] },
    { country: "베트남", name: "로부스타" , taste: [2,1,3,4,3] },
    { country: "미얀마", name: "샨하이랜드" , taste: [3,3,4,3,3] },
]

const SpeacialBeanList : BeanType[] = [
    {country: "에티오피아" , name: "코케허니" , taste:[4,3,4,2,2]},
    {country: "에티오피아" , name: "코체레첼바" , taste:[4,3,3,2,3]},
    {country: "에티오피아" , name: "아리차" , taste:[4,3,3,2,3]},
    {country: "온두라스", name: "마르깔라" , taste:[4,3,3,2,2]},

]

const Beans : React.FC = () => {

    return (
        <StyledBeanContainer>
            <StyledBeanLineName>
                {"일반"}
            </StyledBeanLineName>
            <StyledBeanLineContainer>
            {
                BeanList.map((item ,index) => (
                    <StyledBean key={index}>
                        <StyledBeanName>
                            {item.country}{" - "}{item.name}
                        </StyledBeanName>

                        <Taste  aroma={item.taste[0]} 
                                acidity={item.taste[1]}
                                sweet={item.taste[2]} 
                                bitter={item.taste[3]} 
                                body={item.taste[4]} />
                    </StyledBean>
                ))
            }
            </StyledBeanLineContainer>

            <StyledLine />

            <StyledBeanLineName>
                {"스페셜티"}
            </StyledBeanLineName>
            <StyledBeanLineContainer>
            {
                SpeacialBeanList.map((item ,index) => (
                    <StyledBean key={index}>
                        <StyledBeanName>
                            {item.country}{" - "}{item.name}
                        </StyledBeanName>

                        <Taste  aroma={item.taste[0]} 
                                acidity={item.taste[1]}
                                sweet={item.taste[2]} 
                                bitter={item.taste[3]} 
                                body={item.taste[4]} />
                    </StyledBean>
                ))
            }
            </StyledBeanLineContainer>






        </StyledBeanContainer>
    )
}

export default Beans;