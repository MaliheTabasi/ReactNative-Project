/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import MyInput from './MyInput'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
      pressed:false
    }
    this.getInputText=this.getInputText.bind(this)
  }


  handlePress = (pressed)=> {
    this.setState({pressed:true})
  }
getInputText(text, inputName){
this.setState({inputName:text})
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
          style={styles.logo}
          source={require('./images/logo.jpg')}
        />
        <Text style={styles.welcome}> خوش اومدید به فروشگاه</Text>
        <Text style={styles.virgool}> دست سازه های ویرگول ! </Text>

        <View style={styles.emailPassContainer}>
          <Text style={styles.text}>لطفا وارد اکانت خودتون بشین</Text>
          <View style={{ display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:10}}>         
            <MyInput 
            inputName='email'
            placeholder='لطفا ایمیل خود را وارد کنید'
            keyboardType='email-address'
            onType={this.getInputText}
            />           
            <Text style={styles.text}>ایمیل:</Text>
          </View>
          <View style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>   
            <MyInput 
              inputName='password'
              placeholder='لطفا رمز عبور خود را وارد کنید'
              keyboardType='email-address'
              onType={this.getInputText}/>  
            <Text style={styles.text}>رمز عبور:</Text>
          </View>
        </View>

        <View style={styles.instaContainer}>

        <Image
          style={styles.instagram}
          source={require('./images/instagram.png')}
        />
        <Text style={styles.instaText}>اینستاگرام ویرگول</Text>
        <Image
          style={styles.telegram}
          source={require('./images/telegram.png')}
        />
        <Text style={styles.instaText}>کانال تلگرام ویرگول</Text>
        </View> 
        <TouchableHighlight
         underlayColor='lightgrey'
         style={styles.button}
         onPress={this.handlePress} >
         <Text style={styles.textInButton}>ورود</Text>
        </TouchableHighlight>
        <TouchableHighlight
         underlayColor='lightgrey'
         style={styles.button}
         onPress={this.handlePress} >
         <Text style={styles.textInButton}>هنوز اکانت ندارین؟! اینجا کلیک کنین!</Text>
        </TouchableHighlight>
        <Text style={styles.welcome} style={{ fontSize:10}}>{JSON.stringify(this.state.pressed)} </Text>

        
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </KeyboardAvoidingView>
    );
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
    width:150,
    height:150,
    borderRadius:20,
  },
  // email:{
  //   flex:1,
  //   justifyContent: '', 
  //   alignItems:'center'
  // },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color:'white',
  },
  virgool: {
    color:'yellow',
    fontSize: 20,
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
    borderWidth:1,
    borderColor:'yellow',
    borderRadius:10,
    paddingHorizontal:10,

  },
  instagram: {
    width:35,
    height:30,
    borderRadius:10,
  },
  telegram: {
    width:35,
    height:30,
    marginLeft:30,
    marginTop:4,
  },
  instaText:{
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
    height:45,
    borderRadius:20,    
  },
  textInButton:{
    textAlign:'center',
    fontSize:18, 
    paddingTop:10
  }
});
