import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/Y3xz8eS.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px){
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background01.png");
    }

`;

export const BarsMod = styled(FontAwesomeIcon)`
    @media only screen and (max-width: 767px){
        display: ${props => props.size == '4x' ? 'none' : 'inline'};
    }
    @media only screen and (min-width: 768px){
        display: none;
    }
`;
export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 900;
    @media only screen and (min-width: 768px){
        display: none;
    }

`;

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 5em;
    font-weight: 600;
    @media only screen and (max-width: 768px){
        margin-top: 0px;
        font-size: 3em;
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
    font-weight: 500;
    margin: 1em;
    padding: ${props => props.primary ? "0.45em 2.5em" : "0.45em 1.5em"};
    border-radius: 5px;
    box-shadow: 3px 3px #D28094; 
    position: absolute;
    top: ${props => props.c ? "75%" : ""};
    top: ${props => props.a ? "45%" : ""};
    left: ${props => props.c ? "37%" : ""};
    left: ${props => props.a ? "6.5%" : ""};
    @media only screen and (max-width: 1024px){
        font-size: 2em;
    }
    @media only screen and (max-width: 768px){
        left: ${props => props.c ? "6.5%" : ""};
        top: ${props => props.a ? "35%" : ""};
    }
    @media only screen and (max-width: 768px){
        font-size: 1.5em;
    }
`;