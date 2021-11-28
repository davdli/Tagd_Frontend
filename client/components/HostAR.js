import React, { Component } from 'react';
import { Stylesheet } from 'react-native';
import { View, Text } from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroBox,
    ViroMaterials,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlaneSelector,
    ViroNode,
    ViroAnimations,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroARSceneNavigator
} from 'react-viro';

const InitialARScene = require('../../js/HelloWorldSceneAR');
const sharedProps = {
    apiKey: "API_KEY_HERE",
}

export default class HostAR extends Component {
    constructor() {
        super();
        this.state = {
            sharedProps: sharedProps
        }
    }

    render() {
        return (
            <View>
                <ViroARSceneNavigator {...this.state.sharedProps} initialScene={{ scene: InitialARScene }} />
            </View>
        )
    }

}