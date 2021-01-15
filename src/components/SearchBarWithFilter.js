import React, {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import {HOME_FILTER, HOME_SEARCH} from '../_helpers/ImageProvide';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

let styleCss = require('../GlobalStyle');
const SearchbarFilter = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10}}>
      <TouchableOpacity
        style={styleCss.inputArea}
        onPress={() => {
          navigation.navigate('SearchComponent');
        }}>
        <View style={{flex: 1}}>
          <Image style={{width: 20, height: 20}} source={HOME_FILTER} />
        </View>
        <View style={{flex: 9}}>
          <Text> {props.labelData.search_Text}</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            style={{width: 20, height: 20, alignSelf: 'flex-end'}}
            source={HOME_SEARCH}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    labelData: state.labelReducer.labelData,
  };
};

export default connect(mapStateToProps, null)(SearchbarFilter);
