import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLinks2} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    } 

    useEffect(() => {
       window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to='/'>
                    Courtspace
                    </NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='chats'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Chats</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='rentals'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            
                            >Rental Requests</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='services'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            
                            >All Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks2 
                            to='/signup'
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sign up</NavLinks2>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar
