import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  render () {
    return (
      <View>
        <Text>Tagd</Text>
        <TextInput
        placeholder="Email"
        onChangeText={text => this.setState({
          email: text
        })}
        />

        <TextInput
        placeholder="Password"
        onChangeText={text => this.setState({
          password: text
        })}
        />

        <Text>Forgot Password? Click here</Text>

        <Button title="Log in"/>
      </View>
    )
  }
}

export default LogIn;
