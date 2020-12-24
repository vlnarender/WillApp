/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const OneDayCart = (props) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>One Day Plan</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          {props.mealList.meal_list.map((e, i) => {
            return (
              <Text key={i}>
                {e.name}
                {', '}
              </Text>
            );
          })}
        </View>
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

export default OneDayCart;

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
