import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';
import {forgotOtpActions} from '../actions/forgototp';
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

const StyledInputPass = ({label, formikProps, formikKey, icon, ...rest}) => {
  const inputStyles = {
    paddingLeft: 50,
    marginBottom: 5,
    textAlign: 'left',
    height: 50,
    width: 300,
    borderWidth: 1,
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 5,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontStyle: 'italic',
    borderColor: '#ccc',
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

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(4, 'Password must have more than 4 characters '),
});

const ForgotOtpScreen = (props) => {
  const [email, setEmail] = useState('');
  const [userid, setUserid] = useState(0);
  const [device_token, setToken] = useState('');
  const [device_type, setType] = useState('');
  useEffect(() => {
    getValue();
  }, []);
  if (props.forgototpError) {
    Toast.showWithGravity(props.forgototpError, Toast.SHORT, Toast.CENTER);
  }
  if (props.forgototpMessage) {
    Toast.showWithGravity(props.forgototpMessage, Toast.SHORT, Toast.CENTER);
  }
  const getValue = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const id = await AsyncStorage.getItem('userid');
      const userid = Number(id);
      const device_token = await AsyncStorage.getItem('device_token');
      const device_type = await AsyncStorage.getItem('device_type');
      setToken(device_token);
      setType(device_type);
      setEmail(email);
      setUserid(userid);
    } catch (e) {
      //  error
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
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
            fontSize: 15,
            textAlign: 'center',
            paddingHorizontal: 50,
          }}>
          A verification code sent to your email ending with **{email}**
        </Text>

        <Formik
          initialValues={{
            password: '',
          }}
          onSubmit={(values, actions) => {
            // actions.setSubmitting(true)
            var user = {};
            //user.username = values.username;
            user.verification_code = values.password;
            user.user_id = userid;
            user.device_token = device_token;
            user.device_type = device_type;
            user.grant_type = 'password';
            props.forgotOtpAction(user, props.navigation);
            //setTimeout(function(){props.clearAlerts();}, 3000);
            //props.navigation.navigate('Forgot')
            actions.setSubmitting(true);
          }}
          validationSchema={validationSchema}>
          {(formikProps) => (
            <React.Fragment>
              <StyledInputPass
                //label="Password"
                icon={'pass'}
                formikProps={formikProps}
                formikKey="password"
                placeholder="Verification Code"
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
                        shadowOpacity: 5,

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
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  forgototpError: state.forgototpReducer.forgototpError,
  forgototpMessage: state.forgototpReducer.forgototpMessage,
  forgototpData: state.forgototpReducer.forgototpData,
});

const actionCreators = {
  forgotOtpAction: forgotOtpActions.forgotOtpAction,
};

export default connect(mapStateToProps, actionCreators)(ForgotOtpScreen);
