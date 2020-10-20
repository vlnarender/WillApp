import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
let styleCss = require('../GlobleStyle');
const Location = () => {
  return (
    <ScrollView>
    <View style={styleCss.mainContainer}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom:20
          }}>
          <Image
            style={{width: 200, height: 170, marginTop: 5}}
            source={require('../../assets/logo.png')}
          />
        </View>

         <View style={{marginBottom:20, alignSelf:'center'}}>
         <Image
            style={{width: 210, height: 210}}
            source={require('../../assets/mac.png')}
          />
         </View>   

        <View style={{paddingHorizontal:25}}>
          <Text style={{fontSize:28, fontWeight:'700', textAlign:'center'}}>Find restaurants Near your location!</Text>
          <Text style={{fontSize:14, textAlign:'center',marginTop:10}}>
            Please allow app access to your location to find restaurants near
            you.
          </Text>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:60}}>
          <View style={styleCss.buttonAllow}>
              <Text style={{textAlign:'center', fontSize:16, color:'white'}}>Yes, allow</Text>
          </View>
        </View>
        <View style={{marginTop:10, marginBottom:40}}>
          <Text style={{fontSize:14, textAlign:'center'}}>Don't allow</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Location;
