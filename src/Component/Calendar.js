import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
const windowWidth = Dimensions.get('window').width;

const Calendar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.Devision}>
          <Calendar />
        </View>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: 'blue',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'red',
    zIndex: 1,
    top: '12%',
  },
  Devision: {
    flex: 3,
    backgroundColor: 'yellow',
    width: windowWidth,
  },
});
