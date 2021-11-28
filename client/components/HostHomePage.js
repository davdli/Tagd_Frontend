import React from 'react'
import { connect } from "react-redux"
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

class HostHomePage extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>TAGD</Text>
                <Text>Welcome Back!</Text>
                <View>
                    <Text>Menu</Text>
                    <Button
                        title="Camera View"
                        onPress={this.props.hostAR} />
                    <Button
                        title="My Tags"
                    />
                    <Button
                        title="Messages"
                    />
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
    viroContainer: {
        flex: 1,
        backgroundColor: "black",
    },
    outer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
    },
    inner: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "black",
    },
    titleText: {
        paddingTop: 30,
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    buttons: {
        height: 80,
        width: 150,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    exitButton: {
        height: 50,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },

    textInput: {
        width: '85%',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FF9800',
        backgroundColor: '#fff',
    }
});

export default (HostHomePage)

