import React, {useContext, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';
import AppButton from '../components/button';
import {ScrollView} from 'react-native-gesture-handler';
import {emailActions} from '../actions/email';
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
        source={require('../../assets/login/email.png')}
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
    //.label('Mobile')
    //.test('len', 'Must be valid mobile numebr', val => val.toString().length >= 10)
    //.typeError('Please enter a valid Mobile Number')
    .required('Please enter a valid email id'),
});

const signUp = ({values}) => {
  return values;
};

const EmailScreen = (props) => {
  const [loding, setLoading] = useState(false);
  if (props.emailError) {
    Toast.showWithGravity(props.emailError, Toast.SHORT, Toast.CENTER);
  }
  if (props.emailMessage) {
    Toast.showWithGravity(props.emailMessage, Toast.SHORT, Toast.CENTER);
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
          <View style={{marginBottom: 30}}></View>

          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={(values, actions) => {
              // actions.setSubmitting(true)
              var user = {};
              user.email = values.email;
              /*   user.device_token = "dkfjsdlkfjl";
                        user.device_type = "1";
                        user.language = "en"; */
              props.emailAction(user, props.navigation);
              //setTimeout(function(){props.clearAlerts();}, 3000);
              //props.navigation.navigate('Otp')
              actions.setSubmitting(true);
            }}
            validationSchema={validationSchema}>
            {(formikProps) => (
              <React.Fragment>
                <StyledInputPass
                  //label="Password"
                  icon={'email'}
                  formikProps={formikProps}
                  formikKey="email"
                  placeholder="Email"
                  autoFocus
                />

                <React.Fragment>
                  <View
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      marginTop: 25,
                      marginBottom: 5,
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
                          shadowRadius: 10,
                          shadowOpacity: 10,
                          shadowOffset: {
                            width: 300,
                            height: 50,
                          },
                          elevation: 8,
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
  emailError: state.emailReducer.emailError,
  emailMessage: state.emailReducer.emailMessage,
  emailData: state.emailReducer.emailData,
});

const actionCreators = {
  emailAction: emailActions.emailUserAction,
};

export default connect(mapStateToProps, actionCreators)(EmailScreen);
//export default EmailScreen;
