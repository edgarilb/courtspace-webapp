import React, {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import img from '../images/mozaic_19.png'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    
    const isPlayer = false
    return (
        <>
            {/* <Sidebar /> */}
            <Sidebar isOpen = {isOpen} toggle ={toggle}/>
            <Navbar toggle = {toggle}/>
            {/* <Navbar /> */}
            <HeroSection isPlayer={isPlayer} img={img} downloadImg={null} />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
};

export default Home
