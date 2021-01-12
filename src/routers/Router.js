/**
 * @format
 * @author Suraj Kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreenStack from './LoginRootStack';
import AppScreenStack from './AppScreenStack';
const Router = ({isSignedIn}) => {
  return (
    <NavigationContainer>
      {isSignedIn ? <AppScreenStack /> : <LoginScreenStack />}
    </NavigationContainer>
  );
};

export default Router;
