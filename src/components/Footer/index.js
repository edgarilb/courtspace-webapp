import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
}
from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            {/* <FooterLink to='/signin'>Careers</FooterLink> */}
                            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
                            <FooterLink to='/signin'>Terms of Services</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact us </FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Sponsorships</FooterLink>
                            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
                            {/* <FooterLink to='/signin'>Terms of Services</FooterLink>  */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>How does it work</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Happy Customers</FooterLink>
                            {/* <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Services</FooterLink>  */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            {/* <FooterLink to='/signin'>Twitter</FooterLink> */}
                            {/* <FooterLink to='/signin'>Terms of Services</FooterLink>  */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Courtspace
                        </SocialLogo>
                        <WebsiteRights>Courtspace 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
