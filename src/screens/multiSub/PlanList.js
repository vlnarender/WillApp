/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

import {connect} from 'react-redux';
const checkGreen = require('../../../assets/checkGreen.png');
const plusOrange = require('../../../assets/plusOrange.png');
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
let styleCss = require('../../GlobalStyle');
import Header from '../../components/Header';
import {WEEK_LIST} from '../../_helpers/globalVeriable';
import {useNavigation} from '@react-navigation/native';
import {multiSubActions} from '../../actions/multiSub';
const PlanList = (props) => {
  const {itemId, featureId, oneday, week} = props.route.params;
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState({
    planId: null,
    packageId: null,
    data: null,
  });
  const [finalSelection, setFinalSelection] = useState();
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('Select First');
  const [selectedIndexRestaurent, setSelectedIndexRestaurent] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelectedPrice('Select First');
      setFinalSelection();
      setSelectedIndex([]);
      setSelectedIndexRestaurent([]);
      setSelectedButton({
        planId: null,
        packageId: null,
        data: null,
      });
    });
    return () => {
      // Unsubscribe for the focus Listener
      unsubscribe;
    };
  }, []);
  const selectItem = (index) => {
    if (selectedIndex.indexOf(index) > -1) {
      let newArray = selectedIndex.filter((indexObject) => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });
      setSelectedIndex(newArray);
    } else {
      setSelectedIndex([...selectedIndex, index]);
    }
  };
  const selectItemRestaurent = (index) => {
    if (selectedIndexRestaurent.indexOf(index) > -1) {
      let newArray = selectedIndexRestaurent.filter((indexObject) => {
        if (indexObject == index) {
          return false;
        }
        return true;
      });
      setSelectedIndexRestaurent(newArray);
    } else {
      setSelectedIndexRestaurent([...selectedIndexRestaurent, index]);
    }
  };
  let value = null;
  const selectValue = (index) => {
    value = props.mealListData.data[index];
  };

  if (props.mealListData) {
    value = props.mealListData.data[0];
    return (
      <>
        <Header />
        <ScrollView>
          <View>
            <Swiper
              style={{height: 200}}
              showsButtons={false}
              loop={true}
              autoplayTimeout={4}
              showsPagination={true}
              paginationStyle={{bottom: 10}}
              removeClippedSubviews={false}
              backgroundColor="transparent"
              activeDotColor="#f2925e"
              resizeMode="center"
              autoplay={true}>
              {itemId.coverimage.map((item, index) => (
                <Image
                  key={index}
                  style={styles.img}
                  source={{
                    uri: itemId.image_url + item.image,
                  }}
                />
              ))}
            </Swiper>

            <View style={styles.back}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={{color: 'red', fontSize: 11}}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[{marginTop: 10}, styleCss.mainContainer]}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 15}}>
              Plans
            </Text>
            <View style={{flexDirection: 'row', paddingBottom: 5}}>
              {WEEK_LIST.map((item, index) => {
                if (index + 1 === props.selectedWeek) {
                  return (
                    <View style={{flexDirection: 'row'}} key={index}>
                      <View
                        style={[
                          {marginRight: 5, marginTop: 3},
                          styles.selectedRb,
                        ]}
                      />
                      <Text style={styles.radioText}>{item.text}</Text>
                    </View>
                  );
                }
              })}
            </View>
            <View style={{paddingBottom: 60}}>
              <View>
                <View style={styles.cardBox}>
                  <Text style={[{alignSelf: 'flex-end'}, styles.toppickText]}>
                    Price : {selectedPrice}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.imgBox}>
                        <Image
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10,
                          }}
                          source={{
                            uri:
                              'https://will-app.s3.ap-south-1.amazonaws.com/' +
                              value.image,
                          }}
                        />
                      </View>
                      <View style={{flexDirection: 'column', padding: 10}}>
                        <Text>{value.program_name}</Text>
                        {value.plan_package.map((item, index) => {
                          return (
                            <TouchableOpacity
                              style={{flexDirection: 'row'}}
                              onPress={() => {
                                console.log(JSON.stringify(item));
                                let arrayData = item;
                                arrayData.package_diet_package = arrayData.package_diet_package.map(
                                  function (el) {
                                    el.meal = el.meal.map((me) => {
                                      var o = Object.assign({}, me);
                                      o.isSelected = false;
                                      return o;
                                    });
                                    var o = Object.assign({}, el);
                                    o.isSelected = false;
                                    return o;
                                  },
                                );
                                setSelectedPrice(`${item.package_price} KD`);
                                setSelectedButton({
                                  planId: value.plan_id,
                                  packageId: item.id,
                                  data: arrayData,
                                });
                                setFinalSelection({
                                  plan_id: value.plan_id,
                                  restaurant_id: value.restaurant_id,
                                  type: value.type,
                                  type_name: value.type_name,
                                  feature_id: value.feature_id,
                                  feature_name: value.feature_name,
                                  plan_type: value.plan_type,
                                  relative_id: value.relative_id,
                                  program_id: value.program_id,
                                  program_name: value.program_name,
                                  image: value.image,
                                  duration_type: value.duration_type,
                                  duration_type_name: value.duration_type_name,
                                  duration: value.duration,
                                });
                              }}
                              key={index}>
                              <View style={styles.radioCircle}>
                                {selectedButton.planId === value.plan_id &&
                                  selectedButton.packageId === item.id && (
                                    <View style={styles.selectedRb} />
                                  )}
                              </View>
                              <Text style={styles.itemContent}>
                                {item.package_name}
                              </Text>
                              <Text
                                style={[{paddingLeft: 5}, styles.itemContent]}>
                                {item.package_price} KD
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                    <View>
                      <Image
                        style={{
                          width: 22,
                          height: 22,
                        }}
                        source={
                          selectedButton.planId === value.plan_id
                            ? checkGreen
                            : plusOrange
                        }
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.checkout}
                  onPress={() => {
                    props.multiSub_LIST_ITEM({
                      ...finalSelection,
                      plan_package: selectedButton,
                    });
                    props.navigation.navigate('MultiMealSelection');
                  }}>
                  <Text style={styles.checkoutText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else return null;
};

const styles = StyleSheet.create({
  cardBox: {
    //backgroundColor: 'red',
    width: '100%',
    shadowOffset: {width: 10, height: 5},
    shadowColor: 'gray',
    shadowOpacity: 8,
    elevation: 3,
    backgroundColor: 'white', // invisible color
    borderRadius: 20,
    padding: 10,
    marginVertical: 15,
  },
  kd: {
    fontSize: 10,
    textAlign: 'right',
  },
  itemText: {
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  radioText: {
    marginRight: 5,
    fontSize: 13,
    color: '#000',
    fontWeight: '300',
  },
  radioCircle: {
    marginTop: 3,
    marginRight: 5,
    height: 13,
    width: 13,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#F2AE88',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: '#F2AE88',
  },
  itemContent: {
    fontSize: 12,
  },

  powerBox: {
    borderWidth: 1,
    borderColor: '#f2cab3',
    borderTopLeftRadius: 8,
    padding: 5,
    marginTop: 10,
  },

  borderBottomBox: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    paddingBottom: 10,
    marginBottom: 10,
  },

  imgBox: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 8,
    width: 78,
  },
  headingText: {
    fontSize: 10.5,
    fontWeight: '700',
    marginBottom: 5,
  },
  topPick: {
    borderWidth: 1,
    borderColor: '#f3b490',
    width: 50,
    position: 'absolute',
    left: -8,
    top: 2,
    zIndex: 9,
    backgroundColor: 'white',
    transform: [{rotate: '330deg'}],
  },
  toppickText: {
    fontSize: 10,
    color: '#f3b490',
    textAlign: 'center',
  },

  heading: {
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowColor: 'black',
    flexDirection: 'row',
    width: width * 0.88,
    shadowOpacity: 5,
    paddingBottom: 5,
    borderRadius: 5,
    paddingTop: 5,
    elevation: 5,
    margin: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },

  checkout: {
    backgroundColor: '#f2ae88',
    bottom: 0,
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 5,
    marginTop: 10,
  },
  checkoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  img: {
    height: 200,
    width: '100%',
  },
  back: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    borderRadius: 10,
    bottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
});

const mapStateToProps = (state) => {
  return {
    mealListData: state.mealListReducer.mealListData,
    multiSubWeek: state.commonReducer.multiSubWeek,
    selectedWeek: state.commonReducer.selectedWeek,
  };
};
const action = {
  multiSub_LIST_ITEM: multiSubActions.multiSublist_item,
};
export default connect(mapStateToProps, action)(PlanList);
