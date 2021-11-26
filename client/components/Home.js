import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

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
