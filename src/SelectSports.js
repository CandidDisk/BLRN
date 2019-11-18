// Setting screen
import React, { Component, Fragment } from 'react';
//import react in our code.
import { Text, View, StyleSheet, Image } from 'react-native';
//import all the components we are going to use.

import { ImageBackground } from 'react-native';

import ImageOverlay from 'react-native-image-overlay';

import { Card } from 'react-native-elements';

import { Paper } from './NativePaper';

import { Divider } from 'react-native-paper';

import SportSave from './SportScreen';



export default class Sports extends Component {
    state = {
        text: ''
    };
    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} source={require('./photo/arena1.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <View style={{paddingTop: 100}}>
                            <SportSave />
                        </View>



                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const s = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#335182',
    opacity: 0.7
  }
});