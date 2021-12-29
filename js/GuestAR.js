'use strict';

import React, { Component } from 'react';

import { View, StyleSheet, Alert } from 'react-native';


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
          <ViroText fontSize={5}
              style={styles.boldFont} position={[0, 0, 0]}
              width={10} height={5} extrusionDepth={0.5}
              materials={["frontMaterial", "backMaterial", "sideMaterial"]}
              rotation={[-90, 0, 0]}
              onDrag={(fixedDistance, fixedToWorld) => {
                this.state.position = this.setState({
                  position: fixedDistance
                });
              }}
              text="Hat Info" />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
          <ViroText fontSize={5}
            style={styles.boldFont} position={[0, 0, 0]}
            width={10} height={5} extrusionDepth={0.5}
            materials={["frontMaterial", "backMaterial", "sideMaterial"]}
            rotation={[-90, 0, 0]}
            onDrag={(fixedDistance, fixedToWorld) => {
              this.state.position = this.setState({
                position: fixedDistance
              });
            }}
            text="Logo Info" />
        </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
          <ViroFlexView dragType="FixedDistance" opacity={0.75}
            onDrag={(fixedDistance, fixedToWorld) => {
              this.state.position = this.setState({
                position: fixedDistance
              });
            }}
            position={[0, 1, 0]} rotation={[-50, 0, 0]}
            height={.3} width={.4} style={styles.contactInfo}
            >
            <ViroText
            textAlign='center' textClipMode="None"
            style={styles.contactTitle} position={[.00, .15, 0]}
            scale={[0.014, 0.014, 0]} height={1} width={6}
            text="Hydrate"
            />
            <ViroText
            textAlign='center' textClipMode="None"
            style={styles.contactText} position={[.00, .1, 0]}
            scale={[0.014, 0.014, 0]} height={1} width={6}
            text="Remember to drink water!"
            />
          </ViroFlexView >
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Welcome David'
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}


const styles = StyleSheet.create({
  contactInfo: {
    backgroundColor: '#DCDCDC',
    flexDirection: 'column',
  },
  contactTitle: {
    color: 'black',
    fontSize: 300,
    fontWeight: '600',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 225,
    fontWeight: '600',
  },
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FFFFFF',
  },
  sideMaterial: {
    diffuseColor: '#F5F5F5',
  },
});

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/BottleIcon.jpeg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
  "targetTwo": {
    source: require('./res/BottleIcon.jpeg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
  "targetThree": {
    source: require('./res/BottleIcon.jpeg'),
    orientation: "Up",
    physicalWidth: 0.2 // real world width in meters
  },
});

module.exports = HelloWorldSceneAR;
