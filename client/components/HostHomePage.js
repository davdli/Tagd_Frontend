import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'

class HostHomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'Guest' || this.props.firstName + ' ' + this.props.lastName,
            icon: '',
            title: '',
            message: '',
        }
    }

    render() {

        return (
            <View style={localStyles.hostHomePage} >
                <Text style={localStyles.titleText} >{`Hello, ${this.state.username}`}</Text>
                <Text style={localStyles.personalInfo} >Create a tag</Text>
                <View>
                    <TextInput
                        placeholder="title"
                        style={localStyles.textInput}
                        onChangeText={text => this.setState({
                            title: text
                        })}
                    />
                    <TextInput
                        editable
                        multiline
                        maxLength={40}
                        placeholder="description"
                        style={localStyles.textInput}
                        onChangeText={text => this.setState({
                            message: text
                        })}
                    />
                    <TouchableOpacity style={localStyles.signupButton} >
                        <Text style={localStyles.signupButtonText} >
                            Create Tag
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const mapState = state => {

}

const mapProps = () => {

}

const localStyles = StyleSheet.create({
    titleText: {
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 40,
        marginTop: 15
    },
    hostHomePage: {
        backgroundColor: "#008080",
        flex: 1,
        alignItems: 'center',
        fontSize: 20,
    },
    personalInfo: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 30,
    },
    infoType: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
    },
    info: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
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
        width: "40%",
        margin: 5,
        height: 37,
        backgroundColor: '#804000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    centerTypeButtons: {
        alignItems: 'center'
    },
    hostKey: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,

    }
});

export default (HostHomePage)

