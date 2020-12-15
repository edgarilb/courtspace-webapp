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
} from './DashboardElements'
import {useAuth} from '../contexts/AuthContext'
import pic from '../../images/svg-7.svg'


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
                                    A member of the Courtspace team will soon reach out to you in order to schedule a visit to your sport facility. 
                                    If you have any questions you can send us an email to cs@courtspaceapp.com
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextEmail> {currentUser.email} </TextEmail>
                            {error && <Text> {error} </Text>}
                            <ImgWrap>
                                <Img src ={pic} alt={'dash'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer> 
        </>
    )
}

export default Dashboard
