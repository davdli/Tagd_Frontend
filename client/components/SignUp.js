import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: ''
    }
    this.onPressSelectUser = this.onPressSelectUser.bind(this);
  }

  onPressSelectUser(type) {
    this.setState({ userType: type })
  };

  render() {
    return (
      <View style={localStyles.signupContainer} >
        <TouchableOpacity onPress={this.props.backHome} style={localStyles.backHomeButton} >
          <Text style={localStyles.backButtonText} onPress={this.props.backHome} >{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={localStyles.titleText} >TAGD</Text>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="firstName"
            onChangeText={text => this.setState({
              firstName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="lastName"
            onChangeText={text => this.setState({
              lastName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="email"
            onChangeText={text => this.setState({
              email: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="password"
            onChangeText={text => this.setState({
              password: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.centerTypeButtons}>
          <View style={localStyles.typeSelection} >
            <TouchableOpacity style={localStyles.selectUserType} >
              <Text style={localStyles.signupButtonText} >Host</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.selectUserType} >
              <Text style={localStyles.signupButtonText} >Guest</Text>
            </TouchableOpacity>
          </View>
          <Text>{this.state.userType}</Text>
          <TouchableOpacity onPress={this.props.selectType} style={localStyles.signupButton} >
            <Text style={localStyles.signupButtonText} >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

}

const localStyles = StyleSheet.create({
  titleText: {
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
  },
  signupContainer: {
    backgroundColor: "#008080",
    flex: 1,
  },
  backHomeButton: {
    width: '20%',
    height: 45,
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 15,
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
    width: "30%",
    margin: 5,
    height: 25,
    backgroundColor: '#804000',
    alignItems: 'center'
  },
  centerTypeButtons: {
    alignItems: 'center'
  }
});

export default (SignUp)
