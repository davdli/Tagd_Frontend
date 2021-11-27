import React, { Component } from 'react';
import { Provider } from "react-redux";
import { View } from 'react-native';
import Home from './client/components/Home';
import SignUp from './client/components/SignUp';
import LogIn from './client/components/LogIn';

const HOME = 'HOME';
const SIGN_UP = 'SIGN_UP'
const LOG_IN = 'LOG_IN'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navigatorType: 'HOME'
    }
    this.HomeNavigator = this.HomeNavigator.bind(this);
    this.SignUpNavigator = this.SignUpNavigator.bind(this);
    this.LogInNavigator = this.LogInNavigator.bind(this);
  }
  render() {

    return (

      <View>
        {this.state.navigatorType === HOME ? (
          <Home signUp={this.SignUpNavigator} logIn={this.LogInNavigator} />
        ) : this.state.navigatorType === LOG_IN ? (
          <LogIn />
        ) : (
          <SignUp />
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
}

module.exports = App;

