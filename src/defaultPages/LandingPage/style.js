import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const size = {
    xs: '320px',
    sm: '768px',
    lg: '1200px'
}
const device = {
    xs: '(min-width: ${size.xs})',
    sm: '(min-width: ${size.sm})',
    lg: '(min-width: ${size.lg})'
}

export const Container = styled.section`
    padding: 1em 3em 3em 3em;
    width: 100vw;
    height: 100vh;
    background-image: url("https://inspire-pictures.s3.eu-west-2.amazonaws.com/backgrounds/Background00.png");
    background-repeat: no-repeat;
    background-size: cover;
    @media only screen and (min-width: 768px){
        background-image: url("https://i.imgur.com/pUqFsNV.png");
    }
`;


export const BarsMod = styled(FontAwesomeIcon)`
    @media only screen and (max-width: 767px){
        display: ${props => props.size == '4x' ? 'none' : 'inline'};
    }
    @media only screen and (min-width: 768px){
        display: ${props => props.size == '2x' ? 'none' : 'inline'};
    }
`;

export const Sparkles = styled.img`
    position: absolute;
    top: 52em;
    left: 77em;
    width: 10em;
    z-index: 5;
    @media only screen and (max-width: 900px){
        display: none;
    }
`;

export const Stars = styled.img`
    position: absolute;
    top: 52em;
    left: 50em;
    width: 10em;
    z-index: 5;
    @media only screen and (max-width: 900px){
        display: none;
    }
`;

export const Logo = styled.img`

    @media only screen and (max-width: 900px){
        width: 20%;
    }
    @media only screen and (max-width: 767px){
        position: static;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        object-fit: scale-down;
    }
    @media only screen and (min-width: 768px){
        top: 10em;
        display: block;
        object-fit: scale-down;
        position: absolute;
        width: 300;
        object-fit: contain;
    }

`;

Logo.defaultProps = {
    width: '300',
    src: "https://i.imgur.com/wHWOIL2.png",
};

export const Box1 = styled.div`
    padding: 12em 0 8em;
    @media only screen and (max-width: 900px){
        padding: 2vh 0 2em;
    }
    @media only screen and (max-width: 768px){
        padding: 6vh 0 2em;
    }
    @media only screen and (max-width: 340px){
        padding: 0em 0 2em;
    }
`;

export const Dashed = styled.div`
    border: 1px dashed black;
    @media only screen and (min-width: 768px){
        border: 2px dashed black;
    }
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

export const ContentTitle = styled.h1`
    font-family: 'Comfortaa', sans-serif;
    font-size: 5em;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: 2vh;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

const dynamictext = keyframes`
    20% {
        content: 'K-DRAMA BESTIES';
    }
    40% {
        content: 'SEOUL MATES';
    }
    60% {
        content: 'FUTURE TRAVEL BUDDIES';
    }
    80% {
        content: 'FAVOURITE CHINGUS';
    }
    100% {
        content: 'K-POP MUTUALS';
    }
`;


export const AnimatedText = styled.span`
    &:before{
        content: 'BFFS';
        animation: ${dynamictext} 5s infinite;
    }
    font-family: 'Comfortaa', sans-serif;
    font-size: 5em;
    font-weight: 400;
    @media only screen and (max-width: 768px){
        font-size: 1.5em;
    }
`;

export const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#FFEDC5" : "black"};
    color: ${props => props.primary ? "black" : "#666"};

    &:hover{
        transform: translateY(-10%)
    }

    font-size: 2.5em;
    font-weight: 700;
    margin: 1em;
    padding: 0.25em 3em;
    border-radius: 5px;
    box-shadow: 3px 3px #D28094; 
    
    @media only screen and (max-width: 767px){
        display: ${props => props.value == 'SHOP' ? 'none' : 'inline'};
        font-size: 2em;
        font-weight: 500;
        padding: 0.15em 1em;
    }
`;