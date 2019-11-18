import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image, AppRegistry, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';

import UserAvatar from 'react-native-user-avatar';

import Swiper from 'react-native-web-swiper';

import { Text } from 'react-native-elements';

import { NFLCard, NBACard } from './TeamCards';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        height:60,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {

    },
    slide2: {

    },
    slide3: {

    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    },
});

class Teams extends Component {

    render() {
        return (
            <View style={{flex: 1, position:'relative'}}>


                <View style={{alignItems: "center", justifyContent: "center", paddingTop: 50, position:'relative', paddingBottom: 0}}>
                    <Text style={{color:'white'}} h1>
                            Select Teams
                        </Text>
                </View>

                <View style={{height: 200, flexDirection:'row', flex:1}}>
                    <View style={{flex: 1}}>
                        <Text style={{color:'white', paddingLeft: 30, paddingTop: 50}} h4>
                            Your Sports
                        </Text>
                    </View>
                    <View style={{flex: 1, height: 250, width: 50, paddingBottom: 100}}>
                        <Swiper

                            controlsProps={{
                            prevPos: false,
                            nextPos: false,
                            }}
                         >
                            <View style={[styles.slideContainer,styles.slide1]}>
                                <UserAvatar size="80" name='nfl' src='https://pmcvariety.files.wordpress.com/2016/02/nfl-logo.png?w=670'/>
                            </View>
                            <View style={[styles.slideContainer,styles.slide2]}>
                                <UserAvatar size="80" name='nba' src='https://lh3.googleusercontent.com/fukCREv8Lsgrd_Lg-FQ9AVcwNUdb8VasiCXz-H5IgTmLcW5MujUNHpDeAEtcAxonbfY'/>
                            </View>
                            <View style={[styles.slideContainer,styles.slide3]}>
                                <UserAvatar size="80" name='MLB' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png'/>
                            </View>
                        </Swiper>
                    </View>
                </View>

                <View style = {styles.lineStyle} />

                <View style={{position:'relative', flex:1}}>

                        <NFLCard />

                </View>

                <View style={{position:'relative', flex:1}}>
                    <NBACard />
                </View>


            </View>
        );
    }

}

export { Teams };