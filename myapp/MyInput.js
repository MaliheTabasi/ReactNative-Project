
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
      pressed:false
    }
  }
  render() {
    return (
        <TextInput
              autoFocus={true}
              keyboardType={this.props.keyboardType}
              style={styles.input}
              placeholder={this.props.placeholder}
              onChangeText={(text) => {this.props.onType(text, this.props.inputName)}}
              value={this.state.text}
            />
    )
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      marginBottom: 10,
      backgroundColor:'white',
      backgroundColor:'grey',
    },
    logo:{
      width:170,
      height:170,
      borderRadius:20,
    },
    // email:{
    //   flex:1,
    //   justifyContent: '', 
    //   alignItems:'center'
    // },
    welcome: {
      fontSize: 22,
      textAlign: 'center',
      margin: 0,
      color:'white',
    },
    virgool: {
      color:'yellow',
      fontSize: 25,
      textAlign: 'center',
      margin: 0,
    },
    text: {
      textAlign: 'center',
      fontSize:17,  
      marginLeft: 15, 
      marginBottom:15,  
      color:'white',
    },
    instaContainer:{
      flex:0.3,
      flexDirection:'row',
      justifyContent:'center',
      height:50,
    },
    instagram: {
      width:30,
      height:30,
      borderRadius:10,
    },
    telegram: {
      width:30,
      height:30,
      marginLeft:30,
      borderRadius:10,
    },
    instaText: {
        paddingTop:10,
        paddingLeft:2,
        fontSize:12, 
        color:'yellow',  
    },
    emailPassContainer: {
      borderColor:'yellow' ,
      borderWidth:1.5 ,
      padding:10, 
      borderRadius:20,
    },
    input:{
      height: 40,
      borderColor: 'white',
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      width:200,
      borderRadius:20,
      paddingRight:10,
      paddingLeft:10, 
    },
    button:{
      width:300,
      backgroundColor:'yellow',
      height:50,
      borderRadius:20,    
    },
    textInButton:{
      textAlign:'center',
      fontSize:18, 
      paddingTop:10
    }
  });