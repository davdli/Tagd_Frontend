import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Home from './client/components/Home';
import SignUp from './client/components/SignUp';
import Login from './client/components/LogIn';
import SelectUserType from './client/components/SelectUserType';
import HostHomePage from './client/components/HostHomePage';
import GuestHomePage from './client/components/GuestHomePage';
import HostAR from './client/components/HostAR';
import { ViroARSceneNavigator } from 'react-viro';

const HOME = 'HOME';
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const SELECT_TYPE = 'SELECT_TYPE';
const HOST_PAGE = 'HOST_PAGE';
const GUEST_PAGE = 'GUEST_PAGE';
const HOST_AR = 'HOST_AR';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navigatorType: 'HOME'
    }
    this.HomeNavigator = this.HomeNavigator.bind(this);
    this.SignUpNavigator = this.SignUpNavigator.bind(this);
    this.LogInNavigator = this.LogInNavigator.bind(this);
    this.SelectTypeNavigator = this.SelectTypeNavigator.bind(this);
    this.HostPageNavigator = this.HostPageNavigator.bind(this);
    this.GuestPageNavigator = this.GuestPageNavigator.bind(this);
    this.HostARNavigator = this.HostARNavigator.bind(this)
  }
  render() {
    return (
      <View>
        {this.state.navigatorType === HOME ? (
          <Home signUp={this.SignUpNavigator} logIn={this.LogInNavigator} />
        ) : this.state.navigatorType === LOG_IN ? (
          <Login selectType={this.SelectTypeNavigator} />
        ) : this.state.navigatorType === SIGN_UP ? (
          <SignUp selectType={this.SelectTypeNavigator} />
        ) : this.state.navigatorType === SELECT_TYPE ? (
          <SelectUserType hostPage={this.HostPageNavigator} guestPage={this.GuestPageNavigator} />
        ) : this.state.navigatorType === HOST_PAGE ? (
          <HostHomePage hostAR={this.HostARNavigator} />
        ) : this.state.navigatorType === GUEST_PAGE ? (
          <GuestHomePage />
        ) : (
          <HostAR />
        )
        }
      </View>
    )
  }
  HomeNavigator() {
    this.setState({ navigatorType: HOME });
  }
  SignUpNavigator() {
    this.setState({ navigatorType: SIGN_UP });
  }
  LogInNavigator() {
    this.setState({ navigatorType: LOG_IN });
  }
  SelectTypeNavigator() {
    this.setState({ navigatorType: SELECT_TYPE });
  }
  HostPageNavigator() {
    this.setState({ navigatorType: HOST_PAGE });
  }
  GuestPageNavigator() {
    this.setState({ navigatorType: GUEST_PAGE });
  }
  HostARNavigator() {
    this.setState({ navigatorType: HOST_AR });
  }
}

module.exports = App;

