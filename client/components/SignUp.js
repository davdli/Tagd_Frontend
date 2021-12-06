
import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button, Keyboard } from 'react-native'
import { noExtendLeft } from 'sequelize/dist/lib/operators'
import { createSingleUser } from '../store/reducers/users'
import { createSingleHost } from '../store/reducers/hosts'
import axios from 'axios'

class SignUp extends React.Component {
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
      password: this.state.password
    }
    if (this.state.userType === 'host') {
      try {
        this.props.createHost(newUser)
      } catch (e) {
        let error = new Error(e)
        throw error
      }
    } else if (this.state.userType === 'guest') {
      try {
        this.props.createUser(newUser, 'guest')
      } catch (e) {
        let error = new Error(e)
        throw error
      }
    }
  };

  render() {
    console.log()
    return (
      <View style={localStyles.signupContainer} >
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton} >
          <Text style={localStyles.backButtonText} onPress={this.props.backHome} >{'< Back'}</Text>
        </TouchableOpacity>
        <Text onPress={() => Keyboard.dismiss()} style={localStyles.titleText} >Sign up with email</Text>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="First name" placeholderTextColor={'white'}
            onChangeText={text => this.setState({
              firstName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Last name" placeholderTextColor={'white'}
            onChangeText={text => this.setState({
              lastName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Email" placeholderTextColor={'white'}
            onChangeText={text => this.setState({
              email: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Password" placeholderTextColor={'white'}
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
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 60
  },
  signupContainer: {
    backgroundColor: "#008080",
    flex: 1,
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
  backButtonText: {
    color: '#fff',
    fontSize: 20,
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
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },
  signupButtonText: {
    color: 'black',
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  centerTypeButtons: {
    alignItems: 'center'
  }
});

const mapState = (state) => {
  return {
    user: state.user,
    host: state.host
  }
}

const mapDispatch = (dispatch) => ({
  creatUser: (user, method) => dispatch(createSingleUser(user, method)),
  creatHost: (host) => dispatch(createSingleHost(host))
});

export default connect(mapState, mapDispatch)(SignUp)