import React, {useState} from 'react'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap, 
    Img,
    Text,
    TextEmail,
    NavBtn,
    NavBtnLink
    // Row1
} from './DashboardElements'
import {useAuth} from '../contexts/AuthContext'
import pic from '../../images/svg-7.svg'
import {db} from '../../firebase'


const Dashboard = () => {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
   
    
    
    return (
        <>
           <InfoContainer lightBg={false}>
                
                <InfoWrapper>
                    <InfoRow imgStart = {false}>   
                        <Column1>
                            <TextWrapper>
                               
                                <TopLine>Courtspace Desk</TopLine>
                                <Heading lightText = {true}>Thanks for creating an account</Heading>
                                <Subtitle darkText = {false}>
                                    Your account has been created but it's not activated yet. A member of the Courtspace team will soon reach out to you. To expedite the process, you can text or call (405)-638-6306. 
                                    If you have any questions you can also send us an email to cs@courtspaceapp.com
                                </Subtitle>
                            </TextWrapper>
                            {/* <NavBtn>
                                <NavBtnLink to={'/main-dashboard'} >Go to Dashboard</NavBtnLink>
                            </NavBtn> */}
                        </Column1>
                        <Column2>
                            <TextEmail> {currentUser.email} </TextEmail>
                            {error && <Text> {error} </Text>}
                            <ImgWrap>
                                <Img src ={pic} alt={'dash'}/>
                            </ImgWrap>
                        </Column2>
                        {/* <Row1>
                            <TextWrapper>
                               
                                <TopLine>Heello Desk</TopLine>
                              
                            </TextWrapper>
                        </Row1> */}
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer> 
        </>
    )
}

export default Dashboard
