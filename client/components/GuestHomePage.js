import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';

const GuestHomePage = (props) => {
  const [hostKey, setHostKey] = useState('');
  const guest = useSelector(state => state.user.user);

  return (
    <View style={localStyles.guestContainer}>
      <View style={{ height: "14%" }} >
        <TouchableOpacity onPress={props.logIn} style={localStyles.backHomeButton}>
          <Text style={localStyles.backButtonText}>{'< Log out'}</Text>
        </TouchableOpacity>
      </View>
      <View style={localStyles.bellowBack}>
        <Text style={localStyles.titleText}>Hi, {guest.firstName}</Text>
        <TouchableOpacity onPress={props.editProfile}>
          <Text style={localStyles.editProfile}>Edit profile</Text>
        </TouchableOpacity>
        <View style={localStyles.personalContainer}>
          <Text style={localStyles.infoTitle}>Guest information</Text>
          <View style={{ borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }}>
            <Text style={localStyles.infoSection}>First name</Text>
            <Text style={localStyles.infoText}>{guest.firstName}</Text>
          </View>
          <View style={{ borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }}>
            <Text style={localStyles.infoSection}>Last name</Text>
            <Text style={localStyles.infoText}>{guest.lastName}</Text>
          </View>
          <View>
            <Text style={localStyles.infoSection}>Email</Text>
            <Text style={localStyles.infoText}>{guest.email}</Text>
          </View>
        </View>

        <View style={localStyles.hostKeyContainer}>
          <Text style={localStyles.infoTitle}>Enter AR experience</Text>
          <TextInput
            placeholder="Host key" placeholderTextColor={'grey'}
            style={localStyles.hostKeyInput}
            secureTextEntry={true}
            onChangeText={text => setHostKey(text)}
            />
        </View>
        <TouchableOpacity onPress={props.guestAR}
          style={localStyles.arButton}>
          <Text style={localStyles.arButtonText}>Let's go!</Text>
        </TouchableOpacity>

        {/* <View>
          <Text>{JSON.stringify(guest)}</Text>
        </View> */}

      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  guestContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  bellowBack: {
    alignItems: 'center',
    height: '86%'
  },
  titleText: {
    paddingBottom: 10,
    color: '#008080',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 30
  },
  backHomeButton: {
    width: '30%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 60,
    marginRight: 25,
    borderRadius: 12,
  },
  backButtonText: {
    color: 'black',
    fontSize: 18,
  },
  arButton: {
    width: '85%',
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 10,
  },
  arButtonText: {
    color: 'white',
    fontSize: 18,
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
    fontSize: 22,
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
    borderBottomColor: '#D3D3D3',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },
  editProfile: {
    color: '#008080',
    textDecorationLine: 'underline',
    fontSize: 18,
    paddingBottom: 20
  }
});

export default GuestHomePage;
