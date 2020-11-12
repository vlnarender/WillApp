import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
let styleCss = require('../GlobalStyle');
import {connect} from 'react-redux';

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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/header/cart.png')}
          />
          <View
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              borderRadius: 100,
              backgroundColor: '#fcb85f',
              marginTop: 10,
              marginLeft: 15,
            }}>
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                color: '#fff',
                fontWeight: 'bold',
              }}>
              {props.listOfItem}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {listOfItem: state.cartReducer.listOfItems};
};
export default connect(mapStateToProps, null)(Header);
