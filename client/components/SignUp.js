import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, Button} from 'react-native'

class SignUp extends React.Component {
  constructor(){
    super()
    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("Congrats you clicked Submit")
  }

  render(){
    return(
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="firstName"
          onChangeText={text => this.setState({
            firstName: text
          })}
          defaultValue={''}
          />

        <Text>{"/n"}</Text>

        <TextInput
          style={{height: 40}}
          placeholder="lastName"
          onChangeText={text => this.setState({
            lastName: text
          })}
          defaultValue={''}
          />

        <Text>{"/n"}</Text>

        <TextInput
          style={{height: 40}}
          placeholder="email"
          onChangeText={text => this.setState({
            email: text
          })}
          defaultValue={''}
          />

        <Text>{"/n"}</Text>

        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={text => this.setState({
            password: text
          })}
          defaultValue={''}
          />

          <Text>{"/n"}</Text>
          <Button
            onPress={this.handleSubmit()}
            title="Submit"
            />

      </View>
    )
  }

}

export default SignUp;
