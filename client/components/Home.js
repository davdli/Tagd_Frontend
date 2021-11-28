import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Text>Tagd</Text>

        <Text>Home guide for anywhere.</Text>
        <Button title="Log in" onPress={() => {
          this.props.logIn();
        }} />
        <Text>Dont't have an account?</Text>
        <Button title="Sign up" onPress={() => {
          this.props.signUp();
        }} />
      </View>
    )
  }
}

export default Home;
