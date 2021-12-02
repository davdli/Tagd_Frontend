import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, TouchableHighlight, Image, SafeAreaView, StyleSheet, Alert } from 'react-native';
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

const sharedProps = {
  apiKey: "API_KEY_HERE",
}

const InitialARScene = require('./js/HelloWorldSceneAR');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navigatorType: 'HOME',
      sharedProps: sharedProps
    }
    this.HomeNavigator = this.HomeNavigator.bind(this);
    this.SignUpNavigator = this.SignUpNavigator.bind(this);
    this.LogInNavigator = this.LogInNavigator.bind(this);
    this.SelectTypeNavigator = this.SelectTypeNavigator.bind(this);
    this.HostPageNavigator = this.HostPageNavigator.bind(this);
    this.GuestPageNavigator = this.GuestPageNavigator.bind(this);
    this.HostARNavigator = this.HostARNavigator.bind(this)
    this._getARNavigator = this._getARNavigator.bind(this);
  }
  render() {
    if (this.state.navigatorType === HOST_AR) {
      return this._getARNavigator();
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {this.state.navigatorType === HOME ? (
              <Home signUp={this.SignUpNavigator} logIn={this.LogInNavigator} />
            ) : this.state.navigatorType === LOG_IN ? (
              <Login selectType={this.SelectTypeNavigator} backHome={this.HomeNavigator} />
            ) : this.state.navigatorType === SIGN_UP ? (
              <SignUp selectType={this.SelectTypeNavigator} backHome={this.HomeNavigator} />
            ) : this.state.navigatorType === SELECT_TYPE ? (
              <SelectUserType hostPage={this.HostPageNavigator} guestPage={this.GuestPageNavigator} />
            ) : this.state.navigatorType === HOST_PAGE ? (
              <HostHomePage hostAR={this.HostARNavigator} />
            ) : (
              <GuestHomePage />
            )
            }
          </View>
        </SafeAreaView>
      )
    }
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
  _getARNavigator() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }} />

        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 77, alignItems: 'center' }}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._onDisplayDialog}
            underlayColor={'#00000000'}>
            <Image source={require("./js/res/button_add-tag.png")} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _onDisplayDialog() {
    Alert.prompt(
      'Leave a tag',
      'Write a message to place in the world!',
      '...'
    );
  }
}

const localStyles = StyleSheet.create({
  outer: {
    flex: 1,
  },

  arView: {
    flex: 1,
  },

  buttons: {
    height: 80,
    width: 80,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});

module.exports = App;