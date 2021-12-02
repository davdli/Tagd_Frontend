import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

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
        <Text style={localStyles.titleText} >Tagd</Text>
        <TextInput
          placeholder="Email"
          style={localStyles.textInput}
          onChangeText={text => this.setState({
            email: text
          })}
        />

        <TextInput
          placeholder="Password"
          style={localStyles.textInput}
          onChangeText={text => this.setState({
            password: text
          })}
        />


        <View onPress={this.props.selectType} style={flex = 1} >
          <Text style={localStyles.loginButton} >Login</Text>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#008080",
    flex: 1,
    alignItems: 'center'
  },
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
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
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

  loginButton: {
    color: '#fff',
  },

  textInput: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    color: 'green',
    backgroundColor: '#008080',
    borderBottomColor: '#fff',
    borderLeftColor: '#008080',
    borderRightColor: '#008080',
    borderTopColor: '#008080',
  }
});

export default LogIn;
