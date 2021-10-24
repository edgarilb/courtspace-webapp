import React from 'react'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap, 
    Img,
    Text,
    TextEmail,
    NavBtn,
    NavBtnLink
    // Row1
} from './MainDashElements'

const MainDashSection = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow imgStart = {false}>   
                    <Column1>
                        <TextWrapper>
                            {/* <TopLine>Courtspace Desk</TopLine> */}
                            <Heading lightText = {true}>Welcome</Heading>
                            <Subtitle darkText = {false}>
                               Test
                            </Subtitle>
                        </TextWrapper>
                      
                    </Column1>
               
                    {/* <Row1>
                        <TextWrapper>
                            
                            <TopLine>Heello Desk</TopLine>
                            
                        </TextWrapper>
                    </Row1> */}
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default MainDashSection
