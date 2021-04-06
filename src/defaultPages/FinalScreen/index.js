import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
    Container,
    Title,
    Title2,
    Section,
    Button,
    ContentTitle,
    AnimatedText,
    BrightTitle,
    BarsMod,
    Box1
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
                <Section>
                    <Title value='<'>{'<'}</Title>
                    <div></div>
                    <BarsMod icon={faBars} size="4x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                    <BarsMod icon={faBars} size="2x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                </Section>
                <img src="https://i.imgur.com/wHWOIL2.png" width="300" style={{ position: 'absolute', top: '2em', left: '-58em', objectFit: 'contain' }} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box1>
                        <ContentTitle>YAY!!!</ContentTitle>
                        <Title2>YOU'VE UNLOCKED THE <BrightTitle>K-POP</BrightTitle> STAGE</Title2>
                    </Box1>
                </div>
                <Button primary onClick={this.redirectUserDetails}>NEXT</Button>
            </Container>
        )
    }
}

export default finalScreen;