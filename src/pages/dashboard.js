import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Dashboard from '../components/Dashboard'
import NavbarDash from '../components/NavbarDash'

const DashboardPage = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
    
        <ScrollToTop/>
        <NavbarDash toggle = {toggle}/>
        <Dashboard/>

        </>
    )
}

export default DashboardPage
