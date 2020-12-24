/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React from 'react';
const {width} = Dimensions.get('window');
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
const MultiSubCart = (props) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Multi Sub Plan</Text>
      <View style={{flexDirection: 'column'}}>
        {props.mealList.week_package.map((e, i) => {
          return (
            <View
              key={i}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Week {e.week}</Text>
              <Text>{e.program_name}</Text>
              <Text>{e.plan_packages_name}</Text>
              <Text> {e.program_price} KD</Text>
            </View>
          );
        })}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
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

export default MultiSubCart;
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
