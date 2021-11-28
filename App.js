import React, { Component } from 'react';
import { Provider } from "react-redux";
import { View } from 'react-native';
import Home from './client/components/Home';
import SignUp from './client/components/SignUp';
import Login from './client/components/LogIn';
import SelectUserType from './client/components/SelectUserType';
import HostHomePage from './client/components/HostHomePage';


const HOME = 'HOME';
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const SELECT_TYPE = 'SELECT_TYPE';
const HOST_PAGE = 'HOST_PAGE';

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
          <SelectUserType hostPage={this.HostPageNavigator} />
        ) : (
          <HostHomePage />
        )}
      </View>
    )
  }
  HomeNavigator() {
    this.setState({ navigatorType: HOME })
  }
  SignUpNavigator() {
    this.setState({ navigatorType: SIGN_UP })
  }
  LogInNavigator() {
    this.setState({ navigatorType: LOG_IN })
  }
  SelectTypeNavigator() {
    this.setState({ navigatorType: SELECT_TYPE })
  }
  HostPageNavigator() {
    this.setState({ navigatorType: HOST_PAGE })
  }
}

module.exports = App;

