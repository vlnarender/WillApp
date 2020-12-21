import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {CONGRATULATION, OOPS} from '../_helpers/ImageProvide';
import {REGISTER_Artboard} from '../_helpers/ImageProvide';
import {CROSS} from '../_helpers/ImageProvide';

const paymentResult = ({navigation, route}) => {
  const {result, status} = route.params;
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
          }}>
          <Image source={REGISTER_Artboard}></Image>
        </View>
        <View
          style={{
            // alignSelf: 'flex-end',
            position: 'absolute',
            right: 10,
            top: 30,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={{height: 15, width: 15}} source={CROSS}></Image>
          </TouchableOpacity>
        </View>
        <Image
          style={{height: 300, width: 300}}
          source={status ? CONGRATULATION : OOPS}></Image>
        <View style={{width: 300, paddingTop: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f2ae88',
              paddingVertical: 20,
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              status
                ? navigation.navigate('MyOrders')
                : navigation.navigate('CartComponent');
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
                alignSelf: 'center',
              }}>
              {status ? 'Track your order' : 'Make payment again'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default paymentResult;
