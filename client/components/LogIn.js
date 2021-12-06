import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchSingleUser } from '../store/reducers/users';
import axios from 'axios';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onLogin = this.onLogin.bind(this);
  }
  async onLogin() {
    await this.props.loginUser(this.state.email, this.state.password);
    if (this.props.user.user) {
      this.props.guestPage();
    } else if (this.props.user.host) {
      this.props.hostPage();
    } else {
      console.log('Incorrect username/password')
    }
  }
  render() {
    return (
      <View style={localStyles.loginContainer}>
        <View style={{ height: '14%' }} >
          <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton}>
            <Text style={localStyles.backButtonText} onPress={this.props.backHome}>{'< Home'}</Text>
          </TouchableOpacity>
        </View>
        <View style={localStyles.bellowBack}>
          <Text style={localStyles.titleText}>Log in with email</Text>
          <View style={localStyles.inputContainer}>
            <TextInput
              placeholder="Email" placeholderTextColor={'white'}
              style={localStyles.textInput}
              onChangeText={text => this.setState({
                email: text
              })}
            />
          </View>
          <View style={localStyles.inputContainer}>
            <TextInput
              placeholder="Password" placeholderTextColor={'white'}
              style={localStyles.textInput}
              secureTextEntry={true}
              onChangeText={text => this.setState({
                password: text
              })}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Forgot Password? Click here</Text>
          </View>

          <TouchableOpacity onPress={() => this.onLogin()}
            style={localStyles.loginButton}>
            <Text style={localStyles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          <View>
            <Text>{JSON.stringify(this.props)}</Text>
          </View>
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

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(fetchSingleUser(email, password))
  }
};

const localStyles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#008080",
    flex: 1,
  },
  bellowBack: {
    alignItems: 'center',
    height: '86%',
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingBottom: 30,
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  loginButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },

  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },

  loginButton: {
    width: '85%',
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },

  backHomeButton: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 15,
    borderRadius: 12,
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
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
