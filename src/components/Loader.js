import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
export default Loader = () => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
        overlayColor="rgba(0, 0, 0, 0.1)"
        animation="fade"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#fff',
  },
});
