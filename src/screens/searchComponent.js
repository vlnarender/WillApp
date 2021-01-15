import React from 'react';
import {View, Text, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header/Header';

const searchComponent = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{fontSize: 40, fontWeight: '500'}}>Search</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    labelData: state.labelReducer.labelData,
  };
};

export default connect(mapStateToProps, null)(searchComponent);
