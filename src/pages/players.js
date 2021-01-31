import React,{useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import { homeObjPlayersOne, homeObjPlayersTwo, homeObjPlayersThree} from '../components/InfoSection/Data'
import img from '../images/svg-2.svg'
import downloadImg from '../images/download.png'

const PlayersPage = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    const isPlayer = true
    return (
        <>
            <Sidebar isOpen = {isOpen} toggle ={toggle}/>
            <Navbar isPlayer={isPlayer} toggle = {toggle}/>
            <HeroSection isPlayer={isPlayer} img={img} downloadImg={downloadImg}/>
            <InfoSection {...homeObjPlayersOne}/>
            <InfoSection {...homeObjPlayersTwo}/>
            <InfoSection {...homeObjPlayersThree}/>
            <Footer />
        </>
    )
}

export default PlayersPage
