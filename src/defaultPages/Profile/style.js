
import styled, { keyframes } from 'styled-components';


export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    background-image: url("https://i.imgur.com/1IOmh1z.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px){
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("https://i.imgur.com/1IOmh1z.png");
    }
`;

export const Pic = styled.img`

    position: static;
    margin-left: auto;
    margin-right: auto;
    width: 15em;
    @media only screen and (max-width: 767px){
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media only screen and (min-width: 768px){
        object-fit: contain;
    }

`;

Pic.defaultProps = {
    src: "https://i.imgur.com/OjPVBEQ.png",
};

export const Box1 = styled.div`
    display: block;
    text-align: center;
    width: 80%;
    @media only screen and (max-width: 768px){
        width: 90%;
    }
`;

export const Box2 = styled.div`
    box-shadow: 0px 2px 50px 15px grey
    display: block;
    text-align: center;
    background: white;
    border: 1px solid #ddd;
    float: left;
    padding: 2em;
    width: 300px;
    @media only screen and (max-width: 768px){
    }
`;
export const Title = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 2em;
    margin-top: 2px;
    @media only screen and (max-width: 768px){
        font-size: 2em;
        text-align: center;
    }
`;

export const BrightTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 3em;
    display: inline-block;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 4em;
    font-weight: 600;
    margin-bottom: 2px;
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
    top: 75%;
    @media only screen and (min-width: 769px){
        position: static;
        display: block;
        margin-left: auto;
        margin-right: auto;
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