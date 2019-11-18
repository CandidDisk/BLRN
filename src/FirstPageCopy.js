// Home screen
import React, { Component, Fragment } from 'react';
//import react in our code.
import { Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

import { ImageBackground } from 'react-native';

import ImageOverlay from 'react-native-image-overlay';

import { SignUpView } from './SignUpFirstPage';

import { Paper } from './NativePaper';

import { Input, Button } from 'react-native-elements';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

class FirstPage1 extends Component {
    render() {
        return (
            <Fragment>
                <ImageBackground blurRadius={10} source={require('./photo/739424.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <SignUpView />

                        <View style={{alignItems: 'center', paddingBottom: 50}}>
                            <Button
                                buttonStyle={{width: 200, backgroundColor: 'orange'}}
                                large
                                title='Sign up'
                                onPress={() => this.props.navigation.navigate('Details')}
                            />

                        </View>
                    </View>
                </ImageBackground>
            </Fragment>
        );
    }
};

class DetailsScreen extends Component {
    render() {
        return (
            <Fragment>
                <ImageBackground blurRadius={10} source={require('./photo/739424.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <Text>This is details1</Text>
                    </View>
                </ImageBackground>
            </Fragment>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: FirstPage1,

        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }


);

const AppContainer = createAppContainer(RootStack);

export default class FirstPage extends Component {

    static navigationOptions = {
        headerVisible: false,

    };

    render() {
        return <AppContainer />;
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

