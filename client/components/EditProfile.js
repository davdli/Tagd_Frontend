import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button, Keyboard } from 'react-native'
import { createSingleUser } from '../store/reducers/users'

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
    console.log()
    return (
      <View style={localStyles.signupContainer} >
        <TouchableOpacity onPress={this.props.guestPage} style={localStyles.backHomeButton} >
          <Text style={localStyles.backButtonText} onPress={this.props.backHome} >{'< Cancel'}</Text>
        </TouchableOpacity>
        <Text onPress={() => Keyboard.dismiss()} style={localStyles.titleText} >Update Profile</Text>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="First name" placeholderTextColor={'black'}
            onChangeText={text => this.setState({
              firstName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Last name" placeholderTextColor={'black'}
            onChangeText={text => this.setState({
              lastName: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.inputContainer} >
          <TextInput
            style={localStyles.textInput}
            placeholder="Email" placeholderTextColor={'black'}
            onChangeText={text => this.setState({
              email: text
            })}
            defaultValue={''}
          />
        </View>
        <View style={localStyles.centerTypeButtons}>
          <TouchableOpacity onPress={this.onPressSignup} style={localStyles.signupButton} >
            <Text style={localStyles.signupButtonText} >Save</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

}

const localStyles = StyleSheet.create({
  titleText: {
    paddingBottom: 30,
    color: '#008080',
    textAlign: 'center',
    fontSize: 30,
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
    color: '#008080',
    fontSize: 20,
  },
  textInput: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    color: 'white',
    fontSize: 18,
    backgroundColor: '#fff',
    borderBottomColor: '#008080',
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
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    justifyContent: 'center',
    marginTop: 35,
    borderRadius: 12,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 20,
  },
  typeSelection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectUserType: {
    width: "40%",
    margin: 5,
    height: 37,
    backgroundColor: '#008080',
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
  }
}

const mapDispatch = (dispatch) => ({
  createUser: (user) => dispatch(createSingleUser(user)),
});

export default connect(mapState, mapDispatch)(SignUp)
