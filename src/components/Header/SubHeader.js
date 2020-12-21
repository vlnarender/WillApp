import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  ARROW_LEFT,
  CROSS,
  HEADER_SMALL_LOGO,
} from '../../_helpers/ImageProvide';
let styleCss = require('../../GlobalStyle');

const SubHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styleCss.header}>
      <View style={{flex: 1, alignSelf: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ARROW_LEFT} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 4, alignItems: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={{width: 50, height: 50}} source={HEADER_SMALL_LOGO} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={{height: 20, width: 20}} source={CROSS} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubHeader;
