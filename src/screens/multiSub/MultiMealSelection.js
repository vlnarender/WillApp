/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import Toast from 'react-native-simple-toast';
import Header from '../../components/Header';
import {multiSubActions} from '../../actions/multiSub';
import {connect} from 'react-redux';
import {
  CHECK_GREEN,
  PLUS_ORANGE,
  UP_DOWN_ARROW_BLACK,
  UP_ICON,
  IN_ICON,
} from '../../_helpers/ImageProvide';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {IMAGE_CDN} from '../../_helpers/globalVeriable';
import Loader from '../../components/Loader';

const MultiMealSelection = (props) => {
  const navigation = useNavigation();
  var [list_of_item, setlistofitem] = useState(props.LIST_ITEMS);
  const [daysNumber, setDaysNumber] = useState(1);
  const [mealListing, setmealListing] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDaysNumber(1);
      setmealListing([]);
      setSelectedData([]);
      setlistofitem(props.LIST_ITEMS);
      getPrimaryData();
    });
    return () => {
      unsubscribe;
    };
  }, [props.LIST_ITEMS]);
  const mealListingList = (id, meal_id, index, mealListData) => {
    setmealListing(
      mealListing.map((x, i) => {
        if (index === i) {
          x.id = id;
          x.meal_id = meal_id;
          x.selectedData = mealListData;
        }
        return x;
      }),
    );
  };
  const getPrimaryData = () => {
    let array = [];
    console.log('props.LIST_ITEMS', props.LIST_ITEMS);
    if (props.LIST_ITEMS) {
      props.LIST_ITEMS.plan_package.data.package_diet_package.map((item) => {
        array.push({id: null, meal_id: null, data: item, selectedData: null});
      });
    }
    setmealListing(array);
  };

  const checkoutList = () => {
    let tf = true;
    mealListing.map((item) => {
      if (item.id === null) {
        tf = false;
        Toast.showWithGravity(
          'Please select atlist one meal from each section (Breakfast,Lunch,Dinner etc.)',
          Toast.SHORT,
          Toast.CENTER,
        );
      }
    });
    if (tf) {
      let tempVar = mealListing.map((data) => {
        return data.selectedData !== null && data.selectedData;
      });
      setSelectedData([...selectedData, tempVar]);
      if (daysNumber === 7) {
        if (props.selectedWeek === props.multiSubWeek) {
          console.log(props.selectedMeal);
          navigation.navigate('Cart');
        } else {
          props.multiSubSelectedWeek(props.selectedWeek + 1);
          props.multiSubAddSelectedData({...selectedData, tempVar});
          navigation.navigate('MultiSubs');
        }
      }
      setDaysNumber(daysNumber + 1);
      getPrimaryData();
    }
  };
  if (props.LIST_ITEMS && mealListing) {
    console.log(props.LIST_ITEMS);
    return (
      <>
        <Header />
        <ScrollView style={{backgroundColor: '#ffffff'}}>
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
              <Image
                style={styles.img}
                source={{
                  uri: IMAGE_CDN + props.LIST_ITEMS.image,
                }}
              />
            </Swiper>
            <View style={styles.back}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: 'red', fontSize: 11}}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <View style={{padding: 5, justifyContent: 'flex-end'}}>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  alignSelf: 'flex-end',
                  flexDirection: 'row',
                  backgroundColor: '#ffffff',
                  justifyContent: 'center',
                  elevation: 10,
                  borderRadius: 10,
                }}>
                <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                  Day {daysNumber}
                </Text>
                <Image
                  source={UP_DOWN_ARROW_BLACK}
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 3,
                  }}
                />
              </View>
            </View>
            <View style={{width: '95%'}}>
              {mealListing.map((item, mtindex) => {
                return (
                  <Collapse isCollapsed={true} key={mtindex}>
                    <CollapseHeader>
                      <TouchableOpacity
                        onPress={() => console.log('hi')}
                        activeOpacity={0.9}>
                        <View style={styles.heading}>
                          <Text style={styles.text}>{item.data.meal_name}</Text>
                          <View>
                            <Image
                              style={{width: 20, height: 20}}
                              source={IN_ICON}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </CollapseHeader>
                    <CollapseBody>
                      <View style={styles.cardBox}>
                        {item.data.meal.map((meal_list, mlindex) => {
                          return meal_list['meal_list'].map(
                            (mealListData, mldindex) => {
                              return (
                                <TouchableOpacity
                                  key={mldindex}
                                  onPress={() => {
                                    mealListingList(
                                      meal_list.id,
                                      mealListData.meal_id,
                                      mtindex,
                                      mealListData,
                                    );
                                  }}
                                  style={{
                                    flexDirection: 'row',
                                    marginVertical: 5,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                  }}>
                                  <View>
                                    <View style={styles.imgBox}>
                                      <Image
                                        style={{
                                          width: 70,
                                          height: 60,
                                          borderRadius: 10,
                                        }}
                                        source={{
                                          uri: IMAGE_CDN + mealListData.image,
                                        }}
                                      />
                                    </View>
                                  </View>

                                  <View
                                    style={{
                                      flex: 2,
                                      paddingHorizontal: 10,
                                    }}>
                                    <Text style={styles.headingText}>
                                      {mealListData.meal_name}
                                    </Text>
                                    <Text style={styles.itemContent}>
                                      {mealListData.discription}
                                    </Text>
                                  </View>
                                  <View style={{width: 100}}>
                                    <View>
                                      <View
                                        style={{
                                          alignItems: 'flex-end',
                                        }}>
                                        <Image
                                          style={{
                                            width: 18,
                                            height: 18,
                                            marginLeft: 5,
                                          }}
                                          source={
                                            item.id === meal_list.id &&
                                            item.meal_id ===
                                              mealListData.meal_id
                                              ? CHECK_GREEN
                                              : PLUS_ORANGE
                                          }
                                        />
                                      </View>
                                    </View>

                                    <Text style={{fontSize: 10}}>
                                      Price : {mealListData.price} KD
                                    </Text>
                                    <View style={styles.powerBox}>
                                      <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.itemText}>
                                          P {mealListData.protein}g
                                        </Text>
                                        <Text style={styles.itemText}>
                                          Ca {mealListData.calorie}
                                        </Text>
                                      </View>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          marginTop: 10,
                                        }}>
                                        <Text style={styles.itemText}>
                                          C {mealListData.carbohydrate}g
                                        </Text>
                                        <Text style={styles.itemText}>
                                          F {mealListData.fat}g
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                              );
                            },
                          );
                        })}
                      </View>
                    </CollapseBody>
                  </Collapse>
                );
              })}

              <TouchableOpacity
                style={styles.checkout}
                onPress={() => checkoutList()}>
                <Text style={styles.checkoutText}>
                  {daysNumber != 7 && `${daysNumber} / 7`}
                  {'   '}
                  {daysNumber === 7 ? 'Next' : 'Continue'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else <Loader />;
};

const mapStateToProps = (state) => {
  return {
    multiSubWeek: state.commonReducer.multiSubWeek,
    selectedWeek: state.commonReducer.selectedWeek,
    selectedMeal: state.multiSubReducer.selectedMeal,
    LIST_ITEMS: state.multiSubReducer.LIST_ITEMS,
  };
};
const actionCreators = {
  multiSubAction: multiSubActions.multiSubAction,
  multiSubSelectedWeek: multiSubActions.multiSubSelectedWeek,
  multiSubAddSelectedData: multiSubActions.multiSubAddSelectedData,
};
export default connect(mapStateToProps, actionCreators)(MultiMealSelection);

const styles = StyleSheet.create({
  cardBox: {
    //backgroundColor: 'red',
    alignSelf: 'center',
    width: '96%',
    elevation: 3,
    backgroundColor: 'white', // invisible color
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  imgBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 5,
    width: 80,
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
  img: {
    height: 200,
    width: '100%',
    resizeMode: 'center',
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

  itemContent: {
    fontSize: 10,
  },

  powerBox: {
    borderWidth: 1,
    borderColor: '#f2cab3',
    borderTopLeftRadius: 8,
    padding: 5,
    marginTop: 5,
  },

  headingText: {
    fontSize: 10.5,
    fontWeight: '700',
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
    marginVertical: 20,
  },
  checkoutText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});
