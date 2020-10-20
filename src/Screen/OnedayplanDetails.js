import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
 import HeadingDrop from '../Component/HeadingDrop'
 import BreakFast from '../Component/BreakFast'
 import Lunch from '../Component/Lunch'
 import Dinner from '../Component/Dinner'

let styleCss = require('../GlobleStyle');


const OnedayplanDetails = () => {
  return (
    <>
    <ScrollView style={{flex:1}}>
      
    <View style={{marginBottom:15}}>
      <View>
        <Image
          style={{width: '100%', height: 220}}
          source={require('../../assets/foodImg.jpg')}
        />
      </View>

        <View style={styles.back}>
          <Text style={{color:'red', fontSize:11}}>Back</Text>
        </View>

      <View style={styles.itemBox}>
        <View style={styleCss.onedayplandetails}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/img31.png')}
              style={{width: '100%', height: 110, borderRadius: 10}}
            />
          </View>
          <View>
            <Text style={{fontSize: 12}}>Breakfast, Sandwiches</Text>
          </View>
          <View style={styles.textSpace}>
            <View>
              <Text style={styles.texStyle}>Delivery: 1kd</Text>
            </View>
            <View>
              <Text style={styles.texStyle}>Within: 30mins</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={styles.texStyle}> Excellent</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styleCss.mainContainer}>

    

        <HeadingDrop heading="Breakfast"/>
        <BreakFast/>

        <HeadingDrop heading="Lunch"/>
        <Lunch/>

        <HeadingDrop heading="Dinner"/>
        <Dinner/>
        <View style={{paddingBottom:50}}></View>
    </View>
    </ScrollView>
    
    <View style={{ alignItems:'center'}}>
      <View style={styles.checkout}>
       <Text style={styles.checkoutText}>Checkout</Text>
     </View>
  </View>
  </>
  );
};
const styles = StyleSheet.create({
  texStyle: {
    fontSize: 10,
  },
  itemBox: {
    position: 'absolute',
    alignSelf: 'center',
    top: 7,
  },
  textSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  back:{
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    position:'absolute',
    borderRadius:10,
    bottom:0,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    borderTopLeftRadius:0
  },
  
  checkout:{
    width:300,
    backgroundColor:'#f2ae88', 
    position:'absolute', 
    bottom:0,
    borderRadius:10,
    padding:10,
  },
  checkoutText:{
    textAlign:'center',
    color:'white',
    fontSize:16
  }


});
export default OnedayplanDetails;
