
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { Text } from 'react-native-elements';
import UserAvatar from 'react-native-user-avatar';

export default class SportSave extends Component {
    state = {
        text: ''
    };
    render() {
        return (
            <View style={{marginBottom: 300}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 120, marginRight: 40}}>
                    <View style={{paddingLeft: 10}}>
                        <UserAvatar size="100" name='nfl' src='https://pmcvariety.files.wordpress.com/2016/02/nfl-logo.png?w=670'/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 20, marginBottom: 10}}>
                        <Text style={{color:'white'}} h1>
                            NFL
                        </Text>
                        <Text style={{color:'white'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{borderBottomColor: '#bbb', borderBottomWidth: 1}}/>
                </View>

                <View style = {styles.lineStyle} />

                <View style={{flex: 1, flexDirection: 'row', marginBottom: 120, marginTop: 10, marginRight: 40}}>
                    <View style={{paddingLeft: 10}}>
                        <UserAvatar size="100" name='nba' src='https://lh3.googleusercontent.com/fukCREv8Lsgrd_Lg-FQ9AVcwNUdb8VasiCXz-H5IgTmLcW5MujUNHpDeAEtcAxonbfY'/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 20, marginBottom: 10}}>
                        <Text style={{color:'white'}} h1>
                            NBA
                        </Text>
                        <Text style={{color:'white'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{borderBottomColor: '#bbb', borderBottomWidth: 1}}/>
                </View>

                <View style = {styles.lineStyle} />

                <View style={{flex: 1, flexDirection: 'row', marginBottom: 120, marginTop: 10, marginRight: 40}}>
                    <View style={{paddingLeft: 10}}>
                        <UserAvatar size="100" name='MLB' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png'/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 20, marginBottom: 10}}>
                        <Text style={{color:'white'}} h1>
                            MLB
                        </Text>
                        <Text style={{color:'white'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{borderBottomColor: '#bbb', borderBottomWidth: 1}}/>
                </View>


                <View style = {styles.lineStyle} />

                <View style={{flex: 1, flexDirection: 'row', marginBottom: 120, marginTop: 10, marginRight: 40}}>
                    <View style={{paddingLeft: 10}}>
                        <UserAvatar size="100" name='NHL' src='data:image/png;base64,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'/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 20, marginBottom: 10}}>
                        <Text style={{color:'white'}} h1>
                            NHL
                        </Text>
                        <Text style={{color:'white'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <View style={{borderBottomColor: '#bbb', borderBottomWidth: 1}}/>

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   }
 });