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
    playersNavFlag,
    downloadImg

}) => {
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
                                        to={playersNavFlag === true ? '/download' :'/signup'}
                                        // onClick ={()=> playersNavFlag === true ? window.open('https://www.google.com/search?sxsrf=ALeKk02nDQqCYLTXdc_CmedhDWjbJGNX2Q%3A1611873800915&ei=CD4TYPmlN5TVtAb0tKGIBg&q=courtspace+app+stores&oq=courtspace+app+stores&gs_lcp=CgZwc3ktYWIQAzoECCMQJ1DiDVjiDWDDD2gAcAB4AIABa4gBsQGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwj5yc3q2b_uAhWUKs0KHXRaCGEQ4dUDCA0&uact=5'):null}
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
                                    {/* {playersNavFlag === true ?
                                        <ImgWrap>
                                            <Img src ={downloadImg} alt={alt}/>
                                        </ImgWrap>
                       
                                        :
                                        null
                                    
                                    } */}
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
