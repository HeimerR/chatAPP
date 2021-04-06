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
    BarsMod,
    AnimatedText
} from './style'


class Interests extends React.PureComponent {
    /*
    redirectSwappingPage = () => {
        const { history } = this.props;
        if (history) history.push('/swapping');
    }*/
    redirectSwappingPage = (response) => {
        const { history } = this.props;
        if (history) history.push({
            pathname: '/swapping',
            state: { category: response },
        });
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
                <Button primary a onClick={() => this.redirectSwappingPage("K-DRAMA")}>K-DRAMA</Button>
                <Button c >COMING SOON</Button>
                <Button primary b style={{ position: 'absolute', top: '53%', right: '6%' }} onClick={() => this.redirectSwappingPage("K-POP")}>K-POP</Button>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <ContentTitle>INTERESTS</ContentTitle>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Interests;