import styled, { keyframes } from 'styled-components';


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/Y3xz8eS.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px){
        background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background04.png");
    }

`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 900;
    @media only screen and (max-width: 767px){
        display: ${props => props.value == 'LANDING PAGE' ? 'none' : 'inline'};
    }
    @media only screen and (min-width: 768px){
        display: ${props => props.value == '<' ? 'none' : 'inline'};
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
    font-size: 2.5em;
    font-weight: 600;
    margin: 1em;
    border-radius: 5px;
    box-shadow: 3px 3px #D28094; 
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 1px;
    margin-top: ${props => props.a ? "60%" : ""};
    margin-top: ${props => props.b ? "15px" : ""};
    margin-top: ${props => props.c ? "15px" : ""};
    padding: 0.2em;
`;