import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const InfoContainer  = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    /* border-color: red;
    border-width:5px; */
    @media screen and (max-width: 768px){
        padding: 100px 0;

    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    width:100%;
    max-width:1100px;
    margin-right: auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content: center;
`;


export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-rows: 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1' ` : `'col1 col2' `};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col1' 'col2' ` : `'col1 col1' 'col2 col2' `};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    /* display:flex; */
    /* justify-content:center;
    align-items:center; */
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;

// export const Row1 = styled.div`
//     /* display:flex; */
//     /* justify-content:center;
//     align-items:center; */
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: row1;
    
// `;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    /* color:#fff; */
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#010606')};

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;



export const ImgWrap = styled.div`
    max-width: 555px;
    width:100%;
    /* height: 100%; */
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const Text = styled.p`
    margin-bottom:40px;
    color:#ff7675;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const TextEmail = styled.p`
    margin-bottom:40px;
    color:#fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

// export const Content = styled.div`
//     border: 1px solid #000;
//     background-image: url(${imga});
//     width: 100px;
//     height: 100px;
// `;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right:10px;

    /* @media screen and (max-width: 768px){
        display:none;

    } */
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }
`;
