import React from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { COMETCHAT_CONSTANTS } from '../../consts';
import { connect } from 'react-redux';
import * as actions from '../../store/action';
import {
    Container,
    Title,
    Section,
    Button,
    ContentTitle,
    BarsMod,
    Box1,
    AnimatedText
} from './style'
import axios from 'axios';


class FinalSetup extends React.PureComponent {

    redirectSwappingPage = () => {
        const { history } = this.props;
        if (history) history.push('/embedded-app');
    }
    
    login = () => {
    
        this.uid = localStorage.getItem('nickname');
        this.props.onLogin(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY);
        setTimeout(function(){ console.log("loading") }, 2000);
        this.redirectSwappingPage()
    }

    addmembertogroups = () => {
        const listOfInterests = localStorage.getItem('interests')
        const arrayOfInterests = listOfInterests.split(',')
        arrayOfInterests.map(function (interest) {
            axios({
                method: 'get',
                url: 'https://api-us.cometchat.io/v2.0/groups',
                headers: {
                    appId: '312030d2caeb5be',
                    apiKey: '4f2dc76be89c834e11bee193d0e36be7aa0e75da'
                },
                params: {
                    tags: interest
                }
            }).then(res => {
                const matchedGroups = res.data
                console.log("This is the response --> ", matchedGroups.data[0].guid)
                const guid = matchedGroups.data[0].guid
                const user = localStorage.getItem('nickname')
                axios({
                    method: 'post',
                    url: `https://api-us.cometchat.io/v2.0/groups/${guid}/members`,
                    headers: {
                        appId: '312030d2caeb5be',
                        apiKey: '4f2dc76be89c834e11bee193d0e36be7aa0e75da'
                    },
                    data: {
                        participants: [`${user}`]
                    }
                }).then(res => {
                    console.log("This is the response --> ", res.data)
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        })
        this.login()
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
                <Button primary onClick={this.addmembertogroups}>MEET YOUR *NEW* FRIENDS RIGHT NOW</Button>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box1 style={{ display: 'block', textAlign: 'center' }}>
                        <ContentTitle>WOOP!</ContentTitle>
                        <ContentTitle>YOU'RE ALL SET</ContentTitle>
                    </Box1>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      loading: state.loading,
      error: state.error,
      isLoggedIn: state.isLoggedIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onLogin: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
    };
  };

export default connect( mapStateToProps, mapDispatchToProps )( FinalSetup );