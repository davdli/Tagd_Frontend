import React, { Component } from 'react'
import { Connect } from 'react-redux';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';

class GuestHomePage extends Component {
  constructor() {
    super();
    this.state = {
      locationKey: '',
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    //thunk to get
  }

  render() {
    return (
      <View style={localStyles.guestHomePage} onPress={() => Keyboard.dismiss()} >
        <Text style={localStyles.titleText} onPress={() => Keyboard.dismiss()} >Hello, Guest</Text>
        <Text style={localStyles.personalInfo} onPress={() => Keyboard.dismiss()} >Personal Information</Text>
        <View style={{ paddingBottom: 15, alignItems: 'center' }} >
          <Text style={localStyles.infoType} onPress={() => Keyboard.dismiss()} >First Name</Text>
          <Text style={localStyles.info} onPress={() => Keyboard.dismiss()} >{'User first name'}</Text>
        </View>
        <View style={{ paddingBottom: 15, alignItems: 'center' }} >
          <Text style={localStyles.infoType} >Last Name</Text>
          <Text style={localStyles.info} >{'User last name'}</Text>
        </View>
        <View style={{ paddingBottom: 15, alignItems: 'center' }} >
          <Text style={localStyles.infoType} >Email</Text>
          <Text style={localStyles.info} >{'User email'}</Text>
        </View>
        <View style={localStyles.hostKey} >
          <Text style={{ color: '#fff', fontSize: 25 }} >Enter Host Key</Text>
          <View style={localStyles.inputContainer} >
            <TextInput
              placeholder="key"
              style={localStyles.textInput}
              onChangeText={text => this.setState({
                locationKey: text
              })}
            />
          </View>
          <TouchableOpacity onPress={this.props.guestAR} style={localStyles.signupButton} >
            <Text style={localStyles.signupButtonText} >Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  titleText: {
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 15
  },
  guestHomePage: {
    backgroundColor: "#008080",
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
  },
  personalInfo: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 30,
  },
  infoType: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  info: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
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
    paddingTop: 18,
    paddingBottom: 18,
    width: '100%',
    alignItems: 'center',
  },
  signupButton: {
    width: '85%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#616161',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  //   signupButtonText:active {
  //   backgroundColor: '#e5e5e5',
  // },
  typeSelection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectUserType: {
    width: "40%",
    margin: 5,
    height: 37,
    backgroundColor: '#804000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  centerTypeButtons: {
    alignItems: 'center'
  },
  hostKey: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,

  }
});

mapStateToProps = () => {

}

//incomplete, need to import thunk and pass to dispatch
mapDispatchToProps = dispatch => {
  return {
    findLocation: () => dispatch()
  }
}

export default GuestHomePage;
