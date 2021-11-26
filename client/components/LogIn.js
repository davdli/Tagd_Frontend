import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

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

        <Text>{"/n"}</Text>

        <TextInput
        placeholder="Password"
        onChangeText={text => this.setState({
          password: text
        })}
        />

        <Text>{"/n"}</Text>

        <Text>Forgot Password? Click here</Text>

        <Text>{"/n"}</Text>

        <Button title="Log in" />
      </View>
    )
  }
}
