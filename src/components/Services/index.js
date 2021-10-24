import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-5.svg'


import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard,
    ServicesIcon, 
    ServicesH2, 
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Recover Revenue</ServicesH2>
                    <ServicesP>Charge No-Show Fees and increase your revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Get Customers</ServicesH2>
                    <ServicesP>Receive rental requests from Courtspace users</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Chat Access</ServicesH2>
                    <ServicesP>Access to live chats is a multi-user experience</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
