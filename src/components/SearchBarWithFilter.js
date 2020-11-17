import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {HOME_FILTER} from '../_helpers/ImageProvide';

let styleCss = require('../GlobalStyle');
const SearchbarFilter = () => {
  const [value, onChangeText] = useState();
  return (
    <View style={{marginTop: 40}}>
      <View style={styleCss.inputArea}>
        <View style={{flex: 1}}>
          <Image style={{width: 20, height: 20}} source={HOME_FILTER} />
        </View>

        <View style={{flex: 9}}>
          <TextInput
            style={styleCss.textInput}
            placeholder=" Search of Specfic Plan or Diet Company"
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={{flex: 1}}>
          <Image
            style={{width: 20, height: 20, alignSelf: 'flex-end'}}
            source={require('../../assets/home/search.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchbarFilter;
