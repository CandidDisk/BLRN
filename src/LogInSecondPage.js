import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import { Dropdown } from 'react-native-material-dropdown';

import { List } from 'react-native-paper';

import Checkbox from 'react-native-custom-checkbox';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  TextInput,
  Picker,
  CheckBox,
  TouchableOpacity
} from 'react-native';



//import DatePicker from 'react-native-datepicker';





class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{width: 330, marginBottom: 20}}>
                    <Input
                        style={{width: 150, color:'#FFFFFF'}}
                        placeholder='Username or email'
                        backgroundColor='transparent'
                        placeholderTextColor='white'
                    />
                </View>

                <View style={{width: 330, marginBottom: 20}}>
                    <Input
                        style={{width: 150, color:'#FFFFFF'}}
                        placeholder='Password'
                        backgroundColor='transparent'
                        placeholderTextColor='white'
                    />
                </View>



                <View style={{width: 330, marginLeft: 15, marginBottom: 20, flexDirection: 'row'}}>
                    <Checkbox
                        style={{backgroundColor:'transparent', borderColor:'#a4a7ab', borderRadius: 5, borderWidth: 1}}
                    />
                    <Text style={{marginTop: 3, marginLeft: 2, color: '#FFFFFF'}}>Remember me</Text>
                </View>



            </View>



        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    paddingTop: 5,
    color: 'white'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300
  },
  inputContainer: {
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',

      fontSize: 25,
      color: 'white'

  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
      color: 'white'
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


});

export { LoginView };