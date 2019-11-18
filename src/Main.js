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


import { ImageBackground,
         Image,
         Text,
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

import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import { TopBarLogo, SignUpView } from './SignUpFirstPage';

import { Button } from 'react-native-elements';

import Drawer from 'react-native-circle-drawer';

const { width: screenWidth } = Dimensions.get('window')

import { sliderWidth, itemWidth, itemHeight } from './SliderEntry.style';

import { SliderEntryImg, SliderEntryPort } from './SliderEntry';

import { TeamCard } from './TeamCards';

const MOCK_DATA = [
    {
        title: 'Texans',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'data:image/jpeg;base64,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'
    },
    {
        title: 'Ravens',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://content.sportslogos.net/logos/7/153/full/318.png'
    },
    {
        title: 'Chiefs',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.pinimg.com/originals/e6/7f/4f/e67f4fd39305d4c5fdd5d9b7ff3a629e.jpg'
    },
];

class TeamCar extends Component {

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntryImg
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={false}
              parallaxProps={parallaxProps}
            />
        );
    }

    render() {
        return (
            <View style={{paddingBottom: 20}}>





                    <Text style={{backgroundColor:'transparent',color:'#335182', fontSize: 20, letterSpacing: 0.5, paddingLeft: 20}}>My Teams</Text>

                    <Carousel
                          ref={c => this._slider1Ref = c}
                          data={MOCK_DATA}
                          renderItem={this._renderItemWithParallax}
                          firstItem={1}
                          loop={true}
                          sliderWidth={sliderWidth}
                          itemWidth={itemWidth}
                          hasParallaxImages={true}
                          inactiveSlideScale={0.94}
                          inactiveSlideOpacity={0.7}
                          // inactiveSlideShift={20}
                          containerCustomStyle={styles.slider}
                          contentContainerCustomStyle={styles.sliderContentContainer}
                          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                          />







            </View>
        );
    }
}

class TeamPort extends Component {

    _renderItemWithPort ({item, index}, parallaxProps) {
        return (
            <SliderEntryPort
              data={item}
            />
        );
    }

    render() {
        return (
            <View>



                <View>


                    <Text style={{backgroundColor:'transparent',color:'#335182', fontSize: 20, letterSpacing: 0.5, paddingLeft: 20}}>My Portfolio</Text>

                    <Carousel
                          ref={c => this._slider1Ref = c}
                          data={MOCK_DATA}
                          renderItem={this._renderItemWithPort}
                          firstItem={1}
                          loop={true}
                          sliderWidth={sliderWidth}
                          itemWidth={300}
                          inactiveSlideScale={0.94}
                          inactiveSlideOpacity={0.7}
                          // inactiveSlideShift={20}
                          containerCustomStyle={styles.slider}
                          contentContainerCustomStyle={styles.sliderContentContainer}
                          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                          />



                </View>



            </View>
        );
    }
}

class HomePage extends Component {


    render() {
        return (
            <View>

                <View style={styles.exampleContainer}>
                    <TeamCar/>


                    <TeamPort/>
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
