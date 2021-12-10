import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, TouchableHighlight, Image, SafeAreaView, StyleSheet, Alert, Text } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import store from './client/store'
import Home from './client/components/Home';
import Login from './client/components/LogIn';
import SignUp from './client/components/SignUp';
import SelectUserType from './client/components/SelectUserType';
import GuestHomePage from './client/components/GuestHomePage';
import HostHomePage from './client/components/HostHomePage';
import EditProfile from './client/components/EditProfile';

const HOME = 'HOME';
const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';
const SELECT_TYPE = 'SELECT_TYPE';
const GUEST_PAGE = 'GUEST_PAGE';
const HOST_PAGE = 'HOST_PAGE';
const EDIT_PROFILE = 'EDIT_PROFILE';
const GUEST_AR = 'GUEST_AR';
const HOST_AR = 'HOST_AR';

const sharedProps = {
  apiKey: "API_KEY_HERE",
}

const InitialARScene = require('./js/HelloWorldSceneAR');
const HostARScene = require('./js/HostAR');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navigatorType: 'HOME',
      sharedProps: sharedProps
    }
    this.HomeNavigator = this.HomeNavigator.bind(this);
    this.LogInNavigator = this.LogInNavigator.bind(this);
    this.SignUpNavigator = this.SignUpNavigator.bind(this);
    this.SelectTypeNavigator = this.SelectTypeNavigator.bind(this);
    this.GuestPageNavigator = this.GuestPageNavigator.bind(this);
    this.HostPageNavigator = this.HostPageNavigator.bind(this);
    this.GuestARNavigator = this.GuestARNavigator.bind(this);
    this.EditProfileNavigator = this.EditProfileNavigator.bind(this);
    this.HostARNavigator = this.HostARNavigator.bind(this);
    this._getARNavigatorGuest = this._getARNavigatorGuest.bind(this);
    this._getARNavigatorHost = this._getARNavigatorHost.bind(this);
  }
  render() {
    if (this.state.navigatorType === GUEST_AR) {
      return this._getARNavigatorGuest();
    } else if (this.state.navigatorType === HOST_AR) {
      return this._getARNavigatorHost();
    } else {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }} >
            <View style={{ flex: 1 }} >
              {this.state.navigatorType === HOME ? (
                <Home signUp={this.SignUpNavigator} logIn={this.LogInNavigator} />
              ) : this.state.navigatorType === LOG_IN ? (
                <Login selectType={this.SelectTypeNavigator}
                  backHome={this.HomeNavigator}
                  guestPage={this.GuestPageNavigator}
                  hostPage={this.HostPageNavigator} />
              ) : this.state.navigatorType === SIGN_UP ? (
                <SignUp selectType={this.SelectTypeNavigator}
                  backHome={this.HomeNavigator}
                  guestPage={this.GuestPageNavigator}
                  hostPage={this.HostPageNavigator} />
              ) : this.state.navigatorType === SELECT_TYPE ? (
                <SelectUserType hostPage={this.HostPageNavigator} guestPage={this.GuestPageNavigator} />
              ) : this.state.navigatorType === EDIT_PROFILE ? (
                <EditProfile guestPage={this.GuestPageNavigator} hostPage={this.HostPageNavigator} />
              ): this.state.navigatorType === HOST_PAGE ? (
                <HostHomePage hostAR={this.HostARNavigator} logIn={this.LogInNavigator} editProfile={this.EditProfileNavigator}/>
              ) : (
                <GuestHomePage guestAR={this.GuestARNavigator} logIn={this.LogInNavigator} editProfile={this.EditProfileNavigator}/>
              )
              }
            </View>
          </View>
        </Provider>
      )
    }
  }
  HomeNavigator() {
    this.setState({ navigatorType: HOME });
  }
  LogInNavigator() {
    this.setState({ navigatorType: LOG_IN });
  }
  SignUpNavigator() {
    this.setState({ navigatorType: SIGN_UP });
  }
  SelectTypeNavigator() {
    this.setState({ navigatorType: SELECT_TYPE });
  }
  GuestPageNavigator() {
    this.setState({ navigatorType: GUEST_PAGE });
  }
  HostPageNavigator() {
    this.setState({ navigatorType: HOST_PAGE });
  }
  EditProfileNavigator() {
    this.setState({ navigatorType: EDIT_PROFILE })
  }
  GuestARNavigator() {
    this.setState({ navigatorType: GUEST_AR });
  }
  HostARNavigator() {
    this.setState({ navigatorType: HOST_AR });
  }
  _getARNavigatorGuest() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }} />

        <View style={{ position: 'absolute', left: 10, right: 0, top: 10, alignItems: 'flex-start', justifyContent: "center" }}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this.GuestPageNavigator}>
            <View style={{ backgroundColor: "transparent", borderColor: "#008080", borderWidth: 2, padding: 8, alignItems: 'center', borderRadius: 100 }} >
              <Text style={{ fontSize: 24, color: '#008080' }}>X</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  _getARNavigatorHost() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{ scene: HostARScene }} />

        <View style={{ position: 'absolute', left: 10, right: 0, top: 10, alignItems: 'flex-start', justifyContent: "center" }}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this.HostPageNavigator}>
            <View style={{ backgroundColor: "transparent", borderColor: "#008080", borderWidth: 2, padding: 8, alignItems: 'center', borderRadius: 100 }} >
              <Text style={{ fontSize: 24, color: '#008080' }}>X</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
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
    height: 60,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});

module.exports = App;
