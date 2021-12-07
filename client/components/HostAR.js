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


export default class HostAR extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <ViroARSceneNavigator {...this.state} initialScene={{ scene: InitialARScene }} />
            </View>
        )
    }

}
