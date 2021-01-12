/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Router from './routers/Router';
import {loginActions} from './actions/login';
import Loader from './components/Loader/Loader';
import {getUniqueId, getSystemName} from 'react-native-device-info';
import GlobalFont from 'react-native-global-font';
const Main = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restore = async () => {
      const token = await AsyncStorage.getItem('token');
      const isSingIn = await AsyncStorage.getItem('verify');
      props.storeToken({
        isSignOut: isSingIn == 'Yes' ? false : true,
        token: token,
      });
      setLoading(false);
    };
    restore();
    let fontName = 'SFPro-Regular';
    GlobalFont.applyGlobal(fontName);
    const device_token = getUniqueId();
    setDeviceValue(device_token, getSystemName() === 'Android' ? '1' : '2');
  }, [props]);
  const setDeviceValue = async (device_token, device_type) => {
    try {
      await AsyncStorage.setItem('device_token', device_token);
      await AsyncStorage.setItem('device_type', device_type);
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return <Router isSignedIn={props.isSignOut && props.userToken != null} />;
};

const mapStateToProps = (state) => {
  return {
    userToken: state.loginReducer.userToken,
    isSignOut: state.loginReducer.isSignOut,
  };
};
const actionCreators = {
  storeToken: loginActions.storeToken,
};
export default connect(mapStateToProps, actionCreators)(Main);
