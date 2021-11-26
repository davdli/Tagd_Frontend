import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('You logged in!');
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

        <Button title="Log in" onPress={this.handleSubmit()} />
      </View>
    )
  }
}

export default LogIn;
