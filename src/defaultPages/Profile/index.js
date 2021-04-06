
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
    Container,
    Title,
    Section,
    Button,
    ContentTitle,
    AnimatedText,
    BrightTitle,
    Box1,
    Box2,
    Pic
} from './style'


class finalScreen extends React.PureComponent {

    redirectUserDetails = () => {
        const { history } = this.props;
        if (history) history.push('/userdetails');
    }

    render() {
        const { history } = this.props;

        return (
            <Container>
                <img src="https://i.imgur.com/wHWOIL2.png" width="300" style={{ position: 'absolute', top: '2em', left: '-58em', objectFit: 'contain' }} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box1>
                        <ContentTitle>MY PROFILE</ContentTitle>
                        <Pic />
                        <Title>DIANA IMK</Title>
                        <BrightTitle>INTERESTS</BrightTitle>
                        <div>
                            <Box2><Title>K-POP</Title>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>#SUSHINEE</li>
                                    <li>#BTS</li>
                                    <li>#MAMAMOO</li>
                                </ul>
                            </Box2>
                            <Box2><Title>K-DRAMA</Title>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>#SUSHINEE</li>
                                    <li>#BTS</li>
                                    <li>#MAMAMOO</li>
                                </ul>
                            </Box2>
                        </div>
                    </Box1>
                </div>
                <Button primary onClick={this.redirectUserDetails}>SWIPE MORE INTERESTS</Button>
            </Container>
        )
    }
}

export default finalScreen;