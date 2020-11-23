import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
let styleCss = require('../GlobalStyle');
import {profileActions} from '../actions/profile';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {CROSS, HEADER_unchecked} from '../_helpers/ImageProvide';
import Toast from 'react-native-simple-toast';
import {COOMMON_API} from '../util/api';
const ProfileEdit = (props) => {
  const [token, setToken] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(0);
  const [address, setAddress] = useState([]);
  const [language, setLanguage] = useState('');
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const first = await AsyncStorage.getItem('first_name');
      const last = await AsyncStorage.getItem('last_name');
      const phone = await AsyncStorage.getItem('phone_number');
      const add_ress = await AsyncStorage.getItem('address');
      const lang = await AsyncStorage.getItem('language');
      setFirst(first);
      setLast(last);
      setPhone(phone);
      setToken(token);
      setLanguage(lang);
      if (add_ress != null || add_ress != undefined) {
        const add = JSON.parse(add_ress);
        setAddress(add);
        add.forEach((element) => {
          if (element.is_default_address === 1) {
            setChecked(element.id);
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleSubmit = async () => {
    if (first == null || first == undefined || first == '') {
      Toast.showWithGravity('Must be non empty', Toast.SHORT, Toast.CENTER);
    } else if (last == null || last == undefined || last == '') {
      Toast.showWithGravity('Must be non empty', Toast.SHORT, Toast.CENTER);
    } else if (
      phone == null ||
      phone == undefined ||
      phone == '' ||
      isNaN(phone)
    ) {
      Toast.showWithGravity(
        'Must be valid mobile number',
        Toast.SHORT,
        Toast.CENTER,
      );
    } else if (phone.length < 8) {
      Toast.showWithGravity(
        'The phone number must be at least 8 digits',
        Toast.SHORT,
        Toast.CENTER,
      );
    } else {
      var formData = new FormData();
      formData.append('first_name', first);
      formData.append('last_name', last);
      formData.append('phone_number', phone);
      formData.append('default_address_id', checked);
      var add = {};
      add.token = token;
      add.language = language;
      COOMMON_API(formData, 'edit/profile').then((responseJson) => {
        if (responseJson.success) {
          props.profileAction();
          props.navigation.navigate('Profile');
        }
        Toast.showWithGravity(responseJson.message, Toast.SHORT, Toast.CENTER);
      });
    }
  };
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styleCss.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <Image style={{width: 20, height: 20}} source={CROSS} />
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 30}}>
          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
              <Image
                style={{width: 14, height: 16}}
                source={require('../../assets/register/name.png')}
              />
            </View>
            <View style={{flex: 5}}>
              <TextInput
                style={{height: 50, paddingLeft: 5}}
                onChangeText={(text) => setFirst(text)}
                value={first}
              />
            </View>
          </View>

          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
              <Image
                style={{width: 14, height: 16}}
                source={require('../../assets/register/name.png')}
              />
            </View>
            <View style={{flex: 5}}>
              <TextInput
                style={{height: 50, paddingLeft: 5}}
                onChangeText={(text) => setLast(text)}
                value={last}
              />
            </View>
          </View>
          <View style={styleCss.inputStyles}>
            <View style={styles.imgStyle}>
              <Image
                style={{width: 14, height: 14}}
                source={require('../../assets/register/phone.png')}
              />
            </View>
            <View style={{flex: 5}}>
              <TextInput
                style={{height: 50, paddingLeft: 5}}
                keyboardType="numeric"
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
            </View>
          </View>
          <View style={{marginTop: 35}}>
            {address.map((item, key) => {
              return (
                <View key={key}>
                  {checked === item.id ? (
                    <TouchableOpacity style={styles.radioAlign}>
                      <Image
                        style={styles.imgSize}
                        source={require('../../assets/header/checked.png')}
                      />
                      <View>
                        {checked === item.id ||
                        (checked === item.id &&
                          item.is_default_address === 1) ? (
                          <Text style={styles.radioTextHeading}>
                            {item.address_type} (My Default)
                          </Text>
                        ) : (
                          <Text style={styles.radioTextHeading}>
                            {item.address_type}
                          </Text>
                        )}
                        <Text numberOfLines={1} style={styles.radioText}>
                          {item.complete_address}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(item.id);
                      }}
                      style={styles.radioAlign}>
                      <Image style={styles.imgSize} source={HEADER_unchecked} />
                      <View>
                        {checked === item.id ||
                        (checked === item.id &&
                          item.is_default_address === 1) ? (
                          <Text style={styles.radioTextHeading}>
                            {item.address_type} (My Default)
                          </Text>
                        ) : (
                          <Text style={styles.radioTextHeading}>
                            {item.address_type}
                          </Text>
                        )}
                        <Text numberOfLines={1} style={styles.radioText}>
                          {item.complete_address}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
          <TouchableOpacity style={styleCss.btnButton} onPress={handleSubmit}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 35,
    alignItems: 'center',
    paddingLeft: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  radioAlign: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  radioText: {
    paddingLeft: 10,
    width: 130,
  },
  radioTextHeading: {
    paddingLeft: 10,
    color: '#98979d',
  },
  imgSize: {
    width: 25,
    height: 25,
  },
});
const actionCreators = {
  profileAction: profileActions.profileUserAction,
};
export default connect(null, actionCreators)(ProfileEdit);
