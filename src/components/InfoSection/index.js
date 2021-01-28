import React from 'react'
import {Button2} from '../ButtonElements2'
// import {  } from './InfoElements'

import { 
    InfoContainer, 
    InfoWrapper, 
    InfoWrapper2,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img,
} from './InfoElements'


const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, 
    primary, 
    dark, 
    dark2,
    playersNavFlag}) => {
    return (
        <> 
            <InfoContainer lightBg={lightBg} id ={id}>
                <InfoWrapper>
                    <InfoWrapper2>
                        <InfoRow imgStart = {imgStart}>   
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText = {lightText}>{headLine}</Heading>
                                    <Subtitle darkText = {darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Button2 
                                        to={playersNavFlag === true ? '/players' :'/signup'}
                                        primary={primary ? 1: 0} 
                                        dark={dark ? 1 :0}
                                        dark2 = {dark2 ? 1:0}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}

                                        >
                                            {buttonLabel}
                                        </Button2>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src ={img} alt={alt}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper2>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
