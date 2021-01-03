import React from 'react';
import {View, Image, Text, StyleSheet, AppRegistry} from 'react-native';
import {connect} from 'react-redux';

import Swiper from 'react-native-swiper';
import {ScrollView} from 'react-native-gesture-handler';
import MealListing from './oneDayPlan/MealListing';
const Offers = (props) => {
  if (props.labelData) {
    return (
      <>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive">
          <View>
            <Swiper
              style={{height: 200}}
              showsButtons={false}
              loop={true}
              autoplayTimeout={4}
              showsPagination={true}
              paginationStyle={{bottom: 10}}
              removeClippedSubviews={false}
              backgroundColor="transparent"
              activeDotColor="#f2925e"
              resizeMode="center"
              autoplay={true}>
              <Image
                style={styles.img}
                source={require('../../assets/image/food-1.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/image/food-2.png')}
              />
              <Image
                style={styles.img}
                source={require('../../assets/image/food-3.png')}
              />
            </Swiper>
            <View style={styles.back}>
              <Text style={{color: '#f2ae88', fontSize: 11}}>
                {props.labelData.back}
              </Text>
            </View>
          </View>
          <MealListing />
        </ScrollView>

        <View style={{alignItems: 'center'}}>
          <View style={styles.checkout}>
            <Text style={styles.checkoutText}>{props.labelData.checkout}</Text>
          </View>
        </View>
      </>
    );
  } else return null;
};

// AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
  },
  back: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    borderRadius: 10,
    bottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },

  checkout: {
    width: 300,
    backgroundColor: '#f2ae88',
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    padding: 10,
  },
  checkoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});
const mapStateToProps = (state) => {
  return {
    labelData: state.labelReducer.labelData,
  };
};
export default connect(mapStateToProps, null)(Offers);
