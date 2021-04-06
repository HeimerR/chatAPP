import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sliderc = styled.div`
    display: flex;
    justify-content: center;
    position: absolute !important;
    @media only screen and (min-width: 769px){
    top: 40%;
    left: 52%;
    }
    @media only screen and (max-width: 768px){
        top: 35%;
        margin-left: auto;
        margin-right: auto;

    }
`;

export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/5zt6mNo.png");
    @media only screen and (max-width: 768px){
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background02.png");
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    }
    width: 100vw;
    height: 100vh;
    margin: auto 0;
    display: flex;
    justify-content: center;
    cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
      10 10,
    auto;
    overflow-x: hidden;
`;

export const BarsMod = styled(FontAwesomeIcon)`
    @media only screen and (max-width: 767px){
        display: ${props => props.size == '4x' ? 'none' : 'inline'};
        position: fixed;
        right: 1.5em;
    }
    @media only screen and (min-width: 768px){
        display: ${props => props.size == '2x' ? 'none' : 'inline'};
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 900;
    @media only screen and (max-width: 767px){
        display: ${props => props.value == 'LANDING PAGE' ? 'none' : 'inline'};
        position: fixed;
        left: 1.5em;
    }
    @media only screen and (min-width: 768px){
        display: ${props => props.value == '<' ? 'none' : 'inline'};
        display: none;
    }
`;

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 4em;
    font-weight: 700;
    @media only screen and (min-width: 769px){
        margin: 3.5em 5em 5em 6em;
    }
    @media only screen and (max-width: 768px){
        border-radius: 6px;
        color: white;
        text-align: center;
        background: #C4BDDD;
        padding: 20px;
        box-shadow: 2px 2px #F9AC3D, -3px, -3px transparent;
        width: 80%;
        height: 2em;
        font-size: 3em;
        margin-top: 20%;
        font-weight: 600;
        padding: 

    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Like = styled.img`
    position: absolute;
    z-index: 5;
    width: 200px;
    top: 55em;
    left: 64em;
    @media only screen and (min-width: 769px){
        top: 70%;
        left: 47%;
    }
    @media only screen and (max-width: 768px){
        width: 120px;
        top: 80%;
        left: 30%;
    }
`;

export const Dislike = styled.img`
    position: absolute;
    z-index: 5;
    width: 64px;
    top: 0;
    left: 60em;
    @media only screen and (max-width: 768px){
        top: 80%;
        left: 8%;
    }
    @media only screen and (min-width: 769px){
        top: 75%;
        left: 43%;
        }
`;

export const Heart = styled.img`
    position: absolute;
    z-index: 5;
    width: 64px;
    top: 55em;
    left: 78em;
    @media only screen and (max-width: 768px){
        top: 80%;
        left: 75%;
    }
    @media only screen and (min-width: 769px){
        top: 75%;
        left: 58%;
        }
`;