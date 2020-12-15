import React, {useState, useEffect} from 'react'
// import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo,  NavBtn, NavBtnLink} from './NavbarDashElements'
// import {animateScroll as scroll} from 'react-scroll'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const NavbarDash = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()
    const {logout} = useAuth()

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

    // const toggleHome = ()=>{
    //     scroll.scrollToTop()
    // }

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/signin')
        }catch{
            setError('Failed to log out')
        }
    }
    
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo >
                    Courtspace
                    </NavLogo>
                    {/* <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon> */}
                    <NavBtn>
                        <NavBtnLink onClick={handleLogout} >Logout</NavBtnLink>
                       
                    </NavBtn>
                </NavbarContainer>
              
            </Nav>
          
        </IconContext.Provider>
      </>
    )
}

export default NavbarDash
