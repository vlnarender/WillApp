/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Govt
 */

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomStackNavigator} from '../components/navigation/stackNavigator';
import DrawerNavigator from '../components/navigation/drawer';
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const AppScreenStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={'Drawer'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Custom" component={CustomStackNavigator} />
    </Stack.Navigator>
  );
};

export default AppScreenStack;
