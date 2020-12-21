/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header/Header';
import {programActions} from '../actions/program';
import {paymentActions} from '../actions/payment';
import {calenderActions} from '../actions/Calender';
import {cartActions} from '../actions/cart';
import {ScrollView} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const CartComponent = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    getCartDetail();
  });
  const getCartDetail = () => {};
  return (
    <>
      <Header />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive">
        <Text>Cart View</Text>
        <Text>{JSON.stringify(props.route.params.cartData)}</Text>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    programError: state.programReducer.programError,
    programMessage: state.programReducer.programMessage,
    programData: state.programReducer.programData,
    programStatus: state.programReducer.programStatus,
    paymentData: state.paymentReducer.paymentData,
  };
};
const actionCreators = {
  programAction: programActions.programAction,
  paymentAction: paymentActions.paymentAction,
  calenderAction: calenderActions.calenderAction,
  restaurantId: cartActions.restaurantId,
  selectedPlan: cartActions.selectedPlan,
  selectedImageUrl: cartActions.selectedImageUrl,
};
export default connect(mapStateToProps, actionCreators)(CartComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  body: {
    flex: 2,
  },
  restorentBox: {
    width: '45%',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
  },
  grid: {
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
