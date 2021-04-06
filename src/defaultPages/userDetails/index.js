import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
    Container,
    Input,
    Button,
    ContentTitle,
    Title,
    Section,
    BarsMod,
} from './style'


class userDetails extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ fullnamevalue: event.target.value })
    }

    handleNicknameChange(event) {
        this.setState({ nicknamevalue: event.target.value })
    }

    handleSubmit(event) {
        localStorage.setItem('fullname', this.state.fullnamevalue)
        localStorage.setItem('nickname', this.state.nicknamevalue)
        event.preventDefault();
        this.redirectUserDetails()
    }

    redirectUserDetails = () => {
        const { history } = this.props;
        if (history) history.push('/email');
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
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <ContentTitle>WHAT SHALL WE CALL YOU?</ContentTitle>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Input value={this.state.fullnamevalue} onChange={this.handleNameChange} type="text" placeholder="FULL NAME" required></Input>
                                <Input value={this.state.nicknamevalue} onChange={this.handleNicknameChange} type="text" placeholder="NICKNAME"></Input>
                                <Button primary type="submit">NEXT</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        )
    }
}

export default userDetails;