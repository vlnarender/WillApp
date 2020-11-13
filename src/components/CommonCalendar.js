/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {programPlanActions} from '../actions/programPlan';
import {dietCompanyPlanActions} from '../actions/dietPlan';
import {cartActions} from '../actions/cart';
const {height, width} = Dimensions.get('window');
import Toast from 'react-native-simple-toast';
import {ADD_AND_UPDATE_API} from '../util/api';
import moment from 'moment';
import {parseInt} from 'lodash';
import Loader from './Loader';
const CommonCalendar = (props) => {
  const navigation = useNavigation();
  const monthName = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[new Date().getMonth()];
  };
  var today = new Date();

  const dietCompanyPlannavigation = (day) => {
    rprops
      .dietCompanyPlanAction({
        program_id: props.program_id,
        restaurant_id: props.restaurant_id,
      })
      .then(() => {
        navigation.navigate('PlanListProgram', {
          selectedDate: day,
        });
      });
  };
  const programPalnnavigation = (day) => {
    props
      .programPlanAction({
        program_id: props.program_id,
        restaurant_id: props.restaurant_id,
      })
      .then(() => {
        navigation.navigate('PlanListProgram', {
          selectedDate: day.dateString,
        });
      });
  };

  // var priorDate = new Date().setDate(today.getDate() + 3);
  const getDisabledDates = (calenderDate) => {
    const disabledDates = {};
    const start = moment(new Date());
    const end = moment(new Date()).add(2, 'days');
    for (
      let m = moment(start).add(1, 'days');
      m.diff(end, 'days') <= 0;
      m.add(1, 'days')
    ) {
      disabledDates[m.format('YYYY-MM-DD')] = {
        textColor: '#f2ae88',
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
            fontWeight: 'bold',
          },
        },
      };
    }
    if (props.calenderData.data.calendar) {
      props.calenderData.data.calendar.map((element) => {
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
              fontWeight: 'bold',
            },
          },
        };
      });
    }

    return disabledDates;
  };

  if (props.calenderData) {
    return (
      <View style={styles.container}>
        <View style={styles.close}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/header/cross.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <View style={styles.innerroundShap}>
            <Text style={styles.todayDate}>{new Date().getDate()}</Text>
            <Text style={styles.todayMonth}>{monthName()}</Text>
          </View>
        </View>
        <View style={styles.Devision}>
          <Text style={styles.heading}>Select your Date</Text>
          <Calendar
            horizontal={true}
            pagingEnabled={true}
            minDate={new Date()}
            scrollEnabled={true}
            markingType={'period'}
            disableAllTouchEventsForDisabledDays
            rowHeight={5}
            theme={{
              calendarBackground: '#343739',
              todayBackgroundColor: '#f2ae88',
              textDisabledColor: '#6a6e7f',
              dayTextColor: '#ffffff',
              monthTextColor: '#ffffff',
              todayTextColor: '#ffffff',
              selectedDayBackgroundColor: '#333248',
            }}
            onDayPress={(day) => {
              props.selectedDate(day.dateString);
              props.programName === 'diet_company'
                ? dietCompanyPlannavigation(day.dateString)
                : programPalnnavigation(day.dateString);
            }}
            markingType={'custom'}
            markedDates={{
              ...getDisabledDates(),
            }}
          />

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
        </View>
      </View>
    );
  } else {
    return <Loader />;
  }
};

const mapStateToProps = (state) => {
  return {
    calenderMessage: state.calenderReducer.calenderMessage,
    calenderStatus: state.calenderReducer.calenderStatus,
    calenderError: state.calenderReducer.calenderError,
    calenderData: state.calenderReducer.calenderData,
    restaurant_id: state.cartReducer.restaurant_id,
    features_id: state.cartReducer.features_id,
    programName: state.cartReducer.programName,
    program_id: state.cartReducer.program_id,
  };
};

const reduxActions = {
  dietCompanyPlanAction: dietCompanyPlanActions.dietCompanyPlanAction,
  programPlanAction: programPlanActions.programPlanAction,
  selectedDate: cartActions.selectedDate,
};
export default connect(mapStateToProps, reduxActions)(CommonCalendar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#f2ae88',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    zIndex: 1,
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393f5d',
  },
  close: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    margin: 5,
    left: width / 1.08,
    position: 'absolute',
  },
  innerroundShap: {
    width: 140,
    height: 140,
    shadowOffset: {width: 0, height: 0},
    borderRadius: 100,
    backgroundColor: '#393f5d',
    shadowColor: '#000',
    elevation: 15,
    alignItems: 'center',
    shadowOpacity: 10,
    justifyContent: 'center',
  },
  Devision: {
    flex: 3,
    backgroundColor: '#343739',
    width: width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  heading: {
    fontSize: 28,
    color: 'white',
    alignSelf: 'center',
  },
  topBg: {
    backgroundColor: '#f2ae88',
    height: 150,
    alignItems: 'center',
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
    marginBottom: -50,
    paddingTop: 10,
    alignItems: 'center',
    alignContent: 'center',
  },
});
