import React,{useState} from 'react'
import MainDashSection from '../components/MainDashSection'
import ScrollToTop from '../components/ScrollToTop'
import NavbarDash from '../components/NavbarDash'


const MainDashBoardPage = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>  
            {/* <ScrollToTop/> */}
            <NavbarDash toggle = {toggle}/>\
            <MainDashSection/>
        </>
    )
}

export default MainDashBoardPage
