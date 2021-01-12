import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {store} from './src/store/index';
import {Provider} from 'react-redux';
import PushController from './src/components/PushNotification/PushController';
import Main from './src/Main';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PushController />
      <Main />
    </Provider>
  );
};

export default App;
