import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../js/res/HomeImage.jpeg')}
          style={styles.image}>
          <Text style={styles.title}>TAGD</Text>
          {/* <Button>Button</Button> */}
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
              <Text style={styles.signupText}>Don't have an account? Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '85%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25
  },
  descriptionView: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    color: '#008080',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  loginButton: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: '#008080',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50
  },
  signupButton: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupText: {
    color: '#008080',
    fontSize: 16,
  },
})
