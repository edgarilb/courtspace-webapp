import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom'

export const HeroContainer = styled.div`
    display:flex;
    background:#0c0c0c;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* add before syles */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
`;

export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 768px){
        display:none;
    }
  
`;

export const ImgWrap = styled.div`
    /* max-width: 555px; */
    position:relative;
    width:100%;
    height: 1000px;
    /* padding-bottom:100px; */
    @media screen and (max-width: 768px){
        width:100%;
        height: 700px;
        /* padding-left:100px; */
    }
`;

export const Img = styled.img`
        /* display:block; */
 /* @media screen and (max-width: 768px){ */
        width:100%;
        height:100%;
        -o-object-fit: cover;
        object-fit: cover;
        background: #232a34;
        padding-left:100px;
    /* } */
   
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const HeroH1 = styled.h1`
    margin-top:24px;
    color: #fff;
    font-size: 48px;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;

    @media screen and (max-width: 768px){
        font-size:  40px;
    }

    @media screen and (max-width: 480px){
        font-size:  32px;
    }

`;

export const HeroP = styled.p`
    margin-top: 24px;
    margin-bottom:24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow: 2px 2px 4px #000000;

    @media screen and (max-width: 768px){
        font-size:  24x;
    }

    @media screen and (max-width: 480px){
        font-size:  18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32 px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`;

// export const NavBtnLink = styled(LinkR)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606;

//     }
// `;

export const Button2 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#01bf71':'#010606')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ?  '#010606':'#fff')};
    font-size: ${({fontBig})=> fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? '#fff': '#01BF71')}
    }
`;

export const NavSelect = styled.div`
    display:flex;
    flex:1;
    align-items: center;
    justify-content:center;
    border:0px solid black;
    /* padding-right:0px; */
`

export const NavBtn2 = styled.nav`
    display: flex;
    align-items: center;
    padding-right:20px;
    padding-left:20px;
    

    @media screen and (max-width: 960px){
        /* display:none; */

    }
`;

export const NavBtnLink2 = styled(LinkR)`
    border-radius: 50px;
    background: ${({isPlayer}) => (isPlayer === false ? '#6c5ce7':'#636e72')};
    border:3px solid #fff;
    /* background: #6c5ce7; */
    white-space: nowrap;
    padding: 10px 18px;
    color: ${({isPlayer}) => (isPlayer === false ? '#fff' :  '#fff')};
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