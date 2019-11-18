// Setting screen
import React, { Component, Fragment } from 'react';
//import react in our code.
import { Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

import { ImageBackground } from 'react-native';

import ImageOverlay from 'react-native-image-overlay';

import { LoginView } from './LogInSecondPage';

import { Paper } from './NativePaper';


export default class SecondPage extends React.Component {
  state = {
    text: ''
  };
  render() {
    return (
            <Fragment>
                <ImageBackground blurRadius={10} source={require('./photo/739424.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <LoginView />
                    </View>
                </ImageBackground>
            </Fragment>
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