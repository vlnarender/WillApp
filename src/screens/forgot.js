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
import {forgotActions} from '../actions/forgot';
import AsyncStorage from '@react-native-community/async-storage';
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
    shadowOpacity: 8,
    elevation: 20,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  };
  const iconStyle = {
    marginTop: 20,
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
          elevation: 30,
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
    shadowOpacity: 8,
    elevation: 20,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  };
  const iconStyle = {
    marginTop: 20,
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
          elevation: 30,
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
  password: yup
    .string()
    //.label('Password')
    .required('Please enter password')
    .min(5, 'Password must have more than 5 characters '),
  confirm_password: yup
    .string()
    .required('Please confirm password')
    .min(5, 'Password must have more than 5 characters '),
});

const signUp = ({values}) => {
  return values;
};

const ForgotScreen = (props) => {
  const [loding, setLoading] = useState(false);
  const [userid, setUserid] = useState(0);
  const [device_token, setToken] = useState('');
  const [device_type, setType] = useState('');
  useEffect(() => {
    getDeviceValue();
  }, []);
  const getDeviceValue = async () => {
    try {
      const device_token = await AsyncStorage.getItem('device_token');
      const device_type = await AsyncStorage.getItem('device_type');
      const id = await AsyncStorage.getItem('userid');
      const userid = Number(id);
      setToken(device_token);
      setType(device_type);
      setUserid(userid);
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  if (props.forgotError) {
    Toast.showWithGravity(props.forgotError, Toast.LONG, Toast.CENTER);
  }
  if (props.forgotMessage) {
    Toast.showWithGravity(props.forgotMessage, Toast.LONG, Toast.CENTER);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/login/logo.png')} />
          <Text
            style={{
              color: '#f2ae88',
              marginBottom: 30,
              fontSize: 23,
              textAlign: 'center',
            }}>
            Forgot Password
          </Text>

          <Text
            style={{
              width: '50%',
              color: '#f2ae88',
              marginBottom: 30,
              fontSize: 15,
              textAlign: 'center',
            }}>
            Please enter a password and confirm new password
          </Text>

          <Formik
            initialValues={{
              confirm_password: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              var user = {};
              user.user_id = userid;
              user.password = values.password;
              user.confirm_password = values.confirm_password;
              user.grant_type = 'password';
              user.device_token = device_token;
              user.device_type = device_type;
              user.language = 'en';
              props.forgotAction(user, props.navigation);
              actions.setSubmitting(true);
            }}
            validationSchema={validationSchema}>
            {(formikProps) => (
              <React.Fragment>
                <StyledInput
                  icon={'email'}
                  formikProps={formikProps}
                  formikKey="password"
                  placeholder="Type new password"
                  secureTextEntry
                  autoFocus
                />

                <StyledInputPass
                  icon={'pass'}
                  formikProps={formikProps}
                  formikKey="confirm_password"
                  placeholder="Confirm new password"
                  secureTextEntry
                />

                <React.Fragment>
                  <View
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      marginTop: 25,
                    }}>
                    <TouchableOpacity onPress={formikProps.handleSubmit}>
                      <View
                        style={{
                          backgroundColor: '#f2ae88',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 15,
                          padding: 10,
                          width: 300,
                          height: 50,
                          shadowColor: 'red',
                          shadowRadius: 16,
                          shadowOpacity: 10,
                          shadowOffset: {
                            width: 300,
                            height: 50,
                          },
                          elevation: 12,
                        }}>
                        <Text style={{color: 'white'}}>Submit</Text>
                      </View>
                    </TouchableOpacity>
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
  forgotError: state.forgotReducer.forgotError,
  forgotMessage: state.forgotReducer.forgotMessage,
  forgotData: state.forgotReducer.forgotData,
});

const actionCreators = {
  forgotAction: forgotActions.forgotUserAction,
};

export default connect(mapStateToProps, actionCreators)(ForgotScreen);
