import React from 'react'
import {View, Image, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
let styleCss = require('../GlobalStyle');

const NoCreditCard = () =>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
      
      <View style={styleCss.mainContainer}>
        
     {/*  <View style={styleCss.creditHeader}>
          <View style={{ flex:1}}>
          <Image
              style={{width:35, height: 14}}
              source={require('../../assets/header/arrowLeft.png')}
            />
           
          </View>
          <View style={{flex:1, alignItems:'center'}}>
          <Image
              style={{width:50, height: 40}}
              source={require('../../assets/header/logo.png')}
            />
          </View>
          <View style={{ flex:1, alignItems:'flex-end'}}>
                <Image
              style={{width:20, height: 20}}
              source={require('../../assets/header/cross.png')}
            />
          </View>
      </View> */}
      

      
      <View style={{ flex:1, height:420, justifyContent:'center', alignItems:'center'}}>
      <Image
              style={{width:150, height: 120}}
              source={require('../../assets/payment/noCredit.png')}
            />
          
            <Text style={styleCss.creditCardHeading}>No Credit card</Text>
            <Text style={styleCss.creditText}>You don't have any credit cards associated with your account</Text>
      </View>
      
     {/*  <View style={{flex:1, marginBottom:20}}> 
      <TouchableOpacity 
      style={styleCss.btnButton}
      >
            <Text style={styles.text}>Add credit card</Text>
          </TouchableOpacity>
      </View> */}

      </View>


      
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  text: {
    color: 'white',
  },

  

 
});

export default NoCreditCard;