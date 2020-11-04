import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {
  REC,
  REC_SELECTED,
  CHECK_GREEN,
  PLUS_ORANGE,
} from '../../_helpers/ImageProvide';
let styleCss = require('../../GlobalStyle');

import Loader from '../../components/Loader';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import {cartActions} from '../../actions/cart';
import {programPlanActions} from '../../actions/programPlan';
const PlanListProgram = (props) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [planId, setplanId] = useState(0);
  const [productId, setproductId] = useState(0);
  const [meal, setMeal] = useState(null);
  const currentXOffset = 0;
  // const {itemId, featureId, date} = props.route.params;
  const [gender, setGender] = useState([
    {gender: 'ALL', checked: true},
    {gender: 'Male', checked: false},
    {gender: 'Female', checked: false},
  ]);
  const [gender_id, setgender_id] = useState(1);
  const [weekNumber, setweekNumber] = useState(1);
  const [SelectedPrice, setSelectedPrice] = useState('Select First');
  const [BasicInfo, setBasicInfo] = useState({});

  const selectPlanList = (item) => {
    let index = parseInt(item.Week.replace('Week', ''));
    setweekNumber(index);
    getProgramPlanData(gender_id, index);
  };
  const selectGender = (index) => {
    setGender(
      gender.map((item, i) => {
        if (index === i) {
          setgender_id(1 + i);
          getProgramPlanData(i + 1, weekNumber);
        }
        return {
          ...item,
          checked: index === i ? true : false,
        };
      }),
    );
  };
  const getProgramPlanData = (gender_id, weekNumber) => {
    props.programPlanAction({
      program_id: props.program_id,
      restaurant_id: props.restaurant_id,
      type: gender_id,
      week: weekNumber,
    });
  };
  const scrollTo = (direction) => {
    let eachItemOffset = scrollViewWidth / 6; // Divide by 6 because I have 6 <View> items
    let _currentXOffset =
      direction === 'right'
        ? currentXOffset - eachItemOffset
        : currentXOffset + eachItemOffset;
    scrollViewRef.current.scrollTo({x: _currentXOffset, y: 0, animated: true});
  };
  if (props.programPlanData) {
    let programData = props.programPlanData;
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
              {props.selectedPlan.coverimage.map((item, index) => (
                <Image
                  key={index}
                  style={styles.img}
                  source={{
                    uri: props.selectedPlan.image_url + item.image,
                  }}
                />
              ))}
            </Swiper>
            <View style={styles.back}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: 'red', fontSize: 11}}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* gender selection */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => selectGender(1)}>
              <Image
                source={gender[1].checked ? REC_SELECTED : REC}
                style={{marginRight: 5, width: 10, height: 10, marginTop: 5}}
              />
              <Text>{gender[1].gender}</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Plan</Text>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => selectGender(2)}>
              <Image
                source={gender[2].checked ? REC_SELECTED : REC}
                style={{marginRight: 5, width: 10, height: 10, marginTop: 5}}
              />
              <Text>{gender[2].gender}</Text>
            </TouchableOpacity>
          </View>
          {/*End gender selection */}
          {/* Week selection */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 5,
              borderColor: '#f2ae88',
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}>
            <TouchableOpacity onPress={() => scrollTo('right')}>
              <Image
                source={require('../../../assets/left_arrow.png')}
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
            <ScrollView
              horizontal={true}
              ref={scrollViewRef}
              onContentSizeChange={(w, h) => setScrollViewWidth(w)}>
              {programData.duration.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => selectPlanList(item)}
                    key={index}>
                    <Image
                      source={item.is_selected ? REC_SELECTED : REC}
                      style={{
                        marginRight: 5,
                        marginLeft: 20,
                        width: 10,
                        height: 10,
                        marginTop: 5,
                      }}
                    />
                    <Text>{item.Week}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity onPress={() => scrollTo('left')}>
              <Image
                style={{marginLeft: 5}}
                source={require('../../../assets/right_arrow.png')}
              />
            </TouchableOpacity>
          </View>
          {/* End Week selection */}
          {/* Card View */}

          <View>
            {programData.plan.length === 0 ? (
              <Text
                style={{
                  textAlign: 'center',
                  padding: 15,
                  margin: 15,
                  backgroundColor: '#f2ae88',
                  borderRadius: 10,
                }}>
                No Recored Found
              </Text>
            ) : (
              <>
                <View style={styles.cardBox}>
                  <Text
                    style={{
                      fontSize: 10,
                      alignSelf: 'flex-end',
                      color: '#ccc',
                    }}>
                    Price : {SelectedPrice}
                  </Text>
                  {programData.plan.map((data, index) => {
                    return (
                      <View
                        style={{
                          paddingVertical: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#ccc',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                        key={index}>
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
                                  data.image,
                              }}
                            />
                          </View>
                          <View
                            style={{flexDirection: 'column', paddingLeft: 10}}>
                            <Text style={{fontWeight: 'bold'}}>
                              {data.program_name}
                            </Text>
                            {data.plan_package.map((item, i) => {
                              return (
                                <TouchableOpacity
                                  style={{flexDirection: 'row'}}
                                  key={i}
                                  onPress={() => {
                                    setSelectedPrice(item.package_price);
                                    setplanId(data.plan_id);
                                    setproductId(item.id);
                                    setMeal(item);
                                    setBasicInfo({
                                      plan_type: data.plan_type,
                                      relative_id: data.relative_id,
                                      duration_type: data.duration_type,
                                      duration: data.duration,
                                    });
                                  }}>
                                  <Image
                                    source={
                                      productId === item.id ? REC_SELECTED : REC
                                    }
                                    style={{
                                      marginRight: 5,
                                      width: 12,
                                      height: 12,
                                      marginTop: 5,
                                    }}
                                  />
                                  <Text>{item.package_name}</Text>
                                </TouchableOpacity>
                              );
                            })}
                          </View>
                        </View>
                        <View>
                          <Image
                            style={{width: 20, height: 21}}
                            source={
                              data.plan_id === planId
                                ? CHECK_GREEN
                                : PLUS_ORANGE
                            }
                          />
                        </View>
                      </View>
                    );
                  })}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('MealSelection', {
                        BasicInfo: BasicInfo,
                        selectedPlan: props.selectedPlan,
                        NumberOfWeeks: weekNumber,
                        GenderId: gender_id,
                        Meal: meal,
                        week: weekNumber,
                      });
                    }}
                    style={{
                      backgroundColor: '#F2AE88',
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </>
    );
  } else return <Loader />;
};

const styles = StyleSheet.create({
  cardBox: {
    //backgroundColor: 'red',
    alignSelf: 'center',
    width: '90%',
    shadowOffset: {width: 10, height: 5},
    shadowColor: 'gray',
    shadowOpacity: 10,
    elevation: 5,
    backgroundColor: 'white', // invisible color
    borderRadius: 20,
    padding: 10,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  img: {
    height: 200,
    width: '100%',
  },
  imgBox: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 8,
    width: 78,
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
    selectedPlan: state.cartReducer.selectedPlan,
    programPlanData: state.programPlanReduce.programPlanData,
    features_id: state.cartReducer.features_id,
    restaurant_id: state.cartReducer.restaurant_id,
    program_id: state.cartReducer.program_id,
  };
};
const mapActionToProps = {
  programPlanAction: programPlanActions.programPlanAction,
  selectedPlanActions: cartActions.selectedPlan,
};
export default connect(mapStateToProps, mapActionToProps)(PlanListProgram);