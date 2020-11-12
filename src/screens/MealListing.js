import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Toast from 'react-native-simple-toast';
import {ADD_TO_THE_CART, GET_MY_CART} from '../util/api';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {connect} from 'react-redux';
import {
  CHECK_GREEN,
  PLUS_ORANGE,
  UP_ICON,
  IN_ICON,
} from '../_helpers/ImageProvide';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {cartActions} from '../actions/cart';
let styleCss = require('../GlobalStyle');
const MealListing = (props) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [selectedIndexRestaurent, setSelectedIndexRestaurent] = useState([]);
  const [mealList, setMealList] = useState([]);
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
  const selectItemRestaurent = (index, meal_id, meal, plan_diet_package_id) => {
    let tf = true;
    if (selectedIndexRestaurent.indexOf(meal_id) > -1) {
      let newArray = selectedIndexRestaurent.filter((indexObject) => {
        if (indexObject == meal_id) {
          return false;
        }
        return true;
      });
      setSelectedIndexRestaurent(newArray);
    } else {
      setSelectedIndexRestaurent([...selectedIndexRestaurent, meal_id]);
    }
    if (mealList.length !== 0) {
      setMealList(
        mealList.map((x, i) => {
          if (x.meal_id === meal.meal_id) {
            tf = false;
          }

          return x.meal_id === meal.meal_id
            ? {
                ...x,
                meal_type: meal.meal_type_id,
                plan_diet_package_id: plan_diet_package_id,
              }
            : x;
        }),
      );
    }
    if (tf) {
      setMealList([
        ...mealList,
        {
          day: 1,
          meal_id: meal.meal_id,
          meal_type: meal.meal_type_id,
          plan_diet_package_id: plan_diet_package_id,
        },
      ]);
    }
  };
  if (props.mealListData) {
    const value =
      props.mealListData.data[0].duration_type === '1'
        ? props.mealListData.data[0].plan_package.package_diet_package
        : props.mealListData.data[0].plan_package[0].package_diet_package;

    const checkoutList = () => {
      if (selectedIndexRestaurent.length === 3) {
        const data = props.mealListData.data[0];
        let assumblingData = {
          type: parseInt(data.type),
          start_date: props.day,
          duration_type: parseInt(data.duration_type),
          duration: data.duration,
          relative_id: data.relative_id,
          diet_company: [
            {
              restaurant_id: data.restaurant_id,
              week: 1,
              plan_id: data.plan_id,
              plan_packages_id: 1,
              meals: mealList,
            },
          ],
        };
        ADD_TO_THE_CART(assumblingData, 'user/addToCart').then((data) => {
          props.ListOfItems();
          navigation.navigate('Cart');
        });
      } else {
        Toast.showWithGravity(
          'Please select all the meal listed',
          Toast.SHORT,
          Toast.CENTER,
        );
      }
    };
    return (
      <>
        <View style={[{marginTop: 10}, styleCss.mainContainer]}>
          <View style={{paddingBottom: 60}}>
            <View>
              {value.map((item, index) => {
                return (
                  <Collapse isCollapsed={true} key={index}>
                    <CollapseHeader>
                      <TouchableOpacity
                        onPress={() => selectItem(index)}
                        activeOpacity={0.9}>
                        <View style={styles.heading}>
                          <Text style={styles.text}>{item.meal_name}</Text>
                          <View>
                            <Image
                              style={{width: 20, height: 20}}
                              source={
                                selectedIndex.indexOf(index) > -1
                                  ? UP_ICON
                                  : IN_ICON
                              }
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </CollapseHeader>
                    <CollapseBody>
                      <View style={styles.cardBox}>
                        {item.meal.map((list, i) => {
                          return (
                            <View style={styles.borderBottomBox} key={i}>
                              {list.meal_list.map((meal, ind) => {
                                return (
                                  <View key={ind}>
                                    <TouchableOpacity
                                      onPress={() =>
                                        selectItemRestaurent(
                                          index,
                                          meal.meal_id,
                                          meal,
                                          list.plan_diet_package_id,
                                        )
                                      }>
                                      <Text style={styles.kd}>
                                        KD {meal.price}
                                      </Text>
                                      <View style={{flexDirection: 'row'}}>
                                        <View>
                                          <View style={styles.imgBox}>
                                            <Image
                                              style={{
                                                width: 60,
                                                height: 100,
                                                borderRadius: 10,
                                              }}
                                              source={{
                                                uri:
                                                  'https://will-app.s3.ap-south-1.amazonaws.com/' +
                                                  meal.image,
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
                                            {meal.meal_name}
                                          </Text>
                                          <Text style={styles.itemContent}>
                                            {meal.discription}
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
                                                  selectedIndexRestaurent.indexOf(
                                                    meal.meal_id,
                                                  ) > -1
                                                    ? CHECK_GREEN
                                                    : PLUS_ORANGE
                                                }
                                              />
                                            </View>
                                          </View>
                                          <View style={styles.powerBox}>
                                            <View
                                              style={{flexDirection: 'row'}}>
                                              <Text style={styles.itemText}>
                                                P {meal.protein}g
                                              </Text>
                                              <Text style={styles.itemText}>
                                                Ca {meal.calorie}
                                              </Text>
                                            </View>
                                            <View
                                              style={{
                                                flexDirection: 'row',
                                                marginTop: 10,
                                              }}>
                                              <Text style={styles.itemText}>
                                                C {meal.carbohydrate}g
                                              </Text>
                                              <Text style={styles.itemText}>
                                                F {meal.fat}g
                                              </Text>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                );
                              })}
                            </View>
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
                <Text style={styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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

  itemContent: {
    fontSize: 10,
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
});

const mapStateToProps = (state) => {
  return {
    mealListData: state.mealListReducer.mealListData,
  };
};
const actionProps = {
  ListOfItems: cartActions.ListOfItems,
};
export default connect(mapStateToProps, actionProps)(MealListing);
