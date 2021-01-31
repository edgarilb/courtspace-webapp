import React, {useState} from 'react'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    Button2,
    NavSelect,
    NavBtn2,
    NavBtnLink2,
    Img,
    ImgWrap

} from './HeroElements'
// import {Button} from '../ButtonElement'


const HeroSection = ({isPlayer, img}) => {
    const [hover, setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover);
    };
    return (
        <HeroContainer>
            <HeroBg>
                
                {
                    isPlayer === true ?
                    <ImgWrap>
                        <Img src ={img} alt={'Car'}/>
                    </ImgWrap>
                    
                    :
                    // <div style={{display:'flex', flex:'1', border:'4px solid red'}}>
                        <ImgWrap>
                            <Img src ={img} alt={'Car'}/>
                        </ImgWrap>
                    // </div>
                    
                }
               
            </HeroBg>
            <HeroContent>
            <NavSelect>
                <NavBtn2 light={true}>
                    <NavBtnLink2 to='/' active={true} isPlayer={isPlayer}>Facilities</NavBtnLink2>
                </NavBtn2>
                <NavBtn2>
                    <NavBtnLink2 to='/players' active={false} isPlayer={!isPlayer}>Players</NavBtnLink2>
                </NavBtn2>
            </NavSelect>
                <HeroH1>
                {
                    isPlayer === true ?
                    "Connect with players and sports facilities"
                    :
                    "Sign up with Courtspace Desk today"
                }
                
                </HeroH1>
                <HeroP>
                {
                    isPlayer === true ?
                    "Reservations at sports facilities, chats, payments, rewards and more"
                    :
                    "Connect with customers via chat, receive rental requests, charge no-show fees and receive payments"
                }
                
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                    to={isPlayer === true ?  '/download' : 'signup' }
                    // onClick ={()=> isPlayer === true ? window.open('https://www.google.com/search?sxsrf=ALeKk02nDQqCYLTXdc_CmedhDWjbJGNX2Q%3A1611873800915&ei=CD4TYPmlN5TVtAb0tKGIBg&q=courtspace+app+stores&oq=courtspace+app+stores&gs_lcp=CgZwc3ktYWIQAzoECCMQJ1DiDVjiDWDDD2gAcAB4AIABa4gBsQGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwj5yc3q2b_uAhWUKs0KHXRaCGEQ4dUDCA0&uact=5'):null}
                    
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark='true'
                    >
                        {
                            isPlayer === true ?
                            "Download Courtspace now!"
                            :
                            "Start 30 Days Free Trial" 
                        }
                        {isPlayer === false ?
                         hover ? <ArrowForward/> : <ArrowRight/>
                        :
                        null
                        }
                       
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
