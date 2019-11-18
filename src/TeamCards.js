import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image, AppRegistry } from 'react-native';
import { Divider } from 'react-native-paper';

import UserAvatar from 'react-native-user-avatar';

import Swiper from 'react-native-web-swiper';

import { Text } from 'react-native-elements';

class TeamCard extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: 100, paddingBottom: 100   }}>
                <View style={{paddingLeft: 20, paddingBottom: 10}}>
                    <Text style={{color:'#1a1917', fontSize: 17}}h4>My Teams</Text>
                </View>
                <View style={{flexDirection:'row', alignContent:'center', paddingRight: 280}}>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight:65}}>
                        <UserAvatar
                            src='data:image/jpeg;base64,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'
                            size='110'
                            name='texans'

                        />
                        <Text style={{color:'#888888', flex: 1}}>Texans</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65,paddingRight:65}}>
                        <UserAvatar
                            src='http://content.sportslogos.net/logos/7/153/full/318.png'
                            size='110'
                            name='ravens'
                        />
                        <Text style={{color:'#888888', flex: 1}}>Ravens</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65}}>
                        <UserAvatar
                            src='https://i.pinimg.com/originals/e6/7f/4f/e67f4fd39305d4c5fdd5d9b7ff3a629e.jpg'
                            size='110'
                            name='chiefs'
                        />
                        <Text style={{color:'#888888', flex: 1}}>Chiefs</Text>
                    </View>


                </View>

            </View>
        );
    }
}

class NFLCard extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{paddingLeft: 20, paddingBottom: 10}}>
                    <Text style={{color:'white'}}h2>NFL</Text>
                </View>
                <View style={{flexDirection:'row', alignContent:'center', paddingRight: 280}}>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight:65}}>
                        <UserAvatar
                            src='data:image/jpeg;base64,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'
                            size='110'
                            name='texans'

                        />
                        <Text style={{color:'white', flex: 1}}>Texans</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65,paddingRight:65}}>
                        <UserAvatar
                            src='http://content.sportslogos.net/logos/7/153/full/318.png'
                            size='110'
                            name='ravens'
                        />
                        <Text style={{color:'white', flex: 1}}>Ravens</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65}}>
                        <UserAvatar
                            src='https://i.pinimg.com/originals/e6/7f/4f/e67f4fd39305d4c5fdd5d9b7ff3a629e.jpg'
                            size='110'
                            name='chiefs'
                        />
                        <Text style={{color:'white', flex: 1}}>Chiefs</Text>
                    </View>


                </View>

                <View style={{flexDirection:'row', alignContent:'center', paddingRight: 280, paddingTop: 10, marginTop: -100}}>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight:65}}>
                        <UserAvatar
                            size='110'
                            name='Saints'
                            src='https://i.pinimg.com/originals/85/ba/53/85ba534d7994fbb0d9f264457979d134.jpg'
                        />
                        <Text style={{color:'white'}}>Texans</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65,paddingRight:65}}>
                        <UserAvatar
                            size='110'
                            name='Rams'
                            src='https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336015-333d57bebbf61e2c5349alt1_full.jpg&w=900'
                        />
                        <Text style={{color:'white'}}>Ravens</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65}}>
                        <UserAvatar
                            size='110'
                            name='Colts'
                            src='https://rfathead-res.cloudinary.com/image/upload/q_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO1403_Indianapolis_Colts_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg'
                        />
                        <Text style={{color:'white'}}>Chiefs</Text>
                    </View>
                </View>


            </View>
        );
    }
}

class NBACard extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: -100}}>
                <View style={{paddingLeft: 20, paddingBottom: 10}}>
                    <Text style={{color:'white'}}h2>NBA</Text>
                </View>
                <View style={{flexDirection:'row', alignContent:'center', paddingRight: 280}}>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight:65}}>
                        <UserAvatar
                            src='data:image/jpeg;base64,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'
                            size='110'
                            name='texans'

                        />
                        <Text style={{color:'white', flex: 1}}>Texans</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65,paddingRight:65}}>
                        <UserAvatar
                            src='http://content.sportslogos.net/logos/7/153/full/318.png'
                            size='110'
                            name='ravens'
                        />
                        <Text style={{color:'white', flex: 1}}>Ravens</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65}}>
                        <UserAvatar
                            src='https://i.pinimg.com/originals/e6/7f/4f/e67f4fd39305d4c5fdd5d9b7ff3a629e.jpg'
                            size='110'
                            name='chiefs'
                        />
                        <Text style={{color:'white', flex: 1}}>Chiefs</Text>
                    </View>


                </View>

                <View style={{flexDirection:'row', alignContent:'center', paddingRight: 280, paddingTop: 10, marginTop: -100}}>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight:65}}>
                        <UserAvatar
                            size='110'
                            name='Saints'
                            src='https://i.pinimg.com/originals/85/ba/53/85ba534d7994fbb0d9f264457979d134.jpg'
                        />
                        <Text style={{color:'white'}}>Texans</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65,paddingRight:65}}>
                        <UserAvatar
                            size='110'
                            name='Rams'
                            src='https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336015-333d57bebbf61e2c5349alt1_full.jpg&w=900'
                        />
                        <Text style={{color:'white'}}>Ravens</Text>
                    </View>

                    <View style={{flex: 1, paddingLeft:65}}>
                        <UserAvatar
                            size='110'
                            name='Colts'
                            src='https://rfathead-res.cloudinary.com/image/upload/q_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO1403_Indianapolis_Colts_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg'
                        />
                        <Text style={{color:'white'}}>Chiefs</Text>
                    </View>
                </View>


            </View>
        );
    }
}

export {NFLCard, NBACard, TeamCard};