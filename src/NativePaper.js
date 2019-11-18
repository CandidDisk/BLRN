import * as React from 'react';
import { Component } from 'react';
import { TextInput } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Alert
} from 'react-native';

class Paper extends Component {
    state = {
        text: ''
    };

    render() {
        return (
            <View style={{width: 50, height: 100, paddingTop: 1000}}>
                <View styles={{width: 500}}>
                    <TextInput
                        style={{width: 50, height: 80}}
                        label='First Gay Name'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        mode='outlined'
                    />
                </View>
            </View>

        );

    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
    padding: 9
  },
  inputContainer: {
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      borderColor: '#5388a6',
      borderWidth: 1,
      fontSize: 25

  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  },
  inputContainerStyle: {
    margin: 8,
  },
  textArea: {
    height: 80,
    width: 60,
  },


});

export {Paper};