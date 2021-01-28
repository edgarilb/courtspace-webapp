import React, {useState} from 'react'
import VideoFacilities from '../../videos/video2.mp4'
import VideoPlayers from '../../videos/video5.mp4'
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
                {/* {
                    isPlayer === true ?
                    <VideoBg autoPlay loop muted src={VideoPlayers} type ='video5/mp4'/>
                    :
                    <VideoBg autoPlay loop muted src={VideoFacilities} type ='video2/mp4'/>
                } */}
                {
                    isPlayer === true ?
                    <ImgWrap>
                        <Img src ={img} alt={'Car'}/>
                    </ImgWrap>
                    
                    :
                    <ImgWrap>
                        <Img src ={img} alt={'Car'}/>
                    </ImgWrap>
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
                    "Send confirmation and rental request! Pay sports facilities through the app!"
                    :
                    "Start 60 days Free trial"
                }
                
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                    to={isPlayer === true ?  '/players' : 'signup' }
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark='true'
                    >
                        {
                            isPlayer === true ?
                            "Basketball, Soccer and Tennis"
                            :
                            'Get started' 
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
