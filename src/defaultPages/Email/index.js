
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
import axios from 'axios';


class userDetails extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ emailValue: event.target.value })
    }



    handleSubmit(event) {
        event.preventDefault();
        const user = {
            uid: localStorage.getItem('nickname'),
            name: localStorage.getItem('fullname'),
        }
        // axios({
        //     method: 'post',
        //     url: 'https://api-us.cometchat.io/v2.0/users',
        //     headers: {
        //         appId: '312030d2caeb5be',
        //         apiKey: 'd0c4b78ff160b344214eecab172da40e1e24d4c2'
        //     },
        //     data: user
        // }).then(res => {
        //     console.log("This is the response --> ", res)
        //     this.redirectUserDetails()
        // }).catch(err => {
        //     if(err.response.status === 400) {
        //         alert("The Username has already been taken")
        //     }
        // })
        this.redirectUserDetails()
      }

    redirectUserDetails = () => {
        const { history } = this.props;
        if (history) history.push('/userformtest');
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
                        <ContentTitle>HOW CAN WE KEEP IN TOUCH?</ContentTitle>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Input value={this.state.emailValue} onChange={this.handleEmailChange} type="text" placeholder="EMAIL" required></Input>
                                <Button type="submit" primary >NEXT</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        )
    }
}

export default userDetails;