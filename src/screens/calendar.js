import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CROSS} from '../_helpers/ImageProvide';

import {useFocusEffect} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {ADD_AND_UPDATE_API} from '../util/api';
import Toast from 'react-native-simple-toast';
import {mealListActions} from '../actions/mealList';
import moment from 'moment';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import {CALANDER_CONFIG} from '../_helpers/globalVeriable';
import AsyncStorage from '@react-native-community/async-storage';
const OneDayCalender = (props) => {
  LocaleConfig.locales['ar'] = CALANDER_CONFIG['ar'];
  LocaleConfig.locales['en'] = CALANDER_CONFIG['en'];
  useEffect(() => {
    const lC = async () => {
      let lan = await AsyncStorage.getItem('language');
      LocaleConfig.defaultLocale = lan;
      setLocalLang(lan);
    };
    lC();
  }, []);
  const [localLang, setLocalLang] = useState('en');
  const {itemId, featureId} = props.route.params;
  const [select, setSelect] = useState(false);
  const [value, setValue] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      setSelect(false);
      setValue([]);
      let isActive = true;
      const fetchUser = async () => {
        try {
          var data = {
            restaurant_id: itemId.id,
          };
          ADD_AND_UPDATE_API(data, 'restaurant/calendar').then(
            (data) => {
              setSelect(true);
            },
            (error) => {
              Toast.showWithGravity(data.message, Toast.SHORT, Toast.CENTER);
              props.navigation.navigate('OneDayPlan');
            },
          );
        } catch (e) {
          //  error
          console.error(e);
        }
      };

      fetchUser();

      return () => {
        isActive = false;
      };
    }, [itemId.id]),
  );
  const onDayPress = (day) => {
    setSelect(false);
    props
      .mealListAction({
        restaurant_id: itemId.id,
        feature_id: featureId,
      })
      .then(() => {
        props.navigation.navigate('OneMeal', {
          itemId: itemId,
          featureId: featureId,
          oneday: day.dateString,
        });
      });
  };
  const monthName = () => {
    const months = CALANDER_CONFIG[localLang].monthNames;
    const d = new Date();
    return months[d.getMonth()];
  };
  const getDisabledDates = (calenderDate) => {
    const disabledDates = {};
    const start = moment(new Date());
    const end = moment(new Date()).add(2, 'days');

    for (
      let m = moment(start).add(0, 'days');
      m.diff(end, 'days') <= 0;
      m.add(1, 'days')
    ) {
      disabledDates[m.format('YYYY-MM-DD')] = {
        disabled: true,
        disableTouchEvent: true,
        customStyles: {
          container: {
            backgroundColor:
              new Date().getDate() === new Date(m).getDate()
                ? '#f2ae88'
                : '#75798e',
          },
          text: {
            color: '#fff',
          },
        },
      };
    }
    calenderDate.forEach((element) => {
      disabledDates[moment(element.date).format('YYYY-MM-DD')] = {
        textColor: '#75798e',
        disabled: true,
        disableTouchEvent: true,
        customStyles: {
          container: {
            backgroundColor: '#75798e',
          },
          text: {
            color: '#ccc',
          },
        },
      };
    });

    return disabledDates;
  };
  const renderCalendarWithSelectableDate = (calen) => {
    var calendar = calen.map((item) => {
      if (item.is_off) {
        return {date: item.date};
      }
    });
    return (
      <>
        <View style={styles.calendarbg}>
          <ScrollView>
            <View style={styles.topBg}>
              <View style={styles.arrow}>
                <TouchableOpacity
                  onPress={() => {
                    setSelect(true);
                    props.navigation.goBack();
                  }}>
                  <Image style={styles.arrowImg} source={CROSS} />
                </TouchableOpacity>
              </View>

              <View style={styles.roundShap}>
                <View style={styles.innerroundShap}>
                  <Text style={styles.todayDate}>{new Date().getDate()}</Text>
                  <Text style={styles.todayMonth}>{monthName()}</Text>
                </View>
              </View>
            </View>

            <View style={styles.calendarArea}>
              <View style={styles.selectHeading}>
                <Text style={styles.heading}>Select your Date</Text>
              </View>
              <CalendarList
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={true}
                minDate={new Date()}
                markingType={'period'}
                disableAllTouchEventsForDisabledDays
                onDayPress={onDayPress}
                theme={{
                  calendarBackground: '#343739',
                  todayTextColor: 'white',
                  todayBackgroundColor: '#f2ae88',
                  textDisabledColor: '#6a6e7f',
                  dayTextColor: 'white',
                  monthTextColor: 'white',
                  selectedDayBackgroundColor: '#333248',
                }}
                markedDates={{
                  ...getDisabledDates(calendar),
                }}
              />
            </View>
            <View style={styles.seleceted}>
              <View style={styles.rowSpace}>
                <View style={styles.colorBox1}></View>
                <View>
                  <Text style={styles.textColor}>Selected days</Text>
                </View>
              </View>
              <View>
                <View style={styles.rowSpace}>
                  <View style={styles.colorBox2}></View>
                  <View>
                    <Text style={styles.textColor}>Not Selected</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rowTwo}>
              <View style={styles.rowSpace}>
                <View style={styles.colorBox3}></View>
                <Text style={styles.textColor}>Unavailable for Selected</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  };
  if (select) {
    return <>{renderCalendarWithSelectableDate(value)}</>;
  } else {
    return <Loader />;
  }
};

const actionCreators = {
  mealListAction: mealListActions.mealListAction,
};
export default connect(null, actionCreators)(OneDayCalender);

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
    backgroundColor: 'green',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },

  calendarbg: {
    backgroundColor: '#343739',
    flex: 1,
  },
  topBg: {
    backgroundColor: '#f2ae88',
    height: 150,
    alignItems: 'center',
  },

  calendarArea: {
    marginTop: 80,
  },

  roundShap: {
    backgroundColor: '#393f5d',
    width: 150,
    height: 150,
    borderRadius: 100,
    position: 'absolute',
    top: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerroundShap: {
    backgroundColor: '#393f5d',
    width: 130,
    height: 130,
    borderRadius: 100,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  todayDate: {
    fontSize: 26,
    color: 'white',
  },

  todayMonth: {
    fontSize: 16,
    color: '#9c9da4',
  },

  seleceted: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },

  colorBox1: {
    width: 20,
    height: 20,
    backgroundColor: '#f2ae88',
    marginRight: 10,
  },

  colorBox2: {
    width: 20,
    height: 20,
    backgroundColor: '#ffffff',
    marginRight: 10,
  },

  colorBox3: {
    width: 20,
    height: 20,
    backgroundColor: '#75798e',
    marginRight: 10,
  },

  textColor: {
    color: '#f2ae88',
    fontSize: 14,
  },

  rowSpace: {
    flexDirection: 'row',
  },

  rowTwo: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  arrowImg: {
    width: 15,
    height: 15,
  },

  arrow: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 30,
  },

  heading: {
    fontSize: 28,
    color: 'white',
  },

  selectHeading: {
    alignItems: 'center',
    marginVertical: 15,
  },
});
