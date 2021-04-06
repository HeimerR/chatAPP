import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/2lHg15I.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px){
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background04.png");
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
    padding: 12em 0 8em;
    @media only screen and (max-width: 900px){
        padding: 15vh 0 2em;
    }
    @media only screen and (max-width: 768px){
        padding: 15vh 0 2em;
    }
    @media only screen and (max-width: 340px){
        padding: 15vh 0 2em;
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
    font-size: 5em;
    font-weight: 600;
    @media only screen and (max-width: 768px){
        font-size: 2.5em;
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
    padding: 1.2em;
    border-radius: 5px;
    box-shadow: 3px 3px #D28094; 
    position: absolute;
    top: 50%;
    left: 30%;
    width: 36%;
    @media only screen and (max-width: 768px){
        font-size: 1.5em;
        width: 80%;
        left: 5%;
    }
`;