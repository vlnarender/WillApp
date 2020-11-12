/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Button} from 'react-native';
let styleCss = require('../GlobalStyle');
import {connect} from 'react-redux';
import Header from './Header';
import Loader from '../components/Loader';
const {width} = Dimensions.get('window');
import {ADD_AND_UPDATE_API, GET_MY_CART} from '../util/api';
import {
  CHECKED,
  CROSS,
  EDIT_PENCIL,
  HEADER_unchecked,
  IMAGE_CDN,
} from '../_helpers/ImageProvide';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {cartActions} from '../actions/cart';
const CartComponent = (props) => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [MealList, setMealList] = useState(null);
  useEffect(() => {
    GET_MY_CART('user/myCart').then((data) => {
      setMealList(data.data);
      data.success ? setLoader(false) : setLoader(true);
    });
  }, []);
  const editAddress = () => {
    console.log('editAddress');
  };
  const checkOut = () => {
    navigation.navigate('PaymentMethod');
  };
  const emptyYourCart = () => {
    ADD_AND_UPDATE_API({cart_id: MealList.cart_id}, 'user/remove-myCart').then(
      () => {
        props.ListOfItems();
        navigation.navigate('Home');
      },
    );
  };
  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <Header />
        <ScrollView style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: 'column', padding: 5}}>
            <View style={{flexDirection: 'column', paddingVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  My shopping bag
                </Text>
                <TouchableOpacity onPress={() => emptyYourCart()}>
                  <Image
                    style={{width: 20, height: 20, marginTop: 5}}
                    source={CROSS}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 15, paddingVertical: 8}}>
                {MealList.meal_list.length} items added
              </Text>
            </View>
            <View>
              {MealList.meal_list.map((meal_list, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 5,
                    }}
                    key={index}>
                    <View>
                      <View style={styles.imgBox}>
                        <Image
                          style={{
                            height: 60,
                            borderRadius: 5,
                          }}
                          source={{
                            uri: IMAGE_CDN + meal_list.image,
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={[
                        {
                          flex: 2,
                          paddingHorizontal: 10,
                        },
                        styles.borderBottomBox,
                      ]}>
                      <View>
                        <Text style={styles.headingText}>{meal_list.name}</Text>
                        <Text style={styles.itemContent}>
                          {meal_list.description}
                        </Text>
                      </View>
                      <View style={{alignSelf: 'flex-end'}}>
                        <Text>KD {meal_list.price}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            <View>
              <View style={styles.thiredSection}>
                <Text>Total</Text>
                <Text>KD {MealList.total_amount}</Text>
              </View>

              <View style={styles.thiredSection}>
                <Text>Delivery</Text>
                <Text>KD {MealList.delivery_amount}</Text>
              </View>

              <View style={styles.thiredSection}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>KD {MealList.sub_amount}</Text>
              </View>
              <View
                style={[
                  styles.thiredSection,
                  {width: width / 1.2, paddingVertical: 15},
                ]}>
                <Text style={{fontSize: 25}}>coupon</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    height: 35,
                    width: width / 2.5,
                    paddingVertical: 0,
                    paddingHorizontal: 20,
                    marginHorizontal: 10,
                  }}>
                  {MealList.coupon == null ? 'Enter Code' : MealList.coupon}
                </TextInput>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#f2ae88',
                    paddingVertical: 7,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingVertical: 10}}>
              <Text style={styles.total}>Delivery Address</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {MealList.my_address.map((address, index) => {
                  return (
                    <View key={index} style={{flexDirection: 'row'}}>
                      <View>
                        <Text>{address.basic_address}</Text>
                        <Text>{address.address_type}</Text>
                        <Text>{address.complete_address}</Text>
                        <Text>Bournemouth</Text>
                      </View>
                      <Image
                        source={address.is_active && CHECKED}
                        style={{width: 20, height: 20}}
                      />
                    </View>
                  );
                })}
                <View style={{justifyContent: 'space-between'}}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}
                    onPress={() => editAddress()}>
                    <Text style={{paddingHorizontal: 15}}>edit</Text>
                    <Image source={EDIT_PENCIL} style={{height: 15}} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text> + Add new Address</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => checkOut()}
              style={{
                backgroundColor: '#f2ae88',
                paddingVertical: 10,
                marginVertical: 10,
                alignContent: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Proceed to checkout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity styl={{padding: 20, marginBottom: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  borderBottomColor: '#2c2c2c',
                  borderBottomWidth: 5,
                  borderRadius: 1,
                  alignSelf: 'center',
                  fontSize: 15,
                  paddingVertical: 10,
                }}>
                Continue shopping
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  itemContent: {
    fontSize: 10,
  },
  thiredSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width / 2,
    alignSelf: 'flex-end',
    paddingVertical: 2,
  },
  borderBottomBox: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  total: {color: '#F2AE88', fontSize: 20, fontWeight: 'bold'},
  imgBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 2,
    width: 70,
  },
  headingText: {
    fontSize: 10.5,
    fontWeight: '700',
    marginBottom: 5,
  },
});

const actionProps = {
  ListOfItems: cartActions.ListOfItems,
};
export default connect(null, actionProps)(CartComponent);
