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
          <ViroFlexView dragType="FixedDistance" onDrag={() => { }} position={[0, 0, 0]} rotation={[0, 20, 0]}  height={.4} width={.8} style={styles.contactInfo}
          onDrag={(fixedDistance, fixedToWorld) => {
            this.state.position = this.setState({
              position: fixedDistance
            });
          }}>
            <ViroText fontSize={20}
            style={styles.contactText} position={[.00, .020, 0]}
            scale={[0.014, 0.014, 0]} height={1} width={6}
            materials={["frontMaterial", "backMaterial", "sideMaterial"]}
            textClipMode="None"
            rotation={[-90, 0, 0]}
            text="Remeber to drink water!"
            textAlign='center'
            />
          </ViroFlexView >
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: ''
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

const styles = StyleSheet.create({
  // boldFont: {
  //      color: '#FFFFFF',
  //      flex: 1,
  //      textAlignVertical: 'center',
  //      textAlign: 'center',
  //      fontWeight: 'bold',
  // },
  contactInfo: {

    backgroundColor: '#D3D3D3',
    // opacity: 0.90,
    flex: 1,
    flexDirection: 'row'
  },
  contactText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 1,
    // textShadowColor: '#000',
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
    source: require('./res/BottleIcon.jpeg'),
    orientation: "Up",
    physicalWidth: 0.3 // real world width in meters
  },
});

module.exports = HelloWorldSceneAR;
