import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';
import {ScrollView} from 'react-native-gesture-handler';
import {loginActions} from '../actions/login';
import AsyncStorage from '@react-native-community/async-storage';
import RoundCheckbox from 'rn-round-checkbox';
import {LOGIN_email} from '../_helpers/ImageProvide';

const FieldWrapper = ({children, label, formikProps, formikKey}) => (
  <View style={{marginHorizontal: 20, marginVertical: 1}}>
    <Text style={{marginBottom: 3}}>{label}</Text>
    {children}
    <Text style={{color: 'red'}}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

const StyledInput = ({label, formikProps, formikKey, icon, ...rest}) => {
  const inputStyles = {
    borderColor: '#e0e0e0',
    padding: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    textAlign: 'left',
    height: 50,
    width: 300,
    borderWidth: 1,
    shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 5,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  };
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper
      label={label}
      formikKey={formikKey}
      formikProps={formikProps}
      icon={icon}>
      <Image
        style={{
          zIndex: 1000,
          marginLeft: 20,
          marginTop: 25,
          position: 'absolute',
        }}
        source={LOGIN_email}
      />
      <TextInput
        style={inputStyles}
        inlineImageLeft="email"
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const StyledInputPass = ({label, formikProps, formikKey, icon, ...rest}) => {
  const inputStyles = {
    borderColor: '#e0e0e0',
    padding: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    textAlign: 'left',
    height: 50,
    width: 300,
    borderWidth: 1,
    shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 5,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  };
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper
      label={label}
      formikKey={formikKey}
      formikProps={formikProps}
      icon={icon}>
      <Image
        style={{
          zIndex: 1000,
          marginLeft: 20,
          marginTop: 25,
          position: 'absolute',
        }}
        source={require('../../assets/login/pass.png')}
      />
      <TextInput
        style={inputStyles}
        inlineImageLeft="email"
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const StyledSwitch = ({formikKey, formikProps, label, ...rest}) => (
  <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    <Switch
      value={formikProps.values[formikKey]}
      onValueChange={(value) => {
        formikProps.setFieldValue(formikKey, value);
      }}
      {...rest}
    />
  </FieldWrapper>
);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter valid email id')
    .required('Please enter a valid email id'),
  password: yup.string().required(),
});

const signUp = ({values}) => {
  return values;
};

const LoginScreen = (props) => {
  const [device_token, setToken] = useState('');
  const [device_type, setType] = useState('');
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    getDeviceValue();
  });
  if (props.loginError) {
    Toast.showWithGravity(props.loginError, Toast.SHORT, Toast.CENTER);
  }
  if (props.loginMessage) {
    Toast.showWithGravity(props.loginMessage, Toast.SHORT, Toast.CENTER);
  }
  const getDeviceValue = async () => {
    try {
      const device_token = await AsyncStorage.getItem('device_token');
      const device_type = await AsyncStorage.getItem('device_type');
      setToken(device_token);
      setType(device_type);
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/login/logo.png')} />
          <Text style={{color: '#f2ae88', fontSize: 20, marginTop: -45}}>
            Welcome
          </Text>
          <Text style={{color: '#f2ae88', fontSize: 15}}>
            Login to Continue
          </Text>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              var user = {};
              user.email = values.email;
              user.password = values.password;
              user.device_token = device_token;
              user.device_type = device_type;
              user.language = 'en';
              props.logAction(user, props.navigation);
              actions.setSubmitting(true);
            }}
            validationSchema={validationSchema}>
            {(formikProps) => (
              <React.Fragment>
                <StyledInput
                  //label="Mobile"
                  icon={'email'}
                  formikProps={formikProps}
                  formikKey="email"
                  placeholder="Email"
                  autoFocus
                />
                <StyledInputPass
                  //label="Password"
                  icon={'pass'}
                  formikProps={formikProps}
                  formikKey="password"
                  placeholder="Password"
                  secureTextEntry
                />

                <React.Fragment>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      textAlign: 'center',
                      flexDirection: 'row',
                      zIndex: 1000,
                      marginBottom: 0,
                    }}>
                    <View style={{marginTop: 4.3}}>
                      <RoundCheckbox
                        size={13}
                        icon={null}
                        backgroundColor={'#F2AE88'}
                        checked={selected}
                        onValueChange={async (newValue) => {
                          if (newValue) {
                            await AsyncStorage.setItem('remember', 'yes');
                            setSelected(newValue);
                          } else {
                            await AsyncStorage.setItem('remember', 'no');
                            setSelected(newValue);
                          }
                        }}
                      />
                    </View>
                    <View style={{width: '35%'}}>
                      <Text style={{paddingLeft: 10}}>Remebmber Me</Text>
                    </View>
                    <View style={{width: '35%'}}>
                      <Text
                        style={{color: '#f2ae88', textAlign: 'right'}}
                        onPress={() => {
                          props.navigation.navigate('Email');
                        }}>
                        Forgot Password?
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={formikProps.handleSubmit}
                    style={{
                      backgroundColor: '#f2ae88',
                      width: '75%',
                      borderRadius: 50,
                      paddingHorizontal: 10,
                      paddingVertical: 15,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#fff',
                      }}>
                      Log In
                    </Text>
                  </TouchableOpacity>
                  <Text style={{color: 'red'}}>
                    {formikProps.errors.general}
                  </Text>

                  <View
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      alignSelf: 'center',
                      flexDirection: 'column',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Register');
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#f2ae88',
                          alignSelf: 'center',
                        }}>
                        New User? Sign up
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        textAlign: 'center',
                      }}>
                      <View style={{height: 50}}>
                        <TouchableOpacity
                          onPress={() => {
                            props.logAction(
                              {
                                device_token: 'nnn',
                                device_type: '2',
                                language: 'en',
                              },
                              props.navigation,
                            );
                          }}>
                          <Text style={{fontSize: 16, color: '#f2ae88'}}>
                            Continouse as guest
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={{width: '90%', height: 50}}>
                      <Text
                        style={{
                          fontSize: 12,
                          justifyContent: 'center',
                          textAlign: 'center',
                          color: '#e6e6e6',
                        }}>
                        By sigining in you have indicate that you have read and
                        agreed on the term and conditions.,
                      </Text>
                    </View>
                  </View>
                </React.Fragment>
              </React.Fragment>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  bStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  btnContainer: {
    marginTop: 40,
    alignSelf: 'stretch',
  },
  inputContainer: {
    height: 40,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  banner: {
    alignSelf: 'stretch',
  },
});

const mapStateToProps = (state) => ({
  loginError: state.loginReducer.loginError,
  loginMessage: state.loginReducer.loginMessage,
  userData: state.loginReducer.userData,
});

const actionCreators = {
  logAction: loginActions.loginUserAction,
};

export default connect(mapStateToProps, actionCreators)(LoginScreen);
