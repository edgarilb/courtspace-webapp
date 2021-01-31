import React from 'react'
import {
    Container, 
    IconsContainers, 
    IosWrapper, 
    IosButton,
    NavSelect,
    NavBtn2,
    NavBtnLink2,
    TextBtn

} from './DownloadElements'
import {FaApple, FaGooglePlay} from 'react-icons/fa'

const Download = () => {
    return (
        <>
            <Container>
               
                <IconsContainers>
                    <NavSelect>
                        <div style={{flex:1}}>
                            <p style={{color:'#fff'}}>
                                DOWNLOAD COURTSPACE NOW!
                            </p>
                        </div>
                        <NavBtn2 >
                            <NavBtnLink2 
                             active={true}
                             onClick ={()=> window.open('https://apps.apple.com/us/app/courtspace/id1479651901?ls=1')}
                             >
                                <FaApple style={{flex:'1',justifyContent:'center',alignItems:'center', display:'flex',color:'#fff'}}/>
                                <TextBtn>
                                APPLE STORE
                                </TextBtn>
                            </NavBtnLink2>
                        </NavBtn2>
                        <NavBtn2>
                            <NavBtnLink2 
                                active={true}
                                onClick ={()=> window.open('https://play.google.com/store/apps/details?id=com.courtspaceapp.cs')}
                                >
                                <FaGooglePlay style={{flex:'1',justifyContent:'center',alignItems:'center', display:'flex',color:'#fff'}}/>
                                <TextBtn>
                                GOOGLE PLAY
                                </TextBtn>
                            </NavBtnLink2>
                        </NavBtn2>     
                    </NavSelect>
                    
                
           
                </IconsContainers>
      
            </Container> 
        </>
    )
}

export default Download
