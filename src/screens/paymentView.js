import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {cartActions} from '../actions/cart';
import {connect} from 'react-redux';
import FoodLoader from '../components/Loader/Loader_food';

const paymentView = ({navigation, route, ListOfItems}) => {
  const {paymentUrl, data} = route.params;
  const [visible, setVisible] = useState(true);
  const _onNavigationStateChange = (webViewState) => {
    var fullUrl = webViewState.url;
    var msgUrl = fullUrl.substring(0, 56);
    var array = fullUrl.split('?');

    if (
      array[0] ==
      'http://65.0.41.161/will_backend/public/hesabe-success-callback'
    ) {
      ListOfItems();
      navigation.navigate('PaymentResult', {
        result: 'Congratulations!',
        status: 1,
      });
    }
    if (
      array[0] == 'http://65.0.41.161/will_backend/public/hesabe-error-callback'
    ) {
      navigation.navigate('PaymentResult', {
        result: 'Payment Unsuccessful',
        status: 0,
      });
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{height: '100%'}}>
        <WebView
          onLoad={() => setVisible(false)}
          style={{height: 600}}
          onNavigationStateChange={_onNavigationStateChange.bind(this)}
          originWhitelist={['*']}
          scalesPageToFit={false}
          source={{uri: paymentUrl}}></WebView>
      </View>
      {visible && <FoodLoader />}
    </View>
  );
};

const actionCreators = {
  ListOfItems: cartActions.ListOfItems,
};

export default connect(null, actionCreators)(paymentView);