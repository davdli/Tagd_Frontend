import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button, Keyboard } from 'react-native';
import { updateSingleUser } from '../store/reducers/users';

const EditProfile = (props) => {
  const [updatedUser, setUpdatedUser] = useState(props.user.user || { firstName: '', lastName: '', email: ''});

  const onPressEdit = async (updatedUser) => {
    await props.updateSingleUser(updatedUser);
    props.guestPage();
  }

  return (
    <View style={localStyles.signupContainer} >
      <TouchableOpacity onPress={props.guestPage} style={localStyles.backHomeButton} >
        <Text style={localStyles.backButtonText} onPress={props.backHome} >{'< Cancel'}</Text>
      </TouchableOpacity>
      <Text onPress={() => Keyboard.dismiss()} style={localStyles.titleText} >Update Profile</Text>
      <View style={localStyles.inputContainer} >
        <TextInput
          style={localStyles.textInput}
          placeholder="First name" placeholderTextColor={'grey'}
          onChangeText={text => setUpdatedUser({ ...updatedUser, firstName: text })}
          defaultValue={''}
        />
      </View>
      <View style={localStyles.inputContainer} >
        <TextInput
          style={localStyles.textInput}
          placeholder="Last name" placeholderTextColor={'grey'}
          onChangeText={text => setUpdatedUser({...updatedUser, lastName: text })}
        />
      </View>
      <View style={localStyles.inputContainer} >
        <TextInput
          style={localStyles.textInput}
          placeholder="Email" placeholderTextColor={'grey'}
          onChangeText={text => setUpdatedUser({ ...updatedUser, email: text })}
          defaultValue={''}
        />
      </View>
      <View style={localStyles.centerTypeButtons}>
        <TouchableOpacity onPress={() => onPressEdit(updatedUser)} style={localStyles.signupButton} >
          <Text style={localStyles.signupButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* <View>
        <Text>{JSON.stringify(props.user.user)}</Text>
      </View> */}
    </View >
  )
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
    fontSize: 20,
  },
  textInput: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    backgroundColor: '#fff',
    borderBottomColor: '#D3D3D3',
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
    color: 'white',
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  updateSingleUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
