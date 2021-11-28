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
} from 'react-viro';

export default class HostAR extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Test</Text>
            </View>
        )
    }

}