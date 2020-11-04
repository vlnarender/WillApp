import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {ScrollView} from 'react-native-gesture-handler';
import MealListing from './MealListing';
import Header from '../components/Header';
const OneDayPlanMealListing = (props) => {
  const {itemId, featureId, oneday} = props.route.params;
  return (
    <>
      <Header />
      <ScrollView>
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
            {itemId.coverimage.map((item, index) => (
              <Image
                key={index}
                style={styles.img}
                source={{
                  uri: itemId.image_url + item.image,
                }}
              />
            ))}
          </Swiper>

          <View style={styles.back}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <Text style={{color: 'red', fontSize: 11}}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <MealListing
          restaurent_id={itemId.id}
          feature_id={featureId}
          day={oneday}
        />
      </ScrollView>
    </>
  );
};

AppRegistry.registerComponent('myproject', () => SwiperComponent);

const styles = StyleSheet.create({
  innerImg: {
    height: 120,
    width: '100%',
    borderRadius: 5,
  },
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
});

export default OneDayPlanMealListing;
