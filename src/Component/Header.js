import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
let styleCss = require('../GlobleStyle');

const Header = (props) => {
  return (
    <View style={styleCss.header}>
      <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=>props.props.navigation.openDrawer()}
        >
        <Image
          style={{width: 20, height: 15}}
          source={require('../../assets/menuIcon.png')}
        />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, alignItems: 'center', alignSelf: 'center'}}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../assets/smallLogo.png')}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
        <Image
          style={{width: 28, height: 22, marginRight:7}}
          source={require('../../assets/cart.png')}
        />
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#F2AE88',
            height: 20,
            width: 20,
            alignItems: 'center',
            justifyContent: 'center',
            position:'absolute',
            top:-8,
            
          }}>
          <Text style={{fontSize: 12, color: 'white'}}>2</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
