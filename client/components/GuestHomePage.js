import React, {Component} from 'react'
import {View, Text, TextInput, Button } from 'react-native';

class GuestHomePage extends Component {
  constructor() {
    super();
    this.state = {
      locationKey: '',
    }
  }
  render () {
    return (
      <View>
        <Text>Tagd</Text>
        <Text>What is the host location key?</Text>
        <TextInput
        placeholder="Location key"
        onChangeText={text => this.setState({
          locationKey: text
        })}
        />
        <Button title="Next" />
      </View>
    )
  }
}

export default GuestHomePage;
