
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
    AnimatedText
} from './style'


class Interests extends React.PureComponent {

    redirectSwappingPage = () => {
        const { history } = this.props;
        if (history) history.push('/swapping');
    }


    render() {
        const { history } = this.props;

        return (
            <Container>
                <Button primary a onClick={this.redirectSwappingPage}>PRIVACY<br />SETTINGS</Button>
                <Button primary b style={{ position: 'absolute', top: '53%', right: '6%' }} onClick={this.redirectSwappingPage}>NOTIFICATION<br />SETTINGS</Button>
                <Button primary c onClick={this.redirectSwappingPage}>FEEDBACK</Button>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <ContentTitle>SETTINGS</ContentTitle>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Interests;