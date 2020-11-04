import {connect} from 'react-redux';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {programActions} from '../../actions/program';
import {calenderActions} from '../../actions/Calender';
import {cartActions} from '../../actions/cart';
import {ScrollView} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
let styleCss = require('../../GlobalStyle');
const ProgramsComponent = (props) => {
  const navigation = useNavigation();

  const calenderCall = (item) => {
    props.calenderAction({restaurant_id: item.id});
    props.selectedPlan(item);
    props.restaurantId(item.id);
    navigation.navigate('CommonCalendar');
  };

  if (props.programStatus) {
    props.selectedImageUrl(
      props.programData.program_deatils.image_url +
        props.programData.program_deatils.image,
    );
    return (
      <>
        <Header />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={{alignSelf: 'center', left: -50}}
                onPress={() => navigation.navigate('Home')}>
                <Image
                  style={{width: 30, height: 20}}
                  source={require('../../../assets/arrowLeft.png')}
                />
              </TouchableOpacity>
              <View style={styleCss.programBox}>
                <View>
                  <Image
                    source={{
                      uri:
                        props.programData.program_deatils.image_url +
                        props.programData.program_deatils.image,
                    }}
                    style={styleCss.programImage}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <Image
                      style={{
                        alignSelf: 'flex-start',
                      }}
                      source={require('../../../assets/home/threeDotLeft.png')}
                    />
                  </View>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#ef8361',
                      }}>
                      {props.programData.program_deatils.name}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Image
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                      }}
                      source={require('../../../assets/home/threeDotRight.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={{alignSelf: 'flex-start'}}>
                Restaurents Offer {props.programData.program_deatils.name}
              </Text>
              <View style={styles.grid}>
                {props.programData.diet_company.length === 0 ? (
                  <Text style={styleCss.noRecordCard}>No Record Found</Text>
                ) : (
                  props.programData.diet_company.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.restorentBox}
                        key={index}
                        onPress={() => {
                          calenderCall(item);
                        }}>
                        <View>
                          <Image
                            source={{
                              uri: item.image_url + item.image,
                            }}
                            style={styleCss.programImage}
                          />
                          <View style={{padding: 5}}>
                            <Text>Name : {item.name}</Text>
                            <Text>{item.iban}</Text>
                            <Text>Address : {item.address}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    programError: state.programReducer.programError,
    programMessage: state.programReducer.programMessage,
    programData: state.programReducer.programData,
    programStatus: state.programReducer.programStatus,
  };
};
const actionCreators = {
  programAction: programActions.programAction,
  calenderAction: calenderActions.calenderAction,
  restaurantId: cartActions.restaurantId,
  selectedPlan: cartActions.selectedPlan,
  selectedImageUrl: cartActions.selectedImageUrl,
};
export default connect(mapStateToProps, actionCreators)(ProgramsComponent);

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