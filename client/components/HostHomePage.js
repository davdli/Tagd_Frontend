import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { fetchTags } from "../store/reducers/tags";
import {createTag} from "../store/reducers/tags";

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
  componentDidMount() {
    this.props.getTags();
  }
  async onPress() {
    const tag = {
      title: this.state.tagTitle,
      description: this.state.tagMessage,
      imageUrl: this.state.icon,

    }
    await this.props.createATag(tag, this.state.hostKey)
    if(this.props.tag)
    this.props.hostAR;
  }
  render() {
    const host = this.props.user.host;
    const tags = this.props.tag;
    return (
      <ScrollView>
        <View style={localStyles.hostContainer}>
          <View style={{ height: "10%" }}>
            <TouchableOpacity
              onPress={this.props.backHome}
              style={localStyles.backHomeButton}
            >
              <Text
                style={localStyles.backButtonText}
                onPress={this.props.backHome}
              >
                {"< Log out"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={localStyles.bellowBack}>
            <Text style={localStyles.titleText}>Hi, {host.firstName} </Text>
            <View style={localStyles.personalContainer}>
              <Text style={localStyles.infoTitle}>Host Profile</Text>
              <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }}>
                <Text style={localStyles.infoSection}>First Name</Text>
                <Text style={localStyles.infoText}>{host.firstName}</Text>
              </View>
              <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }}>
                <Text style={localStyles.infoSection}>Last Name</Text>
                <Text style={localStyles.infoText}>{host.lastName}</Text>
              </View>
              <View>
                <Text style={localStyles.infoSection}>Email</Text>
                <Text style={localStyles.infoText}>{host.email}</Text>
              </View>
            </View>
          </View>
          <View style={localStyles.hostKeyContainer}>
            <Text style={localStyles.infoTitle}>Select Icon</Text>

            <View>
              <Text>{JSON.stringify(this.props.tag)}</Text>
            </View>

            <TextInput
              placeholder="Tag Title"
              placeholderTextColor={"gray"}
              style={localStyles.hostKeyInput}
              onChangeText={(text) =>
                this.setState({
                  tagTitle: text,
                })
              }
            />
            <TextInput
              placeholder="Host Message"
              placeholderTextColor={"gray"}
              style={localStyles.hostKeyInput}
              onChangeText={(text) =>
                this.setState({
                  tagMessage: text,
                })
              }
            />
            <TextInput
              placeholder="Host Location ID"
              placeholderTextColor={"gray"}
              style={localStyles.hostKeyInput}
              onChangeText={(text) =>
                this.setState({
                  hostKey: text,
                })
              }
            />
          </View>
          <TouchableOpacity
            onPress={this.onPress}
            style={localStyles.arButton}
          >
            <Text style={localStyles.arButtonText}>Upload!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tag: state.tag
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTags: () => dispatch(fetchTags()),
    createATag: (tag) => dispatch(createTag(tag))
  }
}

const localStyles = StyleSheet.create({
  hostContainer: {
    backgroundColor: "white",
    flex: 1,
    height: "auto"
  },
  bellowBack: {
    alignItems: "center",
    height: "20%",
  },
  titleText: {
    paddingBottom: 30,
    color: "#008080",
    textAlign: "center",
    fontSize: 30,
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
    color: "#008080",
    fontSize: 20,
  },
  arButton: {
    width: "85%",
    height: 45,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#008080",
    justifyContent: "center",
    marginTop: 35,
    borderRadius: 12,
  },
  arButtonText: {
    color: "white",
    fontSize: 20,
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
    fontSize: 20,
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
    height: "70%"
  },
  hostKeyInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    fontSize: 18,
    backgroundColor: "white",
    borderBottomColor: "black",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderTopColor: "white",
  },
});

export default connect(mapStateToProps, mapDispatch)(HostHomePage);
