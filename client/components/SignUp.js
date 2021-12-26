import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button, Keyboard } from 'react-native';
import { createSingleUser } from '../store/reducers/users';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: '',
    }
    this.onPressSignup = this.onPressSignup.bind(this);
  }

  async onPressSignup() {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType
    }
    if (this.state.userType === 'host') {
      try {
        await this.props.createUser(newUser)
        this.props.hostPage()
      } catch (e) {
        let error = new Error(e)
        throw error
      }
    } else if (this.state.userType === 'guest') {
      try {
        await this.props.createUser(newUser)
        this.props.guestPage()
      } catch (e) {
        let error = new Error(e)
        throw error
      }
    }
  }

  render() {
    return (
      <View style={localStyles.signupContainer} >
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton} >
          <Text style={localStyles.backButtonText} onPress={this.props.backHome} >{'< Home'}</Text>
        </TouchableOpacity>
        <Text onPress={() => Keyboard.dismiss()} style={localStyles.titleText} >Sign up with email</Text>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="First name" placeholderTextColor={'grey'}
            onChangeText={text => this.setState({
              firstName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Last name" placeholderTextColor={'grey'}
            onChangeText={text => this.setState({
              lastName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Email" placeholderTextColor={'grey'}
            onChangeText={text => this.setState({
              email: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Password" placeholderTextColor={'grey'}
            secureTextEntry={true}
            onChangeText={text => this.setState({
              password: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.centerTypeButtons}>
          <View style={localStyles.typeSelection} >
            <TouchableOpacity style={localStyles.selectUserType} onPress={() => this.setState({
              userType: 'host'
            })} >
              <Text style={localStyles.signupButtonText} >Host</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.selectUserType} onPress={() => this.setState({
              userType: 'guest'
            })} >
              <Text style={localStyles.signupButtonText} >Guest</Text>
            </TouchableOpacity>
          </View>
          <Text>{this.state.userType}</Text>
          {/* this.props.selectType is used to get to select type page */}
          <TouchableOpacity onPress={this.onPressSignup} style={localStyles.signupButton} >
            <Text style={localStyles.signupButtonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}

const localStyles = StyleSheet.create({
  titleText: {
    paddingBottom: 30,
    color: 'black',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 60
  },
  signupContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  backHomeButton: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 15,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#808080',
    fontSize: 18,
  },
  textInput: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    backgroundColor: '#fff',
    borderBottomColor: '#808080',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
  },
  inputContainer: {
    paddingTop: 18,
    paddingBottom: 18,
    width: '100%',
    alignItems: 'center',
  },
  signupButton: {
    width: '85%',
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  typeSelection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectUserType: {
    width: "40%",
    margin: 5,
    height: 35,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  centerTypeButtons: {
    alignItems: 'center'
  }
});

const mapState = (state) => {
  return {
    user: state.user
  }
};

const mapDispatch = (dispatch) => {
  return {
    createUser: (user) => dispatch(createSingleUser(user))
  }
};

export default connect(mapState, mapDispatch)(SignUp);
