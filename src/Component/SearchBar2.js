import React from 'react';
import {View, Text, Image, StyleSheet,TextInput} from 'react-native';
let styleCss = require('../GlobleStyle');

const SearchBar = () => {
  return(
    <View style={styles.searchBar}>
      <View style={styles.iconWidth}>
      <Image
            style={{width: 20, height: 19}}
            source={require('../../assets/search.png')}
          />
      </View>
      <View style={{flex:1}}>
      <TextInput
            style={{paddingVertical:3}}
            placeholder="Search"
          />
      </View>
      <View style={styles.iconWidth}>
      <Image
            style={{width: 20, height: 19}}
            source={require('../../assets/filterIcon.png')}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
   flexDirection:'row',
   justifyContent:'space-between',
   borderBottomWidth:1,
   borderColor:'#ddd',
   marginTop: 40,
  },
  iconWidth:{
    width:30,
    alignItems:'center',
    justifyContent:'center'

  }
});


export default SearchBar;