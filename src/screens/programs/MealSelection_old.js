/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
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
const {width} = Dimensions.get('window');
import Toast from 'react-native-simple-toast';

import Header from '../../components/Header';
// let styleCss = require('../../GlobalStyle');
import {
  CHECK_GREEN,
  PLUS_ORANGE,
  UP_DOWN_ARROW_BLACK,
  UP_ICON,
  IN_ICON,
} from '../../_helpers/ImageProvide';
import {programPlanActions} from '../../actions/programPlan';
import Loader from '../../components/Loader';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {MealListData} from '../../_helpers/globalVeriable';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {CART_DATA, DIET_COMPANY, MEAL} from '../../_helpers/globalVeriable';
var temp_diet_company = [];

const MealSelection = (props) => {
  const navigation = useNavigation();
  const {
    BasicInfo,
    selectedPlan,
    NumberOfWeeks,
    GenderId,
    Meal,
    week,
  } = props.route.params;
  const [mealDataInfo, setmealDataInfo] = useState(MEAL);
  const [daysNumber, setDaysNumber] = useState(1);
  const [MealTitle, setMealTitle] = useState(MealListData);
  const [getPlan_packages_id, setPlan_packages_id] = useState();
  const selectItem = (index) => {
    setMealTitle(
      MealTitle.map((x, i) => {
        return {...x, selected: index === i ? true : false};
      }),
    );
  };

  console.log(JSON.stringify(Meal));
  const selectMeal = (
    mealData,
    mealId,
    type,
    meal_type,
    plan_diet_package_id,
    plan_id,
    plan_packages_id,
  ) => {
    let tf = true;
    setmealDataInfo(
      mealDataInfo.map((x, i) => {
        if (x != undefined) {
          if (
            x.day === (daysNumber || null) &&
            x.meal_type === (meal_type || null)
          ) {
            tf = false;
            let y = {
              ...x,
              plan_diet_package_id: plan_diet_package_id,
              meal_id: mealId,
            };

            return y;
          } else {
            return x;
          }
        } else {
          tf = true;
          return x;
        }
      }),
    );
    if (tf) {
      setmealDataInfo([
        ...mealDataInfo,
        {
          day: daysNumber,
          plan_diet_package_id: plan_diet_package_id,
          meal_type: meal_type,
          meal_id: mealId,
        },
      ]);
    }

    setMealTitle(
      MealTitle.map((x, i) => {
        if (x.type === type) {
          return {
            ...x,
            mealID: mealId,
            data: mealData,
            plan_id: plan_id,
            meal_type: meal_type,
            mealListId: mealData.meal_id,
            plan_diet_package_id: plan_diet_package_id,
            plan_packages_id: plan_packages_id,
          };
        } else return {...x};
      }),
    );
  };
  const checkoutList = () => {
    let tmpTF = false;
    MealTitle.map((data) => {
      tmpTF = (data.mealID === null) & true;
    });
    if (tmpTF) {
      Toast.showWithGravity(
        'Please select atlist one meal from each section (Breakfast,Lunch,Dinner)',
        Toast.SHORT,
        Toast.CENTER,
      );
    } else {
      if (daysNumber % 7 === 0) {
        let myArray = mealDataInfo;
        myArray = myArray.filter(function (obj) {
          return obj.day !== null && obj;
        });

        temp_diet_company.push({
          restaurant_id: props.restaurant_id,
          week: daysNumber / 7,
          plan_id: Meal.plan_id,
          plan_packages_id: getPlan_packages_id,
          meals: myArray,
        });
        setmealDataInfo(MEAL);
        if (daysNumber === week * 7) {
          let cartTemp = {
            duration_type: BasicInfo.duration_type,
            relative_id: BasicInfo.relative_id,
            start_date: props.selectedDate,
            plan_type: BasicInfo.plan_type,
            duration: BasicInfo.duration,
            diet_company: temp_diet_company,
            type: props.program_id,
            geGenderIdnder: GenderId,
          };
          navigation.navigate('CartComponent', {
            cartData: cartTemp,
          });
        }
      }

      setMealTitle(MealListData);
      setDaysNumber(daysNumber + 1);
    }
  };
  if (selectedPlan) {
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
              {selectedPlan.coverimage.map((item, index) => (
                <Image
                  key={index}
                  style={styles.img}
                  source={{
                    uri: selectedPlan.image_url + item.image,
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
            <View
              style={{
                width: '95%',
              }}>
              {MealTitle.map((item, mtindex) => {
                return (
                  <Collapse isCollapsed={item.selected} key={mtindex}>
                    <CollapseHeader>
                      <TouchableOpacity
                        onPress={() => selectItem(mtindex)}
                        activeOpacity={0.9}>
                        <View style={styles.heading}>
                          <Text style={styles.text}>{item.type}</Text>
                          <View>
                            <Image
                              style={{width: 20, height: 20}}
                              source={item.selected ? UP_ICON : IN_ICON}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </CollapseHeader>
                    <CollapseBody>
                      <View style={styles.cardBox}>
                        {Meal.package_diet_package.map((mealData, mindex) => {
                          return (
                            item.type === mealData.meal_name &&
                            mealData.meal.map((mealList, mlIndex) => {
                              return mealList.meal_list.map((meal_list, ml) => {
                                return (
                                  <TouchableOpacity
                                    key={mlIndex}
                                    onPress={() => {
                                      setPlan_packages_id(
                                        mealData.plan_packages_id,
                                      );
                                      selectMeal(
                                        meal_list,
                                        mealList.id,
                                        item.type,
                                        mealData.meal_type,
                                        mealList.plan_diet_package_id,
                                        mealData.plan_packages_id,
                                        Meal.plan_id,
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
                                            uri:
                                              'https://will-app.s3.ap-south-1.amazonaws.com/' +
                                              meal_list.image,
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
                                        {meal_list.meal_name}
                                      </Text>
                                      <Text style={styles.itemContent}>
                                        {meal_list.discription}
                                      </Text>
                                    </View>

                                    <View style={{width: 100}}>
                                      <View>
                                        <View
                                          style={{
                                            alignItems: 'flex-end',
                                            marginTop: 10,
                                          }}>
                                          <Image
                                            style={{
                                              width: 22,
                                              height: 22,
                                            }}
                                            source={
                                              item.mealListId ===
                                                meal_list.meal_id &&
                                              item.mealID === mealList.id
                                                ? CHECK_GREEN
                                                : PLUS_ORANGE
                                            }
                                          />
                                        </View>
                                      </View>
                                      <View style={styles.powerBox}>
                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.itemText}>
                                            P {meal_list.protein}g
                                          </Text>
                                          <Text style={styles.itemText}>
                                            Ca {meal_list.calorie}
                                          </Text>
                                        </View>
                                        <View
                                          style={{
                                            flexDirection: 'row',
                                            marginTop: 10,
                                          }}>
                                          <Text style={styles.itemText}>
                                            C {meal_list.carbohydrate}g
                                          </Text>
                                          <Text style={styles.itemText}>
                                            F {meal_list.fat}g
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                );
                              });
                            })
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
                  {daysNumber != week * 7 && `${daysNumber} / ${week * 7}`}
                  {'   '}
                  {daysNumber === week * 7 ? 'CheckOut' : 'Continue'}
                </Text>
              </TouchableOpacity>
            </View>
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

const mapStateToProps = (state) => {
  return {
    programPlanData: state.programPlanReduce.programPlanData,
    mealListData: state.mealListReducer.mealListData,
    restaurant_id: state.cartReducer.restaurant_id,
    selectedPlan: state.cartReducer.selectedPlan,
    selectedDate: state.cartReducer.selectedDate,
    features_id: state.cartReducer.features_id,
    program_id: state.cartReducer.program_id,
    imageUrl: state.cartReducer.imageUrl,
  };
};
const mapActionToProps = {
  programPlanAction: programPlanActions.programPlanAction,
};
export default connect(mapStateToProps, mapActionToProps)(MealSelection);
