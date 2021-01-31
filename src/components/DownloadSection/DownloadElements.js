import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    top:0;
    z-index: 0;
    overflow: hidden;
    /* display:flex;
    justify-content:center; */
    background: #000;

`;

export const IconsContainers = styled.div`
    height: 50%;
    display:flex;
    flex:1;
    flex-direction: column;
    justify-content:center;

    /* @media screen and (max-width: 400px){
        height:50%;
    } */
`;


export const IosWrapper = styled.div`
    display:flex;
    flex:1;
    border:0px solid red;
`

export const IosButton = styled.div`
    display:flex;
    flex:1;
    margin-top: 32 px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavSelect = styled.div`
    /* height:50%; */
    margin-top:40px;
    padding-top:40px;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items: center;
    justify-content:center;
    border:0px solid green;
    /* padding-right:0px; */
`

export const NavBtn2 = styled.nav`
    display: flex;
    flex:1;
    align-items: center;
    padding-right:20px;
    padding-left:20px;
    border: 0px solid red;
    padding-bottom:20px;
    

    @media screen and (max-width: 960px){
        /* display:none; */

    }
`;

export const NavBtnLink2 = styled(LinkR)`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    border-radius: 50px;
    background: #6c5ce7;
    border:3px solid #fff;
    /* background: #6c5ce7; */
    white-space: nowrap;
    padding: 10px 18px;
    color: '#fff';
    /* color: #010606; */
    font-size: 16px;
    /* outline: none; */
    /* border: none; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    /* &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

    } */
`;

export const TextBtn = styled.p`
    display:flex;
    justify-content:'center';
    align-items:'center';
    flex:1;
    color:#fff;
    margin-left:10px;
`