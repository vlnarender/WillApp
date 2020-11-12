import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {onedayplanActions} from '../actions/oneplan';

import SearchbarFilter from '../components/SearchBarWithFilter';
import {labelActions} from '../actions/label';
import {homeActions} from '../actions/home';
import {profileActions} from '../actions/profile';
import {useNavigation, useRoute} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {programActions} from '../actions/program';
import {cartActions} from '../actions/cart';
let styleCss = require('../GlobalStyle');

const Home = (props) => {
  const navigation = useNavigation();
  const [viewall, setViewall] = useState(false);
  const [visible, setVisible] = useState(false);
  const [box, setBox] = useState('1');
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      props.profileAction();
      props.homeAction();
    } catch (e) {
      console.error(e);
    }
  };
  const toggleModal = () => {
    setVisible(!visible);
  };
  const navigateToPlan = (item) => {
    const navi = item.id === 1 ? 'OneDayPlan' : 'MultiSubsCalendar';
    props.onedayplanAction({feature_id: item.id}).then(() =>
      navigation.navigate(navi, {
        featureId: item.id,
      }),
    );
  };
  const dietCompanyNavigation = (data) => {
    props.restaurantId(data.id);
    props.programName('diet_company');
    navigation.navigate('CommonCalendar', {
      restaurant_id: data.id,
    });
  };
  const programPopUp = (data) => {
    props.programName('programs');
    props.programId(data.id);
    props.progeamAction({program_id: data.id}).then((data) => {
      navigation.navigate('Programs');
    });
  };
  if (props.homeStatus && props.labelStatus) {
    const DATA3 = [
      {
        id: '1',
        title: props.labelData.diet_plan,
        imageUrl: require('../../assets/home/photo.jpeg'),
        description: 'All monthly deals',
      },
      {
        id: '2',
        title: props.labelData.restaurants,
        imageUrl: require('../../assets/home/photo.jpeg'),
        description: 'Grab a quick meals',
      },
    ];
    if (
      Object.keys(props.homeData).length > 0 &&
      props.homeData.constructor === Object
    ) {
      if (props.homeData.dietcompanies.length > 4) {
        var dietcompanies = props.homeData.dietcompanies.slice(0, 4);
      } else {
        var dietcompanies = props.homeData.dietcompanies;
      }
      const homeData = props.homeData;
      return (
        <ScrollView>
          <ScrollView horizontal={true}>
            {DATA3.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setBox(item.id.toString());
                    if (item.id.toString() === '1') {
                      setViewall(false);
                    }
                  }}
                  key={index}>
                  <View
                    style={
                      box === item.id
                        ? styleCss.serviceBoxAlter
                        : styleCss.serviceBox
                    }>
                    <Image
                      source={item.imageUrl}
                      style={{width: 60, height: 60}}
                    />
                    <View style={styleCss.textContainer}>
                      <Text style={styleCss.h2}>{item.title}</Text>
                      <Text style={styleCss.ptext}>{item.description}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styleCss.mainContainer}>
            <SearchbarFilter />
          </View>
          {box === '1' && (
            <View>
              {!viewall && (
                <View>
                  <View style={styleCss.mainContainer}>
                    <View style={{marginTop: 20}}>
                      <Text style={styleCss.headingPro}>
                        {props.labelData.features}
                      </Text>
                      <ScrollView horizontal={true}>
                        {homeData.features.map((item, index) => {
                          return (
                            <View key={index}>
                              <TouchableOpacity
                                onPress={() => navigateToPlan(item)}>
                                <View style={styleCss.featureBox}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
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
                                          fontSize: 14,
                                        }}>
                                        {item.name}
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
                              </TouchableOpacity>
                            </View>
                          );
                        })}
                      </ScrollView>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                      }}>
                      <View>
                        <Text style={styleCss.headingPro}>
                          {props.labelData.programs}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={toggleModal}
                          style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#ccc',
                            padding: 5,
                            borderRadius: 5,
                          }}>
                          <Text>All Program</Text>
                          <Image
                            style={{
                              width: 10,
                              height: 10,
                              marginTop: 5,
                              marginLeft: 5,
                            }}
                            source={require('../../assets/ud_arrow_black.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <ScrollView horizontal={true}>
                      {homeData.programs.map((item, index) => {
                        const images = item.image_url + item.image;
                        return (
                          <TouchableOpacity
                            onPress={() => programPopUp(item)}
                            key={index}>
                            <View style={styleCss.programBox}>
                              <View>
                                <Image
                                  source={{
                                    uri: images,
                                  }}
                                  style={styleCss.programImage}
                                />
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 10,
                                  alignItems: 'center',
                                }}>
                                <View style={{flex: 1}}>
                                  <Image
                                    style={{
                                      alignSelf: 'flex-start',
                                    }}
                                    source={require('../../assets/home/threeDotLeft.png')}
                                  />
                                </View>
                                <View style={{flex: 4}}>
                                  <Text
                                    style={{
                                      textAlign: 'center',
                                      color: '#ef8361',
                                    }}>
                                    {item.name}
                                  </Text>
                                </View>
                                <View style={{flex: 1}}>
                                  <Image
                                    style={{
                                      flexDirection: 'row',
                                      alignSelf: 'flex-end',
                                    }}
                                    source={require('../../assets/home/threeDotRight.png')}
                                  />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                  <Modal
                    isVisible={visible}
                    animationIn="slideInLeft"
                    animationOut="slideOutLeft"
                    backdropColor="#fff"
                    backdropOpacity={0.1}
                    onBackdropPress={() => setVisible(false)}
                    style={{marginLeft: 0}}>
                    <View
                      style={{
                        width: '40%',
                        height: '40%',
                        borderColor: '#f2ae88',
                        borderWidth: 1,
                        backgroundColor: 'white',
                      }}>
                      <ScrollView>
                        {homeData.programs.map((item, i) => {
                          return (
                            <View key={i} style={{margin: 7}}>
                              <TouchableOpacity
                                style={styleCss.navButton}
                                onPress={() => {
                                  programPopUp(item);
                                }}>
                                <Text style={styleCss.dropText}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          );
                        })}
                      </ScrollView>
                    </View>
                  </Modal>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 20,
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: '700'}}>
                        {props.labelData.diet_companies}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => setViewall(true)}>
                        <Text style={{fontSize: 13, fontWeight: '700'}}>
                          {props.labelData.view_all}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{marginBottom: 15}}>
                    <ScrollView
                      contentContainerStyle={{
                        width: width,
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                      }}>
                      {dietcompanies.map((item, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => dietCompanyNavigation(item)}>
                            <View
                              style={{
                                shadowOffset: {width: 20, height: 20},
                                shadowColor: 'black',
                                shadowOpacity: 8,
                                elevation: 6,
                                borderRadius: 10,
                                backgroundColor: '#FFFFFF',
                                width: width / 2.2,
                                height: 170,
                                margin: 5,
                                padding: 5,
                              }}>
                              <Image
                                source={{
                                  uri: item.image_url + item.image,
                                }}
                                style={{width: '95%', height: 150, margin: 5}}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              )}
              {viewall && (
                <View style={{marginBottom: 15}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 17,
                      fontWeight: '500',
                      marginTop: 7,
                    }}>
                    {props.labelData.diet_companies}
                  </Text>
                  <ScrollView contentContainerStyle={styleCss.scrollViewCard}>
                    {homeData.dietcompanies.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => dietCompanyNavigation(item)}>
                          <View style={styleCss.homeCard} key={index}>
                            <Image
                              source={{
                                uri: item.image_url + item.image,
                              }}
                              style={{width: '95%', height: 150, margin: 5}}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              )}
            </View>
          )}
          {box === '2' && (
            <View>
              <Text>{props.labelData.restaurants}</Text>
            </View>
          )}
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Image source={require('../../assets/infinity.gif')} />
        </View>
      );
    }
  } else {
    return (
      <View>
        <Image source={require('../../assets/infinity.gif')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  restorentBox: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
  },
});
//export default Home;
const mapStateToProps = (state) => {
  return {
    homeError: state.homeReducer.homeError,
    homeMessage: state.homeReducer.homeMessage,
    homeData: state.homeReducer.homeData,
    homeStatus: state.homeReducer.homeStatus,
    labelData: state.labelReducer.labelData,
    labelStatus: state.labelReducer.labelStatus,
  };
};
const actionCreators = {
  homeAction: homeActions.homeAction,
  labelAction: labelActions.labelAction,
  profileAction: profileActions.profileUserAction,
  progeamAction: programActions.programAction,
  programId: cartActions.programId,
  restaurantId: cartActions.restaurantId,
  programName: cartActions.programName,
  onedayplanAction: onedayplanActions.onedayplanAction,
};
export default connect(mapStateToProps, actionCreators)(Home);
