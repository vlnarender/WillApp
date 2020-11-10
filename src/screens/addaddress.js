import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FloatingLabelInput from '../components/FloatingLabelInput';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {addressListActions} from '../actions/addresslist';
import {addAddressActions} from '../actions/addaddress';
import AsyncStorage from '@react-native-community/async-storage';
let styleCss = require('../GlobalStyle');
import {ARROW_LEFT, LOGO} from '../_helpers/ImageProvide';
const Addaddress = (props) => {
  const [basic, setBasic] = useState('');
  const [complete, setComplete] = useState('');
  const [type, setType] = useState('');
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      const Token = await AsyncStorage.getItem('token');
      const language = await AsyncStorage.getItem('language');
      setToken(Token);
      setLanguage(language);
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  const handleBasicChange = (newText) => setBasic(newText);
  const handleCompleteChange = (newText) => setComplete(newText);
  const handleTypeChange = (newText) => setType(newText);
  const handleSubmit = () => {
    if (basic == null || basic == undefined || basic == '') {
      Toast.showWithGravity('Must be non empty', Toast.SHORT, Toast.CENTER);
    } else if (complete == null || complete == undefined || complete == '') {
      Toast.showWithGravity('Must be non empty', Toast.SHORT, Toast.CENTER);
    } else if (type == null || type == undefined || type == '') {
      Toast.showWithGravity('Must be non empty', Toast.SHORT, Toast.CENTER);
    } else {
      var data = {};
      data.basic_address = basic;
      data.complete_address = complete;
      data.address_type = type;
      if (checked) {
        data.is_default_address = 1;
      } else {
        data.is_default_address = 0;
      }
      props.addAddressAction(data).then(() => {
        props.addressListAction().then(() => {
          if (props.addressStatus) {
            props.navigation.navigate('Addresslist');
          }
        });
      });
    }
  };
  if (props.addaddressMessage) {
    Toast.showWithGravity(props.addaddressMessage, Toast.SHORT, Toast.CENTER);
  }
  if (props.labelData) {
    return (
      <>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styleCss.mainContainer}>
            <View style={styleCss.creditHeader}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Addresslist')}>
                  <Image style={{width: 36, height: 14}} source={ARROW_LEFT} />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image style={{width: 50, height: 40}} source={LOGO} />
              </View>
              <View style={{flex: 1}}></View>
            </View>
            <View style={{marginVertical: 30}}>
              <Text style={styleCss.headingPro}>Add new address</Text>
            </View>

            <FloatingLabelInput
              placeholder={props.labelData.basic_address}
              value={basic}
              onChangeText={handleBasicChange}
            />
            <FloatingLabelInput
              placeholder={props.labelData.complete_add}
              value={complete}
              onChangeText={handleCompleteChange}
            />

            <FloatingLabelInput
              placeholder={props.labelData.address_type}
              value={type}
              onChangeText={handleTypeChange}
            />
            <View style={{marginTop: 40}}>
              {checked ? (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  style={styles.radioAlign}>
                  <Image
                    style={styles.imgSize}
                    source={require('../../assets/header/checked.png')}
                  />
                  <View>
                    <Text numberOfLines={1} style={styles.radioText}>
                      Make this my default address?
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  style={styles.radioAlign}>
                  <Image
                    style={styles.imgSize}
                    source={require('../../assets/header/unchecked.png')}
                  />
                  <View>
                    <Text numberOfLines={1} style={styles.radioText}>
                      Make this my default address?
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: 'white',
            paddingLeft: 15,
            paddingRight: 15,
            paddingVertical: 30,
          }}>
          <TouchableOpacity
            style={[styleCss.btnButton, styleCss.mrTop]}
            onPress={handleSubmit}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 35,
    alignItems: 'center',
    paddingLeft: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  radioAlign: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  radioText: {
    paddingLeft: 10,
  },
  radioTextHeading: {
    paddingLeft: 10,
    color: '#98979d',
  },
  imgSize: {
    width: 25,
    height: 25,
  },
});

//export default Addaddress;
const mapStateToProps = (state) => {
  return {
    addressStatus: state.addresslistReducer.addressStatus,
    labelData: state.labelReducer.labelData,
    addaddressMessage: state.addaddressReducer.addaddressMessage,
  };
};
const actionCreators = {
  addressListAction: addressListActions.addressListAction,
  addAddressAction: addAddressActions.addAddressAction,
};
export default connect(mapStateToProps, actionCreators)(Addaddress);
