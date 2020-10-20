import React from 'react';
import {View, Text, Image} from 'react-native';
import ShoppingItem from '../Component/ShoppingItem'
import { ScrollView } from 'react-native-gesture-handler';
let styleCss = require('../GlobleStyle');

const ShoppingBag = () =>{
  return(
    <ScrollView>
    <View style={styleCss.mainContainer}>
      <View ><Text style={{fontSize:20}}> X</Text></View>
      <View>
        <Text style={{fontSize:20}}>My shopping bag</Text>
        <Text style={{fontSize:15}}>3 items added</Text>
      </View>
     
      <ShoppingItem/>
    </View>
    </ScrollView>
  )
}

export default ShoppingBag;