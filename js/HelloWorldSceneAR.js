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
  ViroMaterials
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
          <ViroText fontSize={24}
          style={styles.boldFont} position={[0, 0, 0]}
          width={20} height={5} extrusionDepth={8}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          text="Bold 3D Text (white, blue, red)" />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
          <ViroText fontSize={24}
          style={styles.boldFont} position={[0, 0, 0]}
          width={20} height={5} extrusionDepth={8}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          text="Bold 3D Text (white, blue, red)" />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
          <ViroText fontSize={24}
          style={styles.boldFont} position={[0, 0, 0]}
          width={20} height={5} extrusionDepth={8}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          text="Bold 3D Text (white, blue, red)" />
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

const styles = StyleSheet.create({
  boldFont: {
       color: '#FFFFFF',
       flex: 1,
       textAlignVertical: 'center',
       textAlign: 'center',
       fontWeight: 'bold',
  },
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FF0000',
  },
  sideMaterial: {
    diffuseColor: '#0000FF',
  },
});

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/nyyhat.jpg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
  "targetTwo": {
    source: require('./res/UniqueLogo.jpg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
  "targetThree": {
    source: require('./res/Cup.jpeg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
});

module.exports = HelloWorldSceneAR;
