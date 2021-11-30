'use strict';

import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroFlexView,
  ViroImage,
  ViroARImageMarker,
  ViroBox,
  ViroARTrackingTargets,

} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      position: [0, 0, -1]
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={this.state.position} style={styles.helloWorldTextStyle} onDrag={(fixedDistance, fixedToWorld) => {
          console.log('On Drag')
          this.state.position = this.setState({
            position: fixedDistance
          });
        }} />
        <ViroARImageMarker target={"targetOne"} >
          <ViroBox position={[0, -.25, 0]} scale={[.25, .25, .25]} />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
          <ViroBox position={[0, -.25, 0]} scale={[.25, .25, .25]} />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
          <ViroBox position={[0, -.25, 0]} scale={[.25, .25, .25]} />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World'
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/nyyhat.jpg'),
    orientation: "Up",
    physicalWidth: 0.1 // real world width in meters
  },
  "targetTwo": {
    source: require('./res/UniqueLogo.jpg'),
    orientation: "Up",
    physicalWidth: 0.1 // real world width in meters
  },
  "targetThree": {
    source: require('./res/Cup.jpeg'),
    orientation: "Up",
    physicalWidth: 0.1 // real world width in meters
  },
});

module.exports = HelloWorldSceneAR;
