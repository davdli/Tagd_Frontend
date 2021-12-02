import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ImageBackground, Pressable } from 'react-native';

// class Home extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <View>
//         <Text>Tagd</Text>

//         <Text>Home guide for anywhere.</Text>
//         <Button title="Log in" onPress={() => {
//           this.props.logIn();
//         }} />
//         <Text>Dont't have an account?</Text>
//         <Button title="Sign up" onPress={() => {
//           this.props.signUp();
//         }} />
//       </View>
//     )
//   }
// }

// export default Home;

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
          <Text style={styles.title}>Tagd</Text>
          {/* <Pressable
            style={styles.button}>
            <Text style={styles.buttonText}>Explore Augmented Reality</Text>
          </Pressable> */}
        </ImageBackground>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
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
  // button: {
  //   backgroundColor: 'white',
  //   width: 200,
  //   height: 40,
  //   borderRadius: 10,
  //   marginTop: 25,
  //   marginLeft: 25,
  //   justifyContent: 'center',
  // },
  // buttonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // }
})
