import React, { Component } from 'react';

//For React Navigation Version 3+

import {
  createAppContainer
  } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

//import Navigator in our project

import UserAvatar from 'react-native-user-avatar';

import { LoginView } from './LogInSecondPage';

import SportSave from './SportScreen';

import { Teams } from './SelectTeams';

import styles, { colors } from './index.style';

import { Text } from 'react-native-elements';

import { ImageBackground,
         Image,
         View,
         StyleSheet,
         StatusBar,
         Fragment,
         ScrollView,
         TouchableOpacity,
         Dimensions,
         Platform,
         SafeAreaView
         } from 'react-native'

import Carousel from "@rhysforyou/react-native-carousel";

import { TopBarLogo, SignUpView } from './SignUpFirstPage';

import { Button } from 'react-native-elements';

import Drawer from 'react-native-circle-drawer';

const { width: screenWidth } = Dimensions.get('window')

import { sliderWidth, itemWidth, itemHeight } from './SliderEntry.style';

import SliderEntry from './SliderEntry';

import { TeamCard } from './TeamCards';

const MOCK_DATA = [
    {
        id: '1',
        Record: 'LIII',
        WinPct: '80%',
        Earn: '+$50.00'
    },
    {
        id: '2',
        Record: 'MLB',
        WinPct: '70%',
        Earn: '+$50.00'
    },
    {
        id: '3',
        Record: 'NHL',
        WinPct: '60%',
        Earn: '+$50.00'
    }
];


class HomePage extends Component {



    render() {
        return (
            <View>

                <View style={styles.exampleContainer}>

                    <TeamCard/>


                    <View style={{paddingTop: 10}}>

                    </View>



                    <View style={{paddingTop: 100}}>
                        <View style={{paddingLeft: 20, paddingBottom: 10}}>
                            <Text style={{color:'#1a1917', fontSize: 17}}h4>Featured Events</Text>
                        </View>


                        <Carousel

                            style={{height: 100, flexGrow: 0, paddingBottom: 0}}

                            data={MOCK_DATA}

                            renderItem={info => (
                                <View>
                                    <Text style={{fontSize:10}} a4>{info.item.Record}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.WinPot}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.Earn}</Text>
                                </View>
                            )}

                        />
                        </View>

                    <View style={{paddingBottom: 30}}>
                        <Carousel

                            style={{height: 100, flexGrow: 0}}

                            data={MOCK_DATA}

                            renderItem={info => (
                                <View style={{flexGrow: 0, width: 400}}>
                                    <Text style={{fontSize:10}} a4>{info.item.Record}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.WinPot}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.Earn}</Text>
                                </View>
                            )}

                        />
                    </View>

                    <View style={{paddingTop: 100}}>
                        <View style={{paddingLeft: 20, paddingBottom: 10}}>
                            <Text style={{color:'#1a1917', fontSize: 17}}h4>Featured Events</Text>
                        </View>


                        <Carousel

                            style={{height: 100, flexGrow: 0, paddingBottom: 0}}

                            data={MOCK_DATA}

                            renderItem={info => (
                                <View>
                                    <Text style={{fontSize:10}} a4>{info.item.Record}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.WinPot}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.Earn}</Text>
                                </View>
                            )}

                        />
                        </View>

                    <View style={{paddingBottom: 30}}>
                        <Carousel

                            style={{height: 100, flexGrow: 0}}

                            data={MOCK_DATA}

                            renderItem={info => (
                                <View style={{flexGrow: 0, width: 400}}>
                                    <Text style={{fontSize:10}} a4>{info.item.Record}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.WinPot}</Text>

                                    <Text style={{fontSize:10}} a4>{info.item.Earn}</Text>
                                </View>
                            )}

                        />
                    </View>


                </View>






            </View>
        );
    }
}






const StackNav1 = createStackNavigator(
    {
        HomeScr: {
            screen: HomePage,
            navigationOptions:
            {
                header: null,
            },
        },


    },
    { initialRouteName: 'HomeScr', }
);

const AppContainer = createAppContainer(StackNav1);

export default class MainApp extends Component {

    static navigationOptions = {
        headerVisible: false,
    }

    constructor(props) {
        super(props);
    }

    openDrawer(){
        this.refs.DRAWER.open()
    }

    renderSideMenu() {
        return(
            <View style={{flex:1}}>
                <Text>Item 1 </Text>
                <Text>Item 2 </Text>
            </View>
        )
    }

    renderTopRightView(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }


    render() {
        return (
            <Drawer
                ref="DRAWER"
                sideMenu={this.renderSideMenu()}
                topRightView={this.renderTopRightView()}
                primaryColor='#335182'
                secondaryColor='#436aa8'
                cancelColor='#335182'
            >
                <Button title="open drawer" onPress={()=>this.openDrawer()}/>
                <AppContainer />
            </Drawer>
        )
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
