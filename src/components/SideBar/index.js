import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
    SidebarLink2,
} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='chats' onClick={toggle}>
                        Chats
                    </SidebarLink>
                    <SidebarLink to='rentals' onClick={toggle}>
                        Rental Requests
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink2 to='/signup' onClick={toggle}>
                        Sign up
                    </SidebarLink2>
                </SidebarMenu>
                
            </SidebarWrapper>
            <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign in
                    </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
