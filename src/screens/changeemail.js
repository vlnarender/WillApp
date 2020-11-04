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
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import {COOMMON_API} from '../util/api';
const ChangeEmail = (props) => {
  const [token, setToken] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const lang = await AsyncStorage.getItem('language');
      setToken(token);
      setLanguage(lang);
    } catch (e) {
      console.error(e);
    }
  };
  const handleSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == null || email == undefined || email == '') {
      Toast.showWithGravity(
        'please enter email address',
        Toast.SHORT,
        Toast.CENTER,
      );
    } else if (!reg.test(email)) {
      Toast.showWithGravity(
        'please enter the email address correctly',
        Toast.SHORT,
        Toast.CENTER,
      );
    } else {
      var data = {};
      data.email = email;
      var add = {};
      add.token = token;
      add.language = language;
      let formBody = [];
      for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      COOMMON_API(formBody, 'update-email').then(async (responseJson) => {
        if (responseJson.success) {
          if (responseJson.data.is_otp_sent) {
            await AsyncStorage.setItem('tempemail', responseJson.data.email);
            props.navigation.navigate('Changeotp');
          }
        }
        Toast.showWithGravity(responseJson.message, Toast.SHORT, Toast.CENTER);
      });
    }
  };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styleCss.mainContainer}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 220, height: 220}}
            source={require('../../assets/login/logo.png')}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={styles.heading}>Change Email</Text>
          <Text style={styles.text}>Please enter your email id</Text>
        </View>

        <View style={styleCss.inputStylesPass}>
          <View style={styles.imgStyle}>
            <Image
              style={{width: 18, height: 11}}
              source={require('../../assets/login/email.png')}
            />
          </View>
          <View style={{flex: 5}}>
            <TextInput
              style={{height: 50, paddingLeft: 5}}
              placeholder="Enter New Email Id"
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoFocus
            />
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <TouchableOpacity onPress={handleSubmit} style={styleCss.btnButton}>
            <Text style={styles.buttontext}>Submit</Text>
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
    color: '#f2ae88',
    fontSize: 14,
    marginTop: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 14,
  },

  mrgTop: {
    marginTop: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f2ae88',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
export default ChangeEmail;
