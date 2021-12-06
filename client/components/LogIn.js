import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
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
    const type = this.props.loginUser(this.state.email, this.state.password)
    console.log(type);
    if (!type.user) {
      this.props.guestPage();
    } else {
      this.props.hostPage();
    }
  }
  render() {
    return (
      <View style={localStyles.loginContainer}>
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton}>
          <Text style={localStyles.backButtonText} onPress={this.props.backHome}>{'< Back'}</Text>
        </TouchableOpacity>
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

          <TouchableOpacity onPress={this.onLogin}
            style={localStyles.loginButton}>
            <Text style={localStyles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    host: state.hosts
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
    alignItems: 'center'
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
    paddingTop: 60
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
    color: '#fd8a5e',
    fontSize: 20,
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
    marginTop: 50,
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
