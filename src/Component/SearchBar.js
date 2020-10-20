import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


let styleCss = require('../GlobleStyle');
const Searchbar = () => {
  const [value, onChangeText] = useState();
  return (
    
      <View style={{marginTop: 40}}>
        <View style={styleCss.inputArea}>
          
          <View style={{flex:9}}>
          <TextInput
            style={styleCss.textInput}
            placeholder="Search of Specfic Plan or Diet Company"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          </View>
          
          <View>
          <Image
          style={{width:20, height: 20}}
          source={require('../../assets/search.png')}
        />
          </View>
         
        </View>
      </View>
  );
};

export default Searchbar;
