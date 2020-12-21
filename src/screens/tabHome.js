import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  BackHandler,
  Platform,
} from 'react-native';
const {width} = Dimensions.get('window');
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
import Toast from 'react-native-simple-toast';
import {
  HOME_PHOTO,
  HOME_THREE_DOTS_LEFT,
  HOME_THREE_DOTS_RIGHT,
  INFINITY,
  UP_DOWN_ARROW_BLACK,
} from '../_helpers/ImageProvide';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = (props) => {
  const navigation = useNavigation();
  const [viewall, setViewall] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [box, setBox] = useState('1');
  const handleBackButtonClick = () => {
    return false;
  };
  const route = useRoute();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    getValue();
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
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
    if (props.listOfItems === 0) {
      const navi = item.id === 1 ? 'OneDayPlan' : 'MultiSubsCalendar';
      props.onedayplanAction({feature_id: item.id}).then(() =>
        navigation.navigate(navi, {
          featureId: item.id,
        }),
      );
    } else {
      Toast.showWithGravity(
        'You already have selected some on your card.Please remove it or compelte the process.',
        Toast.SHORT,
        Toast.CENTER,
      );
    }
  };
  const dietCompanyNavigation = (data) => {
    props.selectedPlan(data);
    if (props.listOfItems === 0) {
      props.restaurantId(data.id);
      props.programName('diet_company');
      navigation.navigate('CommonCalendar', {
        restaurant_id: data.id,
      });
    } else {
      Toast.showWithGravity(
        'You already have selected some on your card.Please remove it or compelte the process.',
        Toast.SHORT,
        Toast.CENTER,
      );
    }
  };
  const programPopUp = (data) => {
    if (props.listOfItems === 0) {
      props.programName('programs');
      props.programId(data.id);
      props.progeamAction({program_id: data.id}).then((data) => {
        navigation.navigate('Programs');
      });
    } else {
      Toast.showWithGravity(
        'You already have selected some on your card.Please remove it or compelte the process.',
        Toast.SHORT,
        Toast.CENTER,
      );
    }
  };
  if (props.homeStatus && props.labelStatus) {
    const DATA3 = [
      {
        id: '1',
        title: props.labelData.diet_plan,
        imageUrl: HOME_PHOTO,
        description: 'All monthly deals',
      },
      {
        id: '2',
        title: props.labelData.restaurants,
        imageUrl: HOME_PHOTO,
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
        <SafeAreaView>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive">
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Are you willing to exit?</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight
                      style={{...styles.openButton}}
                      onPress={() => {
                        BackHandler.exitApp();
                      }}>
                      <Text style={styles.textStyle}>Yes</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={{...styles.openButton}}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <Text style={styles.textStyle}>No</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
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
                        <ScrollView
                          horizontal={true}
                          keyboardShouldPersistTaps="handled"
                          keyboardDismissMode="interactive">
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
                                          source={HOME_THREE_DOTS_LEFT}
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
                                          source={HOME_THREE_DOTS_RIGHT}
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
                              source={UP_DOWN_ARROW_BLACK}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <ScrollView
                        horizontal={true}
                        keyboardShouldPersistTaps="handled"
                        keyboardDismissMode="interactive">
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
                                      source={HOME_THREE_DOTS_LEFT}
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
                                      source={HOME_THREE_DOTS_RIGHT}
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
                        <ScrollView
                          keyboardShouldPersistTaps="handled"
                          keyboardDismissMode="interactive">
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
                        keyboardShouldPersistTaps="handled"
                        keyboardDismissMode="interactive"
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
                    <ScrollView
                      contentContainerStyle={styleCss.scrollViewCard}
                      keyboardShouldPersistTaps="handled"
                      keyboardDismissMode="interactive">
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
        </SafeAreaView>
      );
    } else {
      return (
        <View>
          <Image source={INFINITY} />
        </View>
      );
    }
  } else {
    return (
      <View>
        <Image source={INFINITY} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  restorentBox: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#f2ae88',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  thiredSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width / 2,
    alignSelf: 'flex-end',
    paddingVertical: 2,
  },
  borderBottomBox: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  total: {color: '#F2AE88', fontSize: 20, fontWeight: 'bold'},
  imgBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 2,
    width: 70,
  },
  headingText: {
    fontSize: 10.5,
    fontWeight: '700',
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    listOfItems: state.cartReducer.listOfItems,
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
  selectedPlan: cartActions.selectedPlan,
  onedayplanAction: onedayplanActions.onedayplanAction,
};
export default connect(mapStateToProps, actionCreators)(Home);
