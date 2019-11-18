
import React, { Component } from 'react';

//For React Navigation Version 3+

import {
  createAppContainer
  } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

//import Navigator in our project


import { LoginView } from './src/LogInSecondPage';

import SportSave from './src/SportScreen';

import { Teams } from './src/SelectTeams';

import { ImageBackground,
         Image,
         View,
         StyleSheet,
         StatusBar,
         Fragment,
         Text,
         ScrollView
         } from 'react-native'

import { TopBarLogo, SignUpView } from './src/SignUpFirstPage';

import { Button } from 'react-native-elements';

import MainApp from './src/Main';


//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export



//const BackgroundImageHolder = props => (
//    <View style={{ backgroundColor: '#eee' }}>
//        <Image
//            style={StyleSheet.absoluteFill}
//            source={require('./src/photo/739424.jpg')}
//        />
//    </View>
//);

class TeamSelect extends Component{
    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} source={require('./src/photo/arena1.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <ScrollView>
                        <Teams />

                        <View style={{alignItems: 'center', paddingTop: 50, paddingBottom: 20}}>
                            <Button
                                buttonStyle={{width: 200, backgroundColor: 'orange'}}
                                large
                                title='Sign up'
                                onPress={() => this.props.navigation.navigate('MainScreen')}
                            />

                        </View>
                        </ScrollView>

                    </View>



                </ImageBackground>

            </View>
        );
    }
}

class Sports extends Component{
    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} source={require('./src/photo/arena1.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>

                        <View style={{paddingTop: 50}}>
                            <SportSave />
                        </View>




                    </View>

                    <View style={{alignItems: 'center', paddingTop: 670}}>
                        <Button
                            buttonStyle={{width: 200, backgroundColor: 'orange'}}
                            large
                            title='Continue'
                            onPress={() => this.props.navigation.navigate('TeamScreen')}
                        />

                    </View>

                </ImageBackground>
            </View>

        )
    }
}

class FirstPage extends Component{
    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} source={require('./src/photo/739424.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <SignUpView />

                        <View style={{alignItems: 'center', paddingBottom: 50}}>
                            <Button
                                buttonStyle={{width: 200, backgroundColor: 'orange'}}
                                large
                                title='Sign up'
                                onPress={() => this.props.navigation.navigate('SportScreen')}
                            />

                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

class SecondPage extends Component{
    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} source={require('./src/photo/739424.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={s.overlay}>
                        <LoginView />

                        <View style={{alignItems: 'center', paddingBottom: 200}}>
                            <Button
                                buttonStyle={{width: 200, backgroundColor: 'orange'}}
                                large
                                title='Login'
                                onPress={() => this.props.navigation.navigate('MainScreen')}
                            />

                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }

}

const TabScreen = createMaterialTopTabNavigator(
  {
    Register: { screen: FirstPage },
    Login: { screen: SecondPage },

  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#335182',
        paddingTop: 150,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);

//making a StackNavigator to export as default
const App1 = createStackNavigator(
    {
        TabScreen: {
            screen: TabScreen,
            navigationOptions:
            {
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTintColor: '#FFFFFF',
                headerTitle: (
                    <TopBarLogo />
                ),
                headerBackground: (
                    <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'#000000'}}>
                        <StatusBar
                            translucent
                            backgroundColor="transparent"
                            barStyle="light-content"
                        />
                        <Image
                            style={{height: 210}}
                            blurRadius={2}
                            source={require('./src/photo/background4.png')}
                        />
                    </View>
                ),
            },
        },

        SportScreen: {
            screen: Sports,
            navigationOptions:
            {
                header: null,
            },
        },

        TeamScreen: {
            screen: TeamSelect,
            navigationOptions:
            {
                header: null,
            },
        },

        MainScreen: {
            screen: MainApp,
            navigationOptions:
            {
                header: null,
            },
        },

    }
);

const AppContainer = createAppContainer(App1);

export default class App extends Component {

    static navigationOptions = {
        headerVisible: false,
    }

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

//For React Navigation Version 3+
