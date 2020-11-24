import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
let styleCss = require('../../GlobalStyle');
import {addressListActions} from '../../actions/addresslist';
import {addressSetActions} from '../../actions/addressset';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {
  CROSS,
  HEADER_unchecked,
  PAYMENT_noCredit,
  LOGO,
  CHECKED,
} from '../../_helpers/ImageProvide';

const Addresslist = (props) => {
  const [checked, setChecked] = useState(0);
  const [token, setToken] = useState('');
  const [lan_guage, setLanguage] = useState('en');
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      const Token = await AsyncStorage.getItem('token');
      const language = await AsyncStorage.getItem('language');
      setToken(Token);
      setLanguage(language);
      var add = {};
      add.token = Token;
      if (language == 'ar') {
        add.language = lan_guage;
      } else {
        add.language = lan_guage;
      }
      props.addressListAction();
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  const defaultAddressSet = (item) => {
    var add = {};
    add.token = token;
    if (lan_guage == 'ar') {
      add.language = lan_guage;
    } else {
      add.language = lan_guage;
    }
    var data = {};
    data.basic_address = item.basic_address;
    data.complete_address = item.complete_address;
    data.address_type = item.address_type;
    (data.is_default_address = 1), (data.id = item.id);
    props.addressSetAction(add, data, props.navigation).then(() => {
      if (props.addressSetStatus) {
        props.addressListAction();
      }
    });
  };
  if (props.addressStatus) {
    if (props.addressData.length > 0) {
      return (
        <>
          <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <View style={styleCss.mainContainer}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                  }}>
                  <Image style={{width: 50, height: 40}} source={LOGO} />
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', marginTop: 20}}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}>
                    <Image style={{width: 20, height: 20}} source={CROSS} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styleCss.headingPro}>My addresses</Text>
              </View>
              <View style={{marginTop: 35}}>
                {props.addressData.map((item, key) => {
                  return (
                    <View
                      key={key}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {item.is_default_address === 1 ? (
                        <TouchableOpacity style={styles.radioAlign}>
                          <Image style={styles.imgSize} source={CHECKED} />
                          <View>
                            {item.is_default_address === 1 ? (
                              <Text style={styles.radioTextHeading}>
                                {item.address_type} (My Default)
                              </Text>
                            ) : (
                              <Text style={styles.radioTextHeading}>
                                {item.address_type}
                              </Text>
                            )}
                            <Text numberOfLines={1} style={styles.radioText}>
                              {item.complete_address}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            defaultAddressSet(item);
                          }}
                          style={styles.radioAlign}>
                          <Image
                            style={styles.imgSize}
                            source={HEADER_unchecked}
                          />
                          <View>
                            {item.is_default_address === 1 ? (
                              <Text style={styles.radioTextHeading}>
                                {item.address_type} (My Default)
                              </Text>
                            ) : (
                              <Text style={styles.radioTextHeading}>
                                {item.address_type}
                              </Text>
                            )}
                            <Text numberOfLines={1} style={styles.radioText}>
                              {item.complete_address}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity
                          onPress={() => {
                            props.navigation.navigate('Editaddress', {
                              itemId: item,
                            });
                          }}>
                          <Text style={{fontSize: 14, color: '#f2ae88'}}>
                            Change
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            <TouchableOpacity
              style={[styleCss.btnButton, styleCss.mrTop]}
              onPress={() => props.navigation.navigate('Addaddress')}>
              <Text style={styles.text}>Add another address</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <ScrollView>
            <View style={styleCss.mainContainer}>
              <View style={styleCss.creditHeader}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image style={{width: 50, height: 40}} source={LOGO} />
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}>
                    <Image style={{width: 20, height: 20}} source={CROSS} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginTop: 30}}>
                <Text style={styleCss.headingPro}>My addresses</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 420,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 150, height: 120}}
                  source={PAYMENT_noCredit}
                />

                <Text style={styleCss.creditCardHeading}>
                  No Address Present
                </Text>
                <Text style={styleCss.creditText}>
                  You don't have any address associated with your account
                </Text>
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity
            style={[styleCss.btnButton, styleCss.mrTop]}
            onPress={() => {
              props.navigation.navigate('LocationPicker');
            }}>
            <Text style={styles.text}>Add another address</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    fontWeight: 'bold',
  },
  radioAlign: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  radioText: {
    paddingLeft: 10,
    width: 180,
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
const mapStateToProps = (state) => {
  return {
    addressData: state.addresslistReducer.addressData,
    addressStatus: state.addresslistReducer.addressStatus,
    addressSetData: state.addresssetReducer.addressSetData,
    addressSetStatus: state.addresssetReducer.addressSetStatus,
  };
};
const actionCreators = {
  addressListAction: addressListActions.addressListAction,
  addressSetAction: addressSetActions.addressSetAction,
};
export default connect(mapStateToProps, actionCreators)(Addresslist);
