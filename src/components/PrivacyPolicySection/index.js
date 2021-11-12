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
} from './PrivacyElements'


const PrivacyPolicySection = ({
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
    playersNavFlag,
    downloadImg

}) => {
    return (
        <> 
            <InfoContainer lightBg={lightBg} id ={id}>
                <InfoWrapper>
                    <InfoWrapper2>
                        <TextWrapper>
                            {/* <TopLine>{topLine}</TopLine> */}
                            <Heading lightText = {lightText}>{headLine}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                        </TextWrapper>
                       
                    </InfoWrapper2>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default PrivacyPolicySection
