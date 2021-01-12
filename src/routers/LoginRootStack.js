/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OtpScreen from '../screens/otp';
import EmailScreen from '../screens/email';
import ForgotScreen from '../screens/forgot';
import LoginScreen from '../screens/Auth/login';
import RegisterScreen from '../screens/register';
import Spalsh from '../screens/anim-screen/index';
import ForgotOtpScreen from '../screens/forgototp';

const Stack = createStackNavigator();
const screenOptionStyle = {
  cardStyle: {backgroundColor: '#fff', color: '#f2A884'},
  headerShown: false,
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};
export const LoginScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={screenOptionStyle}
      mode="Splash">
      <Stack.Screen name="Splash" component={Spalsh} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
    </Stack.Navigator>
  );
};

export default LoginScreenStack;
