import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {profileActions} from '../actions/profile';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
let styleCss = require('../GlobalStyle');
import {DEV_CONFIGS} from '../util/constant';
import {COOMMON_API} from '../util/api';
import Header from '../components/Header';
import {HEADER_PROFILE_IMG} from '../_helpers/ImageProvide';
const Profile = (props) => {
  const data = [
    {
      label: 'Home Address',
    },
    {
      label: 'data 2',
    },
  ];

  const [loding, setLoading] = useState(false);
  const [image, setImage] = useState('');
  useEffect(() => {
    getTokenValue();
  }, []);
  const getTokenValue = async () => {
    try {
      props.profileAction();
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  const camera = async () => {
    try {
      var data = await AsyncStorage.getItem('token');
      var lang = await AsyncStorage.getItem('language');
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        result['android.permission.CAMERA'] &&
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        ImagePicker.showImagePicker({}, (response) => {
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
          } else {
            const source = {uri: response.uri};
            var image = {
              name: response.fileName,
              type: response.type,
              uri:
                Platform.OS === 'android'
                  ? response.uri
                  : respone.uri.replace('file://', ''),
            };
            var lang_uage = 'en';
            if (lang == 'ar') {
              lang_uage = 'ar';
            }
            var formData = new FormData();
            formData.append('image', image);
            var add = {};
            add.token = data;
            add.language = lang_uage;
            COOMMON_API(formData, 'upload/profile/image').then(
              (responseJson) => {
                props.profileAction();
              },
            );
          }
        });
      } else {
        Toast.showWithGravity(
          'Camera permission denied',
          Toast.SHORT,
          Toast.CENTER,
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
  if (props.profileError) {
    Toast.showWithGravity(props.forgotError, Toast.LONG, Toast.CENTER);
  }
  if (props.profileStatus) {
    return (
      <>
        <Header />
        <ScrollView>
          <View style={styleCss.mainContainer}>
            <View style={{marginBottom: 30}}>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View>
                  <View style={styles.profileImage}>
                    {props.profileData.image ? (
                      <Image
                        source={{
                          uri:
                            props.profileData.image_url +
                            props.profileData.image,
                        }}
                        style={{width: '100%', height: '100%'}}
                      />
                    ) : (
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={HEADER_PROFILE_IMG}
                      />
                    )}
                  </View>
                  <View style={styleCss.roundShape}>
                    <TouchableOpacity onPress={camera}>
                      <Image
                        style={{width: 19, height: 16}}
                        source={require('../../assets/header/cameraWhite.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: '700',
                      textAlign: 'center',
                    }}>
                    {props.profileData.username}
                  </Text>
                  <Text style={{fontSize: 14, textAlign: 'center'}}>
                    Sharq, Kuwait City
                  </Text>
                  <View style={{position: 'absolute', bottom: -3, right: -90}}>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>
                          {props.labelData.edit_all}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('ProfileEdit')
                          }>
                          <Image
                            style={{
                              width: 20,
                              height: 18,
                              marginLeft: 5,
                              marginTop: 4,
                            }}
                            source={require('../../assets/header/editOrange.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <View>
                  <Text style={styles.lable}>{props.labelData.first_name}</Text>
                  <Text style={styles.text}>
                    {props.profileData.first_name}
                  </Text>
                </View>
                <View style={{marginVertical: 20}}>
                  <Text style={styles.lable}>{props.labelData.last_name}</Text>
                  <Text style={styles.text}>{props.profileData.last_name}</Text>
                </View>
                <View>
                  <Text style={styles.lable}>{props.labelData.email}</Text>
                  <Text style={styles.text}>{props.profileData.email}</Text>
                </View>
                <View style={{marginVertical: 20}}>
                  <Text style={styles.lable}>{props.labelData.phone_no}</Text>
                  <Text style={styles.text}>
                    {props.profileData.phone_number}
                  </Text>
                </View>

                <View>
                  <Text style={styles.lable}>
                    {props.labelData.my_add_list}
                  </Text>
                  <Text style={styles.text}>
                    Default:
                    {props.profileData.default_address
                      ? props.profileData.default_address.basic_address
                      : null}
                    {'\n'}
                    {props.profileData.default_address
                      ? props.profileData.default_address.complete_address
                      : null}
                    {'\n'}
                    {props.profileData.default_address
                      ? props.profileData.default_address.address_type
                      : null}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
};
const styles = StyleSheet.create({
  lable: {fontSize: 13, color: '#a6a6a6'},
  text: {fontSize: 16, color: '#000000'},
  profileImage: {
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#e2e2e2',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
const mapStateToProps = (state) => {
  return {
    profileError: state.profileReducer.profileError,
    profileMessage: state.profileReducer.profileMessage,
    profileData: state.profileReducer.profileData,
    profileStatus: state.profileReducer.profileStatus,
    labelData: state.labelReducer.labelData,
    labelStatus: state.labelReducer.labelStatus,
  };
};
const actionCreators = {
  profileAction: profileActions.profileUserAction,
};

export default connect(mapStateToProps, actionCreators)(Profile);
