import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Button2} from './HeroElements'
// import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover);
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video2/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Sign up with Courtspace Desk today
                </HeroH1>
                <HeroP>
                Start 60 days Free trial
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 to='signup' onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark='true'
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
