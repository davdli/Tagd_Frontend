import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import SelectIcons from './SelectIcons';
import { createTag } from "../store/reducers/tags";

class HostHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostKey: "",
      icon: "https://media.istockphoto.com/photos/playing-card-two-of-hearts-picture-id166089272?k=20&m=166089272&s=612x612&w=0&h=zODXUL-8g-CyRao9P2yO1ESSxnBc7EOminanb9sjctY=",
      tagMessage: "",
      tagTitle: ""
    };
    this.onPress = this.onPress.bind(this)
  }
  async onPress() {
    const tag = {
      title: this.state.tagTitle,
      description: this.state.tagMessage,
      imageUrl: this.state.icon,

    }
    await this.props.createATag(this.state.hostKey, tag)
    if (this.props.tag)
      this.props.hostAR;
  }
  render() {
    const host = this.props.user.host;
    const tags = this.props.tag;
    return (
      <ScrollView>
        <View style={localStyles.hostContainer}>
          <View style={{ height: 100 }}>

            <TouchableOpacity onPress={this.props.logIn} style={localStyles.backHomeButton}>
              <Text style={localStyles.backButtonText}>{"< Log out"}</Text>
            </TouchableOpacity>
          </View>
          <View style={localStyles.bellowBack}>
            <Text style={localStyles.titleText}>Hi, {host.firstName} </Text>
            <TouchableOpacity onPress={this.props.editProfile}>
              <Text style={localStyles.editProfile}>Edit profile</Text>
            </TouchableOpacity>
            <View style={localStyles.personalContainer}>
              <Text style={localStyles.infoTitle}>Host information</Text>
              <View style={{ borderBottomColor: "#D3D3D3", borderBottomWidth: 1 }}>
                <Text style={localStyles.infoSection}>First name</Text>
                <Text style={localStyles.infoText}>{host.firstName}</Text>
              </View>
              <View style={{ borderBottomColor: "#D3D3D3", borderBottomWidth: 1 }}>
                <Text style={localStyles.infoSection}>Last name</Text>
                <Text style={localStyles.infoText}>{host.lastName}</Text>
              </View>
              <View>
                <Text style={localStyles.infoSection}>Email</Text>
                <Text style={localStyles.infoText}>{host.email}</Text>
              </View>
            </View>
          </View>

          <View style={localStyles.hostKeyContainer}>
            <Text style={localStyles.infoTitle}>Create AR tag</Text>
            <Text style={localStyles.infoSection}>Select icon</Text>

              <SelectIcons />

            <TextInput
              placeholder="Tag title"
              placeholderTextColor={"gray"}
              style={localStyles.hostKeyInput}
              onChangeText={(text) =>
                this.setState({
                  tagTitle: text,
                })
              }
            />
            <TextInput
              placeholder="Tag message"
              placeholderTextColor={"gray"}
              style={localStyles.hostKeyInput}
              onChangeText={(text) =>
                this.setState({
                  tagMessage: text,
                })
              }
            />
            <TouchableOpacity
              onPress={this.props.hostAR}
              style={localStyles.arButton}
            >
              <Text style={localStyles.arButtonText}>Upload!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    createATag: (id, tag) => dispatch(createTag(id, tag))
  }
}

const localStyles = StyleSheet.create({
  hostContainer: {
    backgroundColor: "white",
    flex: 1,
    height: 1100
  },
  bellowBack: {
    alignItems: "center",
    height: 300,
    marginTop: 60,
    marginBottom: 130
  },
  titleText: {
    paddingBottom: 10,
    color: "#008080",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  backHomeButton: {
    width: "30%",
    height: 50,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 60,
    marginLeft: 15,
    borderRadius: 12,
  },
  backButtonText: {
    color: "black",
    fontSize: 18,
  },
  arButton: {
    width: "100%",
    height: 55,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#008080",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 30,
    borderRadius: 10,
  },
  arButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  personalContainer: {
    padding: 20,
    width: "90%",
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoSection: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
  },
  hostKeyContainer: {
    padding: 20,
    width: "90%",
    height: 500,
    marginTop: -70,
    marginLeft: 20,
  },
  hostKeyInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    fontSize: 18,
    backgroundColor: "white",
    borderBottomColor: "#D3D3D3",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderTopColor: "white",
    marginTop: 5,
    marginBottom: 10,

  },
  editProfile: {
    color: '#008080',
    textDecorationLine: 'underline',
    fontSize: 18,
    paddingBottom: 20
  }
});

export default connect(mapStateToProps, mapDispatch)(HostHomePage);
