import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

/** @jsx jsx */
import { jsx } from '@emotion/core';

import PrivateRoute from '../../PrivateRoute';

import KitchenSinkApp from '../../defaultPages/KitchenSinkApp';
import HomePage from '../../defaultPages/HomePage';

import * as actions from '../../store/action';

import {
    CometChatUI,
    CometChatConversationList,
    CometChatConversationListWithMessages,
    CometChatUserList,
    CometChatUserListWithMessages,
    CometChatGroupList,
    CometChatGroupListWithMessages
} from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import {
    wrapperStyle
} from "./style";
import LandingPage from '../LandingPage';
import Interests from '../Interests';
import SwappingPage from '../SwappingPage';
import Deck from '../SwappingPage/components/Deck';
import finalScreen from '../FinalScreen';
import userDetails from '../userDetails';
import Menu from '../Menu';
import Email from '../Email';
import Settings from '../Settings';
import Profile from '../Profile';
import Userformtest from '../userformtest';
import FinalSetup from '../finalsetup';

const history = createBrowserHistory();

class App extends React.Component {
    state = {
        isLoggedin: false
    }

    componentDidMount() {
        this.props.getLoggedinUser();
    }

    render() {

        return (
            <div css={wrapperStyle()}>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/embedded-app" component={CometChatUI} />
                        <PrivateRoute path="/conversations" component={CometChatConversationListWithMessages} />
                        <PrivateRoute path="/groups" component={CometChatGroupListWithMessages} />
                        <PrivateRoute path="/users" component={CometChatUserListWithMessages} />
                        <PrivateRoute path="/conversation-list" component={CometChatConversationList} />
                        <PrivateRoute path="/group-list" component={CometChatGroupList} />
                        <PrivateRoute path="/user-list" component={CometChatUserList} />
                        <PrivateRoute exact path="/" component={CometChatUI} />
                        <Route exact path="/home" component={LandingPage} />
                        <Route exact path="/interests" component={Interests} />
                        <Route exact path="/finalscreen" component={finalScreen} />
                        <Route exact path="/userdetails" component={userDetails} />
                        <Route exact path="/swapping" component={SwappingPage} />
                        <Route exact path="/swappingcards" component={Deck} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/email" component={Email} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/finalsetup" component={FinalSetup} />
                        <Route exact path="/userformtest" component={Userformtest} />
                        <Route path="/login" component={KitchenSinkApp} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLoggedinUser: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
