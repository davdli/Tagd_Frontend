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
      <View style={localStyles.guestContainer}>
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton}>
          <Text style={localStyles.backButtonText} onPress={this.props.backHome}>{'< Home'}</Text>
        </TouchableOpacity>
        <View style={localStyles.bellowBack}>
          <Text style={localStyles.titleText}>Hi, Sarah</Text>
          <View style={localStyles.personalContainer}>
            <Text style={localStyles.infoTitle}>Personal Information</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Text style={localStyles.infoSection}>First Name</Text>
              <Text style={localStyles.infoText}>Sarah</Text>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Text style={localStyles.infoSection}>Last Name</Text>
              <Text style={localStyles.infoText}>Yang</Text>
            </View>
            <View>
              <Text style={localStyles.infoSection}>Email</Text>
              <Text style={localStyles.infoText}>sarah@email.com</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.props.guestAR}
            style={localStyles.arButton}>
            <Text style={localStyles.arButtonText}>Let's go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  guestContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  bellowBack: {
    alignItems: 'center'
  },
  titleText: {
    paddingBottom: 30,
    color: '#008080',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 60
  },
  backHomeButton: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 15,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#008080',
    fontSize: 20,
  },
  arButton: {
    width: '85%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },
  arButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  personalContainer: {
    padding: 20,
    width: '90%'
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  infoSection: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  infoText: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10
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
