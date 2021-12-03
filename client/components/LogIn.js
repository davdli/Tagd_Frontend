import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={localStyles.loginContainer} >
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton} >
          <Text style={localStyles.backButtonText} onPress={this.props.backHome} >{'< Back'}</Text>
        </TouchableOpacity>
        <View style={localStyles.bellowBack} >
          <Text style={localStyles.titleText} >TAGD</Text>
          <View style={localStyles.inputContainer} >
            <TextInput
              placeholder="Email"
              style={localStyles.textInput}
              onChangeText={text => this.setState({
                email: text
              })}
            />
          </View>
          <View style={localStyles.inputContainer} >
            <TextInput
              placeholder="Password"
              style={localStyles.textInput}
              onChangeText={text => this.setState({
                password: text
              })}
            />
          </View>

          <TouchableOpacity onPress={this.props.selectType} style={localStyles.loginButton} >
            <Text style={localStyles.loginButtonText} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#008080",
    flex: 1,
  },
  bellowBack: {
    alignItems: 'center'
  },
  // linearGradient: {
  //   flex: 1
  // },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 60
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 20,
  },

  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },

  loginButton: {
    width: '85%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#616161',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },

  backHomeButton: {
    width: '20%',
    height: 45,
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 12,
  },

  textInput: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    color: 'white',
    fontSize: 18,
    backgroundColor: '#008080',
    borderBottomColor: '#fff',
    borderLeftColor: '#008080',
    borderRightColor: '#008080',
    borderTopColor: '#008080',
  },
  inputContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  }
});

export default LogIn;
