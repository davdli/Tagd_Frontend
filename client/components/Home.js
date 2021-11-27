import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

//Tony- "I would like to see the sign up text changed to either an href link or a button that takes a click event to send the user to the sign up page"
class Home extends Component {
  constructor() {
    super();
    //this.onPress = this.onPress.bind(this);
  }

  // onPress = (nextSceneType) => {
  //   // e.preventDefault()
  //   console.log('Button pressed ', nextSceneType)
  // }
  render() {
    return (
      <View>
        <Text>Tagd</Text>
        <Text>Home guide for anywhere.</Text>
        <Button title="Login" onPress={() => {
          console.log('what')
        }} />
        <Text>Dont't have an account?</Text>
        <Button title="Sign Up" onPress={() => {
          this.props.signUp();
        }} />
      </View>
    )
  }
}

export default Home;
