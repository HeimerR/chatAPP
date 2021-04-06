import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { keyframes } from 'styled-components';


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/QIEo414.png");
    width: 100vw;
    height: 100vh;
    @media only screen and (max-width: 768px){
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background05.png");
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

export const InputFile = styled.label`
    padding: 8em;
    color: white;
    background-repeat: round !important;
    border: 2px solid #7F7F7F;
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    @media only screen and (max-width: 768px){
        width: 70%;
    }
`;

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 5em;
    font-weight: 600;
    @media only screen and (max-width: 768px){
        padding-top: 2.5em;
        font-size: 2.3em;
    }
    @media only screen and (max-width: 320px){
        font-size: 2em;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Box1 = styled.div`
    margin-top: 40%;
    @media only screen and (max-width: 768px){
        margin-top:20%;
    }
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
        left: 38%;
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

export const Logo = styled.img`

    @media only screen and (min-width: 901px){
        top: 10em;
        display: block;
        object-fit: scale-down;
        position: absolute;
        width: 20em;
        object-fit: contain;
    }
    @media only screen and (max-width: 900px){
        display: none;
    }

`;