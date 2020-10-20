import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
let styleCss = require('../GlobleStyle');
import Header from '../Component/Header';
import SearchBar from '../Component/SearchBar2';
import FavoriteList from '../Component/FavoriteList'
import {ScrollView} from 'react-native-gesture-handler';

const Favorite = () => {
  return (
    <>
      <Header />

      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styleCss.mainContainer}>
          <View>
            <View>
              <Text style={styles.favoriteHeading}>Favorite</Text>
            </View>
            <View style={{position: 'absolute', top: '60%'}}>
              <Image
                style={{width: 30, height: 19}}
                source={require('../../assets/arrowLeft.png')}
              />
            </View>
          </View>
          <SearchBar />
          <FavoriteList/>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  favoriteHeading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 40,
  },
});

export default Favorite;
