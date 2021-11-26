import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

//Tony- "I would like to see the sign up text changed to either an href link or a button that takes a click event to send the user to the sign up page"
class Home extends Component {
  render () {
    return (
      <View>
        <Text>Tagd</Text>
        <Text>Home guide for anywhere.</Text>
        <Button title="Log in"/>
        <Text>Dont't have an account? Sign up</Text>
      </View>
    )
  }
}

export default Home;
