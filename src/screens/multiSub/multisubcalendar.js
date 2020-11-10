/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {CalendarList} from 'react-native-calendars';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import {multiSubActions} from '../../actions/multiSub';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
const MultiSubCalender = (props) => {
  const navigation = useNavigation();
  const {featureId, itemId} = props.route.params;
  const [visible, setVisible] = useState(false);
  const [valueone, setValueone] = useState(null);
  const [selectWeek, setSelectWeek] = useState('Select');
  const PROP_ONE = [
    {
      key: 1,
      text: 'week 1',
    },
    {
      key: 2,
      text: 'week 2',
    },
    {
      key: 3,
      text: 'week 3',
    },
    {
      key: 4,
      text: 'week 4',
    },
    {
      key: 5,
      text: 'week 5',
    },
    {
      key: 6,
      text: 'week 6',
    },
    {
      key: 7,
      text: 'week 7',
    },
    {
      key: 8,
      text: 'week 8',
    },
  ];
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setVisible(false);
      setValueone(null);
      setValueone(null);
      setSelectWeek('Select');
    });
    return unsubscribe;
  }, []);
  const onDayPress = (day) => {
    if (valueone != null) {
      props.multiSubSelectedWeek(1);
      props
        .multiSubAction({
          feature_id: featureId,
          start_date: day.dateString,
          number_of_week: valueone,
        })
        .then(() => {
          props.navigation.navigate('MultiSubs', {
            featureId: featureId,
            date: day.dateString,
            week: valueone,
          });
        });
    } else {
      Toast.showWithGravity(
        'Please select number of week',
        Toast.SHORT,
        Toast.CENTER,
      );
    }
  };

  const renderCalendarWithSelectableDate = () => {
    return (
      <>
        <View style={styles.calendarbg}>
          <ScrollView>
            <View style={styles.topBg}>
              <View style={styles.arrow}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack('Home');
                  }}>
                  <Image
                    style={styles.arrowImg}
                    source={require('../../../assets/header/cross.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.roundShap}>
                <View style={styles.innerroundShap}>
                  <TouchableOpacity
                    onPress={() => setVisible(true)}
                    style={{
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        paddingVertical: 5,
                        paddingHorizontal: 12,
                        backgroundColor: '#F2AE88',
                        fontWeight: 'bold',
                        borderRadius: 5,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          paddingRight: 10,
                        }}>
                        {selectWeek}
                      </Text>
                      <Image
                        style={{width: 15, height: 15, marginTop: 5}}
                        source={require('../../../assets/ud_arrow.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                    Week
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.calendarArea}>
              <CalendarList
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={true}
                minDate={new Date().setDate(new Date().getDate() + 3)}
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
          <Modal
            isVisible={visible}
            backdropColor="#fff"
            backdropOpacity={0.1}
            onBackdropPress={() => setVisible(false)}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingVertical: 15,
                  fontWeight: '700',
                }}>
                Select Your Week
              </Text>
              <View style={styles.container}>
                {PROP_ONE.map((res, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setValueone(res.key);
                        setSelectWeek(res.text);
                        setVisible(false);
                        props.multiSubWeek(res.key);
                      }}
                      key={res.key}
                      style={styles.first}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.radioText}>{res.text}</Text>
                        <View style={styles.radioCircle}>
                          {valueone === res.key && (
                            <View style={styles.selectedRb} />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Modal>
        </View>
      </>
    );
  };
  return <>{renderCalendarWithSelectableDate()}</>;
};

const actionCreators = {
  multiSubAction: multiSubActions.multiSubAction,
  multiSubWeek: multiSubActions.multiSubWeek,
  multiSubSelectedWeek: multiSubActions.multiSubSelectedWeek,
};
export default connect(null, actionCreators)(MultiSubCalender);
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
    backgroundColor: '#0000', // invisible col
    alignItems: 'center',
    justifyContent: 'center',
  },

  todayDate: {
    fontSize: 26,
    color: 'white',
  },

  todayMonth: {
    fontSize: 18,
    color: '#9c9da4',
    fontWeight: 'bold',
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
  container: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  first: {
    width: width / 3,
    margin: 5,
    padding: 5,
  },
  radioText: {
    marginRight: 5,
    fontSize: 13,
    color: '#000',
    fontWeight: '300',
  },
  radioCircle: {
    marginTop: 3,
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
});
