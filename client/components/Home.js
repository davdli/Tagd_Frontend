import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.background} >
        <ImageBackground
          source={require('../../js/res/HomeImage.jpeg')}
          style={styles.image}>
          <Text style={styles.title}>tagd</Text>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>AR Home Guide</Text>
          </View>
        </ImageBackground>
        <View style={styles.loginView}>
          <TouchableOpacity onPress={() => {
            this.props.logIn()
          }}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.signupView}>
          <TouchableOpacity onPress={() => {
            this.props.signUp()
          }}>
            <View style={styles.signupButton}>
              <Text style={styles.signupText}>
                <Text>Don't have an account? </Text>
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '85%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: '70%',
    marginLeft: 25
  },
  descriptionView: {
    backgroundColor: 'transparent',
    width: 225,
    height: 55,
    borderRadius: 15,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 25,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  loginView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: -80
  },
  loginButton: {
    height: 55,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: '#008080',
    fontSize: 25,
    fontWeight: 'bold',
  },
  signupView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40
  },
  signupButton: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})
