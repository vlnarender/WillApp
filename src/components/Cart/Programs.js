/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const ProgramsCart = (props) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        {props.programName}
      </Text>
      {props.mealList.week_package == undefined ? (
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text>{props.mealList.concat_duration}</Text>
          <Text>{props.mealList.package_name}</Text>
          <Text>{props.mealList.total_amount} KD</Text>
        </View>
      ) : (
        <View>
          {props.mealList.week_package.map((e, i) => {
            return (
              <View
                key={i}
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text>Week {JSON.stringify(e.week)}</Text>
                <Text>{e.plan_package.package_name_en}</Text>
                <Text>{e.plan_package.price} KD</Text>
              </View>
            );
          })}
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'flex-end',
        }}>
        <View>
          <View style={styles.thiredSection}>
            <Text>Total</Text>
            <Text>KD {props.mealList.total_amount}</Text>
          </View>

          <View style={styles.thiredSection}>
            <Text>Delivery</Text>
            <Text>KD {props.mealList.delivery_amount}</Text>
          </View>

          <View style={styles.thiredSection}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>KD {props.mealList.sub_amount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgramsCart;

const styles = StyleSheet.create({
  total: {color: '#F2AE88', fontSize: 20, fontWeight: 'bold'},
  thiredSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width / 2,
    alignSelf: 'flex-end',
    paddingVertical: 2,
  },
});