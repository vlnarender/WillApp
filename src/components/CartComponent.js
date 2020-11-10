/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
let styleCss = require('../GlobalStyle');
import Header from './Header';
const CartComponent = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View>
        <Text>Cart</Text>
      </View>
    </>
  );
};

export default CartComponent;
