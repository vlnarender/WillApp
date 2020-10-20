import React from 'react';
import {View, Text, Image} from 'react-native';
let styleCss = require('../GlobleStyle');

const Card = props => {
  return (
  
    <View style={styleCss.serviceBox}>
      <Image source={{uri: props.imageUrl}} style={{width: 60, height: 60}} />
      <View style={styleCss.textContainer}>
        <Text style={styleCss.h2}>{props.title}</Text>
        <Text style={styleCss.ptext}>{props.description}</Text>
      </View>
    </View>
   
  );
};

export default Card;
