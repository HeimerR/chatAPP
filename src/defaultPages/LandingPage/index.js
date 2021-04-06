import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom'
import * as actions from '../../store/action';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';

import {
    Container,
    Title,
    Section,
    Button,
    ContentTitle,
    AnimatedText,
    Logo,
    Box1,
    Dashed,
    BarsMod,
    Sparkles,
    Stars,
} from './style'

class LandingPage extends React.PureComponent {

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/interests' />
        }
    }

    render() {
        let authRedirect = null;
        if (!this.props.isLoggedIn) {
          authRedirect = <Redirect to="/login" />
        }

        return (
            <Container>
                {this.renderRedirect()}
                <Section>
                    <Title value='<'>{'<'}</Title>
                    <div></div>
                    <BarsMod icon={faBars} size="4x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                    <BarsMod icon={faBars} size="2x" style={{ cursor: 'pointer', marginTop: '0.5em' }} />
                </Section>
                <Logo />
                <Sparkles src="https://i.imgur.com/q2mVTmW.png" />
                <Stars className="sparkle" src="https://i.imgur.com/QHwaX6z.png" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <a href="https://www.inspiremekorea.com/"><Button primary value='SHOP'>SHOP</Button></a>
                        <Box1>
                            <ContentTitle>MEET YOUR</ContentTitle>
                            <AnimatedText style={{ marginBottom: '0' }}>
                            </AnimatedText>
                            <Dashed></Dashed>
                        </Box1>
                        <Button primary style={{ margin: '0 auto' }} onClick={this.setRedirect} value='PLAY NOW'>PLAY NOW</Button>
                    </div>
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
      onLogout: () => dispatch(actions.logout())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);