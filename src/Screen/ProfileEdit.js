import React from 'react';
import {View, Image, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
let styleCss = require('../GlobleStyle');
import MyaddressList from '../Component/MyAddressList'
const ProfileEdit = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styleCss.mainContainer}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View>
            <View
              style={{
                borderRadius: 100,
                borderWidth: 10,
                borderColor: '#e2e2e2',
                backgroundColor: '#f2ae88',
                height: 120,
                width: 120,
              }}>

              </View>
            <View style={styleCss.roundShape}>
            <Image
              style={{width:19, height: 16}}
              source={require('../../assets/cameraWhite.png')}
            />
            </View>
          </View>
          
        </View>

        <View style={{marginBottom:50}}>
          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
            <Image
              style={{width:14, height: 16}}
              source={require('../../assets/name.png')}
            />
            </View>
              <View style={{flex:5}}>
                <TextInput style={{height:50}}  placeholder=" First Name" />
              </View>
          </View>

          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
            <Image
              style={{width:14, height: 16}}
              source={require('../../assets/name.png')}
            />
            </View>
              <View style={{flex:5}}>
                <TextInput style={{height:50}}  placeholder=" Last Name" />
              </View>
          </View>


          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
            <Image
              style={{width:18, height: 11}}
              source={require('../../assets/email.png')}
            />
            </View>
              <View style={{flex:5}}>
                <TextInput style={{height:50}}  placeholder=" Eamil" />
              </View>
          </View>


          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
            <Image
              style={{width:14, height: 14}}
              source={require('../../assets/phone.png')}
            />
            </View>
              <View style={{flex:5}}>
                <TextInput style={{height:50}}  placeholder=" Phone Number" />
              </View>
          </View>

          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
            <Image
              style={{width:12, height: 15}}
              source={require('../../assets/address.png')}
            />
            </View>
              <View style={{flex:5}}>
                <TextInput style={{height:50}}  placeholder=" My Address" />
              </View>
          </View>

          <View>
            <MyaddressList/>
          </View>
          
          <TouchableOpacity style={styleCss.btnButton}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgStyle:{
    width:35, 
    alignItems:'center', 
    paddingLeft:8,   
    justifyContent:'center'
  },
  text:{
    color:'white'
  }
});



export default ProfileEdit;
