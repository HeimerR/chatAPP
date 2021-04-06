import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/nvlaDEF.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px){
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background03.png");
    }
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

export const Box1 = styled.div`
    display: block;
    text-align: center;
    width: 30%;
    @media only screen and (max-width: 768px){
        width: 90%;
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
export const Title2 = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 3.5em;
    @media only screen and (max-width: 768px){
        font-size: 2em;
        text-align: center;
    }
`;

export const BrightTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 1em;
    display: inline-block;
    color: white;
    text-shadow: 2px 0 0 #F16B68, -2px 0 0 #F16B68, 0 2px 0 #F16B68, 0 -2px 0 #F16B68, 1px 1px #F16B68, -1px -1px 0 #F16B68, 1px -1px 0 #F16B68, -1px 1px 0 #F16B68;
`;

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 5em;
    font-weight: 600;
    padding-top: 3em;
    @media only screen and (max-width: 768px){
        padding-top: 12vh;
        font-size: 4em;
        text-align: center;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#FFEDC5" : "#FFEDC5"};
    color: ${props => props.primary ? "black" : "#666"};

    &:hover{
        transform: ${props => props.primary ? "translateY(-10%)" : ""};
        cursor: ${props => props.primary ? "pointer" : "auto"};
    }

    font-family: 'Comfortaa', sans-serif;
    font-size: 3em;
    font-weight: 900;
    margin: 1em;
    padding: ${props => props.primary ? "0.25em 2.5em" : "0.45em 1.5em"};
    border-radius: 5px;
    box-shadow: 3px 3px #D28094; 
    position: absolute;
    top: 75%;
    @media only screen and (min-width: 769px){
        left: 40%;
    }
    @media only screen and (max-width: 768px){
        position: static;
        display: block;
        font-size: 2.5em;
        top: 65%;
        margin-left: auto;
        margin-right: auto;
    }
    @media only screen and (max-width: 400px){
        font-size: 2em;
    }
`;