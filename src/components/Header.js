import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
let styleCss = require('../GlobalStyle');

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styleCss.header}>
      <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 20, height: 15}}
            source={require('../../assets/header/menuIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, alignItems: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/header/smallLogo.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/header/cart.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            padding: 10,
            width: 18,
            height: 18,
            borderRadius: 100,
            backgroundColor: '#fcb85f',
          }}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: '#fff',
            }}>
            0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
