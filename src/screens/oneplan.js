import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {onedayplanActions} from '../actions/oneplan';
import Header from '../components/Header';
let styleCss = require('../GlobalStyle');
const OneDayPlan = (props) => {
  const {featureId} = props.route.params;
  if (props.onedayplanStatus && props.labelData) {
    return (
      <>
        <Header />
        <ScrollView>
          <View style={styleCss.mainContainer}>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <View style={{position: 'absolute', left: 10, top: '44%'}}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Home')}>
                  <Image
                    style={{width: 30, height: 19}}
                    source={require('../../assets/arrowLeft.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styleCss.featureBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1}}>
                    <Image
                      style={{width: 9, height: 19}}
                      source={require('../../assets/home/threeDotLeft.png')}
                    />
                  </View>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#ef8361',
                        fontSize: 16,
                      }}>
                      {props.onedayplanData.feature_deatils.name}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Image
                      style={{
                        width: 9,
                        height: 19,
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                      }}
                      source={require('../../assets/home/threeDotRight.png')}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 15,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{flex: 2}}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  {props.labelData.choose_plan}:
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#aaaaaa',
                    flexDirection: 'row',
                    borderRadius: 5,
                    padding: 5,
                  }}>
                  <View>
                    <Text>{props.labelData.day}</Text>
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 5}}>
                    <Image
                      style={{width: 12, height: 16}}
                      source={require('../../assets/ar.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* choose plan */}

          <ScrollView contentContainerStyle={styleCss.scrollViewCard}>
            {props.onedayplanData.diet_company.map((item, index) => {
              return (
                <View style={styleCss.homeCard} key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('OneCalendar', {
                        itemId: item,
                        featureId: featureId,
                      });
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <Image
                        source={{
                          uri: item.image_url + item.image,
                        }}
                        style={{width: '99%', height: 140, borderRadius: 10}}
                      />
                      <Text style={{fontSize: 12}}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  texStyle: {
    fontSize: 10,
  },
});
//export default OneDayPlan;
const mapStateToProps = (state) => {
  return {
    onedayplanStatus: state.onedayplanReducer.onedayplanStatus,
    onedayplanData: state.onedayplanReducer.onedayplanData,
    labelData: state.labelReducer.labelData,
  };
};
const actionCreators = {
  onedayplanAction: onedayplanActions.onedayplanAction,
};
export default connect(mapStateToProps, actionCreators)(OneDayPlan);
