import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';

class GuestHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostKey: '',
    }
  }
  render() {
    const host = this.props.user.host;
    return (
      <View style={localStyles.hostContainer}>
        <View style={{ height: "14%" }} >
          <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton}>
            <Text style={localStyles.backButtonText} onPress={this.props.backHome}>{'< Home'}</Text>
          </TouchableOpacity>
        </View>
        <View style={localStyles.bellowBack}>
          <Text style={localStyles.titleText}>Hi, {host.firstName}!</Text>
          <View style={localStyles.personalContainer}>
            <Text style={localStyles.infoTitle}>Account Profile</Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
              <Text style={localStyles.infoSection}>First Name</Text>
              <Text style={localStyles.infoText}>{host.firstName}</Text>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
              <Text style={localStyles.infoSection}>Last Name</Text>
              <Text style={localStyles.infoText}>{host.lastName}</Text>
            </View>
            <View>
              <Text style={localStyles.infoSection}>Email</Text>
              <Text style={localStyles.infoText}>{host.email}</Text>
            </View>
          </View>

          // need to figure out location/house select plan for hosts
          <View style={localStyles.hostKeyContainer}>
            <Text style={localStyles.infoTitle}>Select Icon</Text>

            // ICON PIC COMPONENTS HERE THEN MESSAGE


            <TextInput
              placeholder="Host Message" placeholderTextColor={'gray'}
              style={localStyles.hostKeyInput}
              secureTextEntry={true}
              onChangeText={text => this.setState({
                hostKey: text
              })}
            />
          </View>
          <TouchableOpacity onPress={this.props.hostAR}
            style={localStyles.arButton}>
            <Text style={localStyles.arButtonText}>Upload</Text>
          </TouchableOpacity>

          // Add tags menu icon for hosts, enter into tag menu, display tags component

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const localStyles = StyleSheet.create({
  hostContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  bellowBack: {
    alignItems: 'center',
    height: '86%'
  },
  titleText: {
    paddingBottom: 30,
    color: '#008080',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30
  },
  backHomeButton: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 60,
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
    fontWeight: 'bold',
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
  },
  hostKeyContainer: {
    padding: 20,
    width: '90%'
  },
  hostKeyInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    fontSize: 18,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
});

export default connect(mapStateToProps, null)(HostHomePage);
