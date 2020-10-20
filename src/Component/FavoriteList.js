import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
let styleCss = require('../GlobleStyle');

const FavoriteList = () => {
  return (
    <View style={{marginBottom:30}}>
    <View style={{marginTop: 30}}>
      <View style={styles.foodList}>
        <Image
          style={{width: '100%', height: 240, borderRadius: 10}}
          source={require('../../assets/food-1.png')}
        />
      </View>
      <View>
        <Text style={{fontSize: 14, fontWeight: '700', marginVertical: 8}}>
          Basic Kneads Pizza
        </Text>

        <Text style={{fontSize: 12}}>
          $$$, Seafood, Mediterranean, European, International...
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 7}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/star.png')}
          />
          <Text style={styles.fontStyle}>4.8 (120+)</Text>
        </View>

        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/time.png')}
          />
          <Text style={styles.fontStyle}>60 Min</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/money.png')}
          />
          <Text style={styles.fontStyle}>Free</Text>
        </View>
      </View>
    </View>

    <View style={{marginTop: 30}}>
      <View style={styles.foodList}>
        <Image
          style={{width: '100%', height: 240, borderRadius: 10}}
          source={require('../../assets/food-1.png')}
        />
      </View>
      <View>
        <Text style={{fontSize: 14, fontWeight: '700', marginVertical: 8}}>
          Basic Kneads Pizza
        </Text>

        <Text style={{fontSize: 12}}>
          $$$, Seafood, Mediterranean, European, International...
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 7}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/star.png')}
          />
          <Text style={styles.fontStyle}>4.8 (120+)</Text>
        </View>

        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/time.png')}
          />
          <Text style={styles.fontStyle}>60 Min</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/money.png')}
          />
          <Text style={styles.fontStyle}>Free</Text>
        </View>
      </View>
    </View>
</View>

  );
};

const styles = StyleSheet.create({
  foodList: {
    borderRadius: 10,
  },
  fontStyle: {
    fontSize: 11,
  },
  imageStyle: {
    width: 13,
    height: 13,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default FavoriteList;
